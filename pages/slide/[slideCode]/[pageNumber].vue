<template>
  <div class="slide-viewer min-h-screen bg-gray-900">
    <!-- ローディング -->
    <div v-if="isLoading" class="flex items-center justify-center min-h-screen">
      <div class="text-white text-center">
        <div class="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-white mb-4"></div>
        <p>読み込み中...</p>
      </div>
    </div>

    <!-- エラー -->
    <div v-else-if="error" class="flex items-center justify-center min-h-screen">
      <div class="text-white text-center max-w-md">
        <div class="text-6xl mb-4">❌</div>
        <h2 class="text-2xl font-bold mb-2">エラー</h2>
        <p class="text-gray-300 mb-6">{{ error }}</p>
        <NuxtLink
          to="/slides"
          class="inline-block bg-white text-gray-900 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
        >
          スライド一覧に戻る
        </NuxtLink>
      </div>
    </div>

    <!-- スライド表示 -->
    <div v-else-if="currentPage" class="relative">
      <!-- ナビゲーションバー -->
      <nav class="fixed top-0 left-0 right-0 bg-gray-800 bg-opacity-95 text-white px-6 py-4 z-50 shadow-lg">
        <div class="container mx-auto flex items-center justify-between">
          <div class="flex items-center gap-4">
            <NuxtLink
              to="/slides"
              class="text-gray-300 hover:text-white transition-colors"
            >
              ← 一覧
            </NuxtLink>
            <span class="text-gray-400">|</span>
            <h1 class="text-lg font-semibold">
              {{ slide?.slideName }}
            </h1>
          </div>
          
          <div class="flex items-center gap-4">
            <span class="text-sm text-gray-300">
              {{ currentPageNumber }} / {{ totalPages }}
            </span>
            
            <div class="flex gap-2">
              <button
                @click="goToPrevPage"
                :disabled="!hasPrevPage"
                class="px-4 py-2 bg-gray-700 rounded hover:bg-gray-600 transition-colors disabled:bg-gray-800 disabled:text-gray-600 disabled:cursor-not-allowed"
              >
                ← 前へ
              </button>
              <button
                @click="goToNextPage"
                :disabled="!hasNextPage"
                class="px-4 py-2 bg-gray-700 rounded hover:bg-gray-600 transition-colors disabled:bg-gray-800 disabled:text-gray-600 disabled:cursor-not-allowed"
              >
                次へ →
              </button>
            </div>
          </div>
        </div>
      </nav>

      <!-- スライドコンテンツ -->
      <div class="pt-20">
        <div class="container mx-auto px-4 py-8">
          <!-- HTMLレンダリング -->
          <div 
            class="slide-content bg-white rounded-lg shadow-2xl p-8 min-h-[600px]"
            v-html="sanitizedHtml"
          />
        </div>
      </div>

      <!-- キーボードナビゲーションヒント -->
      <div class="fixed bottom-4 right-4 bg-gray-800 bg-opacity-90 text-white px-4 py-2 rounded-lg text-sm">
        <p class="text-gray-300">
          ⌨️ キーボード: ← / → で移動
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Slide, SlidePage } from '~/types'
import DOMPurify from 'isomorphic-dompurify'

// ルートパラメータ取得
const route = useRoute()
const router = useRouter()
const slideCode = route.params.slideCode as string
const pageNumber = parseInt(route.params.pageNumber as string, 10)

// スライド管理機能を取得
const slideContext = injectSlideContext()

// 状態
const slide = ref<Slide | null>(null)
const currentPage = ref<SlidePage | null>(null)
const isLoading = ref(true)
const error = ref<string | null>(null)

// スライドとページを読み込み
const loadSlideAndPage = () => {
  isLoading.value = true
  error.value = null

  // スライドを取得
  slide.value = slideContext.getSlideByCode(slideCode)
  
  if (!slide.value) {
    error.value = `スライド「${slideCode}」が見つかりません`
    isLoading.value = false
    return
  }

  // ページを取得
  currentPage.value = slide.value.pages.find(p => p.pageNumber === pageNumber) || null
  
  if (!currentPage.value) {
    error.value = `ページ ${pageNumber} が見つかりません`
    isLoading.value = false
    return
  }

  isLoading.value = false
}

// HTMLサニタイズ
const sanitizedHtml = computed(() => {
  if (!currentPage.value) return ''
  return DOMPurify.sanitize(currentPage.value.htmlContent)
})

// ページ情報
const currentPageNumber = computed(() => currentPage.value?.pageNumber || pageNumber)
const totalPages = computed(() => slide.value?.pages.length || 0)

// Head設定（slide と currentPageNumber が定義された後に設定）
useHead({
  title: computed(() => 
    slide.value 
      ? `${slide.value.slideName} - ページ ${currentPageNumber.value}` 
      : 'スライド表示'
  )
})

// ナビゲーション
const sortedPages = computed(() => {
  if (!slide.value) return []
  return [...slide.value.pages].sort((a, b) => a.pageNumber - b.pageNumber)
})

const currentPageIndex = computed(() => {
  return sortedPages.value.findIndex(p => p.pageNumber === currentPageNumber.value)
})

const hasPrevPage = computed(() => currentPageIndex.value > 0)
const hasNextPage = computed(() => currentPageIndex.value < sortedPages.value.length - 1)

const goToPrevPage = () => {
  if (!hasPrevPage.value || !slide.value) return
  const prevPage = sortedPages.value[currentPageIndex.value - 1]
  router.push(`/slide/${slide.value.slideCode}/${prevPage.pageNumber}`)
}

const goToNextPage = () => {
  if (!hasNextPage.value || !slide.value) return
  const nextPage = sortedPages.value[currentPageIndex.value + 1]
  router.push(`/slide/${slide.value.slideCode}/${nextPage.pageNumber}`)
}

// キーボードナビゲーション
const handleKeydown = (event: KeyboardEvent) => {
  if (event.key === 'ArrowLeft') {
    goToPrevPage()
  } else if (event.key === 'ArrowRight') {
    goToNextPage()
  }
}

// マウント時に読み込み
onMounted(() => {
  loadSlideAndPage()
  window.addEventListener('keydown', handleKeydown)
})

// アンマウント時にクリーンアップ
onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown)
})

// ルート変更時に再読み込み
watch(() => route.params, () => {
  loadSlideAndPage()
})
</script>

<style scoped>
.slide-content {
  /* スライドコンテンツ用のスタイル */
}

.slide-content :deep(h1) {
  @apply text-4xl font-bold mb-6;
}

.slide-content :deep(h2) {
  @apply text-3xl font-bold mb-4;
}

.slide-content :deep(h3) {
  @apply text-2xl font-bold mb-3;
}

.slide-content :deep(p) {
  @apply mb-4 text-lg;
}

.slide-content :deep(ul),
.slide-content :deep(ol) {
  @apply mb-4 ml-6;
}

.slide-content :deep(li) {
  @apply mb-2 text-lg;
}

.slide-content :deep(code) {
  @apply bg-gray-100 px-2 py-1 rounded text-sm font-mono;
}

.slide-content :deep(pre) {
  @apply bg-gray-100 p-4 rounded mb-4 overflow-x-auto;
}

.slide-content :deep(img) {
  @apply max-w-full h-auto rounded shadow-lg;
}
</style>
