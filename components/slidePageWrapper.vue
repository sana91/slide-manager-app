<template>
  <div class="min-h-screen bg-gray-900 text-white container px-4 py-4">
    <div class="prose prose-lg max-w-none"
      :ref="el => { if (el) contentContainers.push(el as HTMLElement) }"
      :style="fitScaleStyles"
    >
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

    <div class="mt-8 flex justify-start items-center">
      <div>
        <label for="is1280Size" class="text-gray-400">
          <input type="checkbox" v-model="is1280Size" placeholder="1280サイズ固定" disabled />
          <span class="text-white">1280サイズ固定 (デフォルト)</span>
        </label>
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

const is1280Size = ref(true)

// contentの幅を計測
const contentContainers = ref<HTMLElement[]>([])
const contentWidth = ref<number>(1280) // デフォルト値（1280）

// contentの幅を計測してscaleRateを計算
const fitScaleStyles = computed(() => {
  if (is1280Size.value) {
    return ''
  }
  const rate = contentWidth.value / 1280
  // 小数点第3位を四捨五入して、小数点第2位までにする
  const scaleRate = rate < 1 ? Math.round(rate * 100) / 100 : 1
  return `transform: scale(${scaleRate}); transform-origin: 0 0;`
})

// マウント時にcontentの幅を計測
onMounted(() => {
  const updateWidth = () => {
    // 最初のcontentコンテナの幅を計測
    if (contentContainers.value.length > 0 && contentContainers.value[0]) {
      contentWidth.value = contentContainers.value[0].clientWidth
    }
  }
  
  // 初回計測（少し遅延させてDOMが完全にレンダリングされるのを待つ）
  nextTick(() => {
    updateWidth()
  })
  
  // リサイズ時にも更新
  window.addEventListener('resize', updateWidth)
  
  // コンポーネントマウント時にイベントリスナーを追加
  window.addEventListener('keydown', handleKeyDown)

  // クリーンアップ
  onUnmounted(() => {
    window.removeEventListener('resize', updateWidth)
    window.removeEventListener('keydown', handleKeyDown)
  })
})
</script>
