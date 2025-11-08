import type { Slide, CreateSlideInput, UpdateSlideInput, SlideFilters, SlideCodeValidation, SlidePage, CreatePageInput, UpdatePageInput } from '~/types'

/**
 * スライド管理のビジネスロジック
 * コンポーネントから完全に分離された状態管理
 */
export const useSlides = () => {
  // 状態管理
  const slides = useState<Slide[]>('slides', () => [])
  const currentSlide = useState<Slide | null>('currentSlide', () => null)
  const filters = useState<SlideFilters>('slideFilters', () => ({}))
  const isLoading = useState<boolean>('slidesLoading', () => false)
  const error = useState<string | null>('slidesError', () => null)

  // スライド一覧を取得
  const fetchSlides = async () => {
    isLoading.value = true
    error.value = null
    
    try {
      const storedSlides = localStorage.getItem('slides')
      if (storedSlides) {
        const parsed = JSON.parse(storedSlides)
        slides.value = parsed.map((slide: any) => ({
          ...slide,
          createdAt: new Date(slide.createdAt),
          updatedAt: new Date(slide.updatedAt),
          pages: slide.pages?.map((page: any) => ({
            ...page,
            createdAt: new Date(page.createdAt),
            updatedAt: new Date(page.updatedAt)
          })) || []
        }))
      }
    } catch (e) {
      error.value = 'スライドの読み込みに失敗しました'
      console.error(e)
    } finally {
      isLoading.value = false
    }
  }

  // 特定のスライドを取得（ID指定）
  const getSlideById = (id: string): Slide | undefined => {
    return slides.value.find(slide => slide.id === id)
  }

  // 特定のスライドを取得（スライドコード指定）
  const getSlideByCode = (slideCode: string): Slide | undefined => {
    return slides.value.find(slide => slide.slideCode === slideCode)
  }

  // スライドコードのバリデーション
  const validateSlideCode = (slideCode: string, excludeId?: string): SlideCodeValidation => {
    // 英数字のみチェック
    const alphanumericRegex = /^[a-zA-Z0-9]+$/
    if (!alphanumericRegex.test(slideCode)) {
      return {
        isValid: false,
        message: 'スライドコードは英数字のみ使用できます'
      }
    }

    // 長さチェック
    if (slideCode.length < 3 || slideCode.length > 50) {
      return {
        isValid: false,
        message: 'スライドコードは3文字以上50文字以内で入力してください'
      }
    }

    // 重複チェック
    const existingSlide = slides.value.find(
      slide => slide.slideCode === slideCode && slide.id !== excludeId
    )
    if (existingSlide) {
      return {
        isValid: false,
        message: 'このスライドコードは既に使用されています'
      }
    }

    return { isValid: true }
  }

  // スライドを作成
  const createSlide = async (input: CreateSlideInput): Promise<Slide | null> => {
    // バリデーション
    const validation = validateSlideCode(input.slideCode)
    if (!validation.isValid) {
      error.value = validation.message || 'バリデーションエラー'
      return null
    }

    const newSlide: Slide = {
      id: generateId(),
      slideName: input.slideName,
      slideCode: input.slideCode,
      description: input.description,
      tags: input.tags || [],
      pages: [],
      createdAt: new Date(),
      updatedAt: new Date()
    }

    slides.value.push(newSlide)
    await saveToStorage()
    
    return newSlide
  }

  // スライドを更新
  const updateSlide = async (id: string, input: UpdateSlideInput): Promise<Slide | null> => {
    const index = slides.value.findIndex(slide => slide.id === id)
    if (index === -1) {
      error.value = 'スライドが見つかりません'
      return null
    }

    // スライドコードの変更がある場合はバリデーション
    if (input.slideCode && input.slideCode !== slides.value[index].slideCode) {
      const validation = validateSlideCode(input.slideCode, id)
      if (!validation.isValid) {
        error.value = validation.message || 'バリデーションエラー'
        return null
      }
    }

    const updatedSlide: Slide = {
      ...slides.value[index],
      ...input,
      updatedAt: new Date()
    }

    slides.value[index] = updatedSlide
    await saveToStorage()
    
    return updatedSlide
  }

  // スライドを削除
  const deleteSlide = async (id: string): Promise<boolean> => {
    const index = slides.value.findIndex(slide => slide.id === id)
    if (index === -1) {
      error.value = 'スライドが見つかりません'
      return false
    }

    slides.value.splice(index, 1)
    await saveToStorage()
    
    return true
  }

  // ページを追加
  const addPage = async (input: CreatePageInput): Promise<SlidePage | null> => {
    const slide = slides.value.find(s => s.id === input.slideId)
    if (!slide) {
      error.value = 'スライドが見つかりません'
      return null
    }

    // 次のページ番号を取得
    const nextPageNumber = slide.pages.length > 0
      ? Math.max(...slide.pages.map(p => p.pageNumber)) + 1
      : 1

    const newPage: SlidePage = {
      id: generateId(),
      pageNumber: nextPageNumber,
      htmlContent: input.htmlContent,
      createdAt: new Date(),
      updatedAt: new Date()
    }

    slide.pages.push(newPage)
    slide.updatedAt = new Date()
    
    await saveToStorage()
    await generateStaticFile(slide.slideCode, newPage)
    
    return newPage
  }

  // ページを更新
  const updatePage = async (slideId: string, pageId: string, input: UpdatePageInput): Promise<SlidePage | null> => {
    const slide = slides.value.find(s => s.id === slideId)
    if (!slide) {
      error.value = 'スライドが見つかりません'
      return null
    }

    const pageIndex = slide.pages.findIndex(p => p.id === pageId)
    if (pageIndex === -1) {
      error.value = 'ページが見つかりません'
      return null
    }

    const updatedPage: SlidePage = {
      ...slide.pages[pageIndex],
      htmlContent: input.htmlContent,
      updatedAt: new Date()
    }

    slide.pages[pageIndex] = updatedPage
    slide.updatedAt = new Date()
    
    await saveToStorage()
    await generateStaticFile(slide.slideCode, updatedPage)
    
    return updatedPage
  }

  // ページを削除
  const deletePage = async (slideId: string, pageId: string): Promise<boolean> => {
    const slide = slides.value.find(s => s.id === slideId)
    if (!slide) {
      error.value = 'スライドが見つかりません'
      return false
    }

    const pageIndex = slide.pages.findIndex(p => p.id === pageId)
    if (pageIndex === -1) {
      error.value = 'ページが見つかりません'
      return false
    }

    slide.pages.splice(pageIndex, 1)
    slide.updatedAt = new Date()
    
    await saveToStorage()
    
    return true
  }

  // 静的ファイルを生成（Vueコンポーネントとして）
  const generateStaticFile = async (slideCode: string, page: SlidePage): Promise<void> => {
    try {
      // ファイル情報をlocalStorageに保存（実際のファイル生成の代わり）
      const fileKey = `slide_file_${slideCode}_${page.pageNumber}`
      const fileData = {
        slideCode,
        pageNumber: page.pageNumber,
        htmlContent: page.htmlContent,
        generatedAt: new Date().toISOString()
      }
      localStorage.setItem(fileKey, JSON.stringify(fileData))
      
      console.log(`Generated file: /slide/${slideCode}/${page.pageNumber}.vue`)
    } catch (e) {
      console.error('ファイル生成に失敗しました:', e)
    }
  }

  // スライドの全ページを再生成
  const regenerateAllPages = async (slideId: string): Promise<boolean> => {
    const slide = slides.value.find(s => s.id === slideId)
    if (!slide) {
      error.value = 'スライドが見つかりません'
      return false
    }

    try {
      for (const page of slide.pages) {
        await generateStaticFile(slide.slideCode, page)
      }
      return true
    } catch (e) {
      error.value = 'ファイル再生成に失敗しました'
      return false
    }
  }

  // フィルタリングされたスライドを取得
  const getFilteredSlides = computed(() => {
    let result = [...slides.value]

    // 検索クエリでフィルタ
    if (filters.value.searchQuery) {
      const query = filters.value.searchQuery.toLowerCase()
      result = result.filter(slide =>
        slide.slideName.toLowerCase().includes(query) ||
        slide.slideCode.toLowerCase().includes(query) ||
        slide.description?.toLowerCase().includes(query)
      )
    }

    // タグでフィルタ
    if (filters.value.tags && filters.value.tags.length > 0) {
      result = result.filter(slide =>
        slide.tags?.some(tag => filters.value.tags?.includes(tag))
      )
    }

    // ソート
    const sortBy = filters.value.sortBy || 'createdAt'
    const sortOrder = filters.value.sortOrder || 'desc'
    
    result.sort((a, b) => {
      let comparison = 0
      
      if (sortBy === 'slideName') {
        comparison = a.slideName.localeCompare(b.slideName)
      } else {
        const aDate = a[sortBy as 'createdAt' | 'updatedAt'].getTime()
        const bDate = b[sortBy as 'createdAt' | 'updatedAt'].getTime()
        comparison = aDate - bDate
      }
      
      return sortOrder === 'asc' ? comparison : -comparison
    })

    return result
  })

  // ローカルストレージに保存
  const saveToStorage = async () => {
    try {
      localStorage.setItem('slides', JSON.stringify(slides.value))
    } catch (e) {
      error.value = 'スライドの保存に失敗しました'
      console.error(e)
    }
  }

  // IDを生成
  const generateId = (): string => {
    return `${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
  }

  // フィルタを更新
  const updateFilters = (newFilters: Partial<SlideFilters>) => {
    filters.value = { ...filters.value, ...newFilters }
  }

  // フィルタをリセット
  const resetFilters = () => {
    filters.value = {}
  }

  // エラーをクリア
  const clearError = () => {
    error.value = null
  }

  return {
    // State
    slides: readonly(slides),
    currentSlide,
    filters: readonly(filters),
    isLoading: readonly(isLoading),
    error: readonly(error),
    
    // Computed
    filteredSlides: getFilteredSlides,
    
    // Methods - Slide
    fetchSlides,
    getSlideById,
    getSlideByCode,
    validateSlideCode,
    createSlide,
    updateSlide,
    deleteSlide,
    
    // Methods - Page
    addPage,
    updatePage,
    deletePage,
    regenerateAllPages,
    
    // Methods - Filters
    updateFilters,
    resetFilters,
    clearError
  }
}
