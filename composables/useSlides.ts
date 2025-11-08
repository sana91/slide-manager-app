import type { Slide, CreateSlideInput, UpdateSlideInput, SlideFilters } from '~/types'

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
      // 現時点ではローカルストレージから取得
      // 将来的にAPIに置き換え可能
      const storedSlides = localStorage.getItem('slides')
      if (storedSlides) {
        const parsed = JSON.parse(storedSlides)
        slides.value = parsed.map((slide: any) => ({
          ...slide,
          createdAt: new Date(slide.createdAt),
          updatedAt: new Date(slide.updatedAt)
        }))
      }
    } catch (e) {
      error.value = 'スライドの読み込みに失敗しました'
      console.error(e)
    } finally {
      isLoading.value = false
    }
  }

  // 特定のスライドを取得
  const getSlideById = (id: string): Slide | undefined => {
    return slides.value.find(slide => slide.id === id)
  }

  // スライドを作成
  const createSlide = async (input: CreateSlideInput): Promise<Slide> => {
    const newSlide: Slide = {
      id: generateId(),
      ...input,
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

  // フィルタリングされたスライドを取得
  const getFilteredSlides = computed(() => {
    let result = [...slides.value]

    // 検索クエリでフィルタ
    if (filters.value.searchQuery) {
      const query = filters.value.searchQuery.toLowerCase()
      result = result.filter(slide =>
        slide.title.toLowerCase().includes(query) ||
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
      
      if (sortBy === 'title') {
        comparison = a.title.localeCompare(b.title)
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
    return `slide_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
  }

  // フィルタを更新
  const updateFilters = (newFilters: Partial<SlideFilters>) => {
    filters.value = { ...filters.value, ...newFilters }
  }

  // フィルタをリセット
  const resetFilters = () => {
    filters.value = {}
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
    
    // Methods
    fetchSlides,
    getSlideById,
    createSlide,
    updateSlide,
    deleteSlide,
    updateFilters,
    resetFilters
  }
}
