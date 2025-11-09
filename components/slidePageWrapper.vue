<template>
  <div class="min-h-screen bg-gray-900 text-white container px-4 py-4">
    <div class="prose prose-lg max-w-none">
      <slot></slot>
    </div>

    <div class="mt-8 flex justify-start items-center">
      <div>
        <NuxtLink
          v-if="currentPage > 1"
          :to="`/slide/${slideId}/${currentPage - 1}`"
          class="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors"
        >
          ← 前頁
        </NuxtLink>
        <div
          v-else
          class="inline-block bg-gray-800 text-white px-6 py-3 rounded-lg transition-colors"
        >
          ← 前頁
        </div>
      </div>

      <div
        class="inline-block bg-gray-900 text-white px-6 py-3 rounded-lg transition-colors text-center"
      >
        <span> [ {{ currentPage }} / {{ totalPages }} ]</span>
      </div>

      <div>
        <NuxtLink
          v-if="currentPage < totalPages"
          :to="`/slide/${slideId}/${currentPage + 1}`"
          class="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors"
        >
          次頁 →
        </NuxtLink>
        <div
          v-else
          class="inline-block bg-gray-800 text-white px-6 py-3 rounded-lg transition-colors"
        >
          次頁 →
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  slideId: string
  pageTitle: string
  currentPage: number
  totalPages: number
}

const props = defineProps<Props>()

useHead({
  title: `${props.pageTitle}`
})

// キーボードイベントハンドラー
const handleKeyDown = (event: KeyboardEvent) => {
  // ← キーで前頁へ
  if (event.key === 'ArrowLeft' && props.currentPage > 1) {
    navigateTo(`/slide/${props.slideId}/${props.currentPage - 1}`)
  }
  // → キーで次頁へ
  if (event.key === 'ArrowRight' && props.currentPage < props.totalPages) {
    navigateTo(`/slide/${props.slideId}/${props.currentPage + 1}`)
  }
}

// コンポーネントマウント時にイベントリスナーを追加
onMounted(() => {
  window.addEventListener('keydown', handleKeyDown)
})

// コンポーネントアンマウント時にイベントリスナーを削除
onUnmounted(() => {
  window.removeEventListener('keydown', handleKeyDown)
})
</script>
