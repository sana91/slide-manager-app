<template>
  <div class="min-h-screen bg-gray-900 text-white">
    <div class="container mx-auto px-4 py-8">
      <h1 class="text-4xl font-bold mb-8 text-center">スライドギャラリー</h1>
      
      <div v-if="pending" class="flex justify-center items-center min-h-[400px]">
        <div class="text-gray-400">読み込み中...</div>
      </div>
      
      <div v-else-if="error" class="flex justify-center items-center min-h-[400px]">
        <div class="text-red-400">エラーが発生しました: {{ error.message }}</div>
      </div>
      
      <div v-else-if="!slides || slides.length === 0" class="flex justify-center items-center min-h-[400px]">
        <div class="text-gray-400">スライドがありません</div>
      </div>
      
      <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="slide in slides"
          :key="slide.slideCode"
          class="group relative bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
        >
          <NuxtLink
            :to="`/slide/${slide.slideCode}/1`"
            class="block"
          >
            <div class="aspect-video bg-gray-700 relative overflow-hidden">
              <iframe
                :src="`/slide/${slide.slideCode}/1`"
                class="absolute inset-0 w-full h-full border-0 pointer-events-none"
                style="transform: scale(0.4); transform-origin: 0 0; width: 400%; height: 400%;"
                loading="lazy"
              />
              <div class="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors pointer-events-none"></div>
            </div>
            <div class="p-4">
              <div class="text-lg font-semibold mb-1 line-clamp-2">{{ slide.title }}</div>
              <div class="text-sm text-gray-400">{{ slide.slideCode }}</div>
            </div>
            <div class="absolute top-2 right-2 bg-blue-600 text-white text-xs px-2 py-1 rounded z-10">
              プレビュー
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'スライドギャラリー - Slide Manager'
})

interface SlideInfo {
  slideCode: string
  title: string
}

const { data: slides, pending, error } = await useFetch<SlideInfo[]>('/api/slides/list')
</script>
