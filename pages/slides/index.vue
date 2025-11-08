<template>
  <div class="container mx-auto px-4 py-8">
    <!-- ヘッダー -->
    <div class="mb-8 flex items-center justify-between">
      <div>
        <h1 class="text-3xl font-bold text-gray-900 mb-2">
          スライド一覧
        </h1>
        <p class="text-gray-600">
          登録されているスライドの一覧です
        </p>
      </div>
      <NuxtLink
        to="/slides/create"
        class="bg-primary-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-700 transition-colors shadow-sm"
      >
        ＋ 新規作成
      </NuxtLink>
    </div>

    <!-- 検索・フィルター -->
    <div class="mb-6 bg-white rounded-lg shadow-sm p-4">
      <input
        v-model="searchQuery"
        type="text"
        placeholder="スライド名、コード、説明で検索..."
        class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
      />
    </div>

    <!-- ローディング -->
    <div v-if="slideContext.isLoading.value" class="text-center py-12">
      <div class="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
      <p class="mt-4 text-gray-600">読み込み中...</p>
    </div>

    <!-- エラー -->
    <div 
      v-else-if="slideContext.error.value" 
      class="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg"
    >
      {{ slideContext.error.value }}
    </div>

    <!-- スライドリスト -->
    <div v-else-if="filteredSlides.length > 0" class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      <NuxtLink
        v-for="slide in filteredSlides"
        :key="slide.id"
        :to="`/slides/${slide.id}`"
        class="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-6 border border-gray-200"
      >
        <!-- スライド情報 -->
        <div class="mb-4">
          <h2 class="text-xl font-bold text-gray-900 mb-2">
            {{ slide.slideName }}
          </h2>
          <p class="text-sm text-gray-500 font-mono bg-gray-100 px-2 py-1 rounded inline-block">
            /slide/{{ slide.slideCode }}/
          </p>
        </div>

        <!-- 説明 -->
        <p v-if="slide.description" class="text-gray-600 text-sm mb-4 line-clamp-2">
          {{ slide.description }}
        </p>

        <!-- 統計情報 -->
        <div class="flex items-center gap-4 text-sm text-gray-500 mb-4">
          <span class="flex items-center gap-1">
            📄 {{ slide.pages.length }} ページ
          </span>
          <span class="flex items-center gap-1">
            🕐 {{ formatDate(slide.updatedAt) }}
          </span>
        </div>

        <!-- タグ -->
        <div v-if="slide.tags && slide.tags.length > 0" class="flex flex-wrap gap-2">
          <span
            v-for="tag in slide.tags"
            :key="tag"
            class="text-xs bg-primary-100 text-primary-700 px-2 py-1 rounded"
          >
            {{ tag }}
          </span>
        </div>
      </NuxtLink>
    </div>

    <!-- 空の状態 -->
    <div v-else class="text-center py-12 bg-white rounded-lg shadow-sm">
      <div class="text-6xl mb-4">📊</div>
      <h3 class="text-xl font-semibold text-gray-900 mb-2">
        スライドがありません
      </h3>
      <p class="text-gray-600 mb-6">
        最初のスライドを作成してみましょう
      </p>
      <NuxtLink
        to="/slides/create"
        class="inline-block bg-primary-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-700 transition-colors"
      >
        ＋ 新規作成
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
// Head設定
useHead({
  title: 'スライド一覧'
})

// スライド管理機能を取得
const slideContext = injectSlideContext()

// 検索クエリ
const searchQuery = ref('')

// フィルタリング
watch(searchQuery, (newQuery) => {
  slideContext.updateFilters({ searchQuery: newQuery })
})

// フィルタリングされたスライド
const filteredSlides = computed(() => slideContext.filteredSlides.value)

// 日付フォーマット
const formatDate = (date: Date) => {
  const now = new Date()
  const diff = now.getTime() - date.getTime()
  const days = Math.floor(diff / (1000 * 60 * 60 * 24))
  
  if (days === 0) {
    return '今日'
  } else if (days === 1) {
    return '昨日'
  } else if (days < 7) {
    return `${days}日前`
  } else {
    return date.toLocaleDateString('ja-JP', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    })
  }
}

// マウント時にスライドを読み込み
onMounted(() => {
  if (slideContext.slides.value.length === 0) {
    slideContext.fetchSlides()
  }
})
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
