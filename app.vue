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
