<template>
  <div id="app" class="min-h-screen">
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
// グローバルなアプリケーション設定や状態管理をここで初期化
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - Slide Manager` : 'Slide Manager'
  }
})

// スライドコンテキストをアプリケーション全体に提供
const slideContext = provideSlideContext()

// アプリケーション起動時にスライドを読み込み
onMounted(() => {
  slideContext.fetchSlides()
})
</script>

<style>
.prose {
  @apply text-gray-900 ;
}

.prose .slide-container{
  @apply rounded-sm ;
  font-family: 'Noto Sans JP', sans-serif;
}

.prose h2 {
  @apply text-3xl font-bold mb-4 mt-8;
}

.prose h3 {
  @apply text-2xl font-bold mb-3 mt-6;
}

.prose p {
  @apply mb-4 text-lg leading-relaxed;
}

.prose ul,
.prose ol {
  @apply mb-4 ml-6;
}

.prose li {
  @apply mb-2 text-lg;
}

.prose code {
  @apply bg-gray-100 px-2 py-1 rounded text-sm font-mono text-blue-600;
}

.prose pre {
  @apply bg-gray-800 text-white p-4 rounded overflow-x-auto;
}

.prose pre code {
  @apply bg-transparent text-white px-0;
}
</style>