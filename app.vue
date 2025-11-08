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
</script>
