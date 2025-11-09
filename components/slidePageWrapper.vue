<template>
  <div class="min-h-screen bg-gray-900 text-white container px-4 py-4">
    <div v-if="!invisibleNav" class="mb-8 flex justify-start items-start" key="top-navi">
      <div class="mr-8">
        <button
          type="button"
          class="icon-toggle-button"
          :class="{ 'is-active': isFixedSlideSize }"
          @click="onClickToggleMaximizeButton"
          aria-pressed="isFixedSlideSize ? 'true' : 'false'"
          title="スライドサイズを幅1280pxで固定"
        >
          <i v-if="isFixedSlideSize" class="fa-solid fa-right-to-bracket rotate-180"></i>
          <i v-else class="fa-solid fa-maximize"></i>
        </button>
      </div>
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
          class="inline-block bg-gray-800 text-white px-6 py-3 rounded-lg transition-colors opacity-50"
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
          class="inline-block bg-gray-800 text-white px-6 py-3 rounded-lg transition-colors opacity-50"
        >
          次頁 →
        </div>
      </div>
    </div>

    <div class="prose prose-lg max-w-none"
      :ref="el => { if (el) contentContainers.push(el as HTMLElement) }"
      :style="fitScaleStyles"
    >
      <slot></slot>
    </div>

    <div v-if="!invisibleNav" class="mt-8 flex justify-start items-start"
      :class="{ 'is-fixed-bottom': isFixedBottomNav }"
      key="bottom-navi"
    >
      <div class="mr-8">
        <button
          type="button"
          class="icon-fixed-nav-button"
          :class="{ 'is-active': isFixedBottomNav }"
          @click="onClickFixNavButton"
          aria-pressed="isFixedBottomNav ? 'true' : 'false'"
          title="スライドサイズを幅1280pxで固定"
        >
          <i v-if="isFixedBottomNav" class="fa-solid fa-map-pin"></i>
          <i v-else class="fa-solid fa-map-pin"></i>
        </button>
      </div>

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
          class="inline-block bg-gray-800 text-white px-6 py-3 rounded-lg transition-colors  opacity-50"
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
          class="inline-block bg-gray-800 text-white px-6 py-3 rounded-lg transition-colors  opacity-50"
        >
          次頁 →
        </div>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
// クエリパラメータを取得
const route = useRoute()
const invisibleNav = computed(() => route.query.invisible_navigation === '1')

// LocalStrageとComposablesの値を取得
const { useCheckbox } = useCheckboxStore()
const isFixedSlideSize = useCheckbox('is-fixed-slide-size')
const isFixedBottomNav = useCheckbox('is-fixed-bottom-nav')


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

// contentの幅を計測
const contentContainers = ref<HTMLElement[]>([])
const contentWidth = ref<number>(1280) // デフォルト値（1280）

// contentの幅を計測してscaleRateを計算
const fitScaleStyles = computed(() => {
  if (isFixedSlideSize.value) {
    return ''
  }
  const rate = contentWidth.value / 1280
  // 小数点第3位を四捨五入して、小数点第2位までにする
  const scaleRate = rate < 1 ? Math.round(rate * 100) / 100 : 1
  return `transform: scale(${scaleRate}); transform-origin: 0 0;`
})


const _toggleMaximize = () => {
  isFixedSlideSize.value = !isFixedSlideSize.value
}
const _toggleBottomnav = () => {
  isFixedBottomNav.value = !isFixedBottomNav.value
}

const onClickToggleMaximizeButton = () => {
  _toggleMaximize()
}
const onClickFixNavButton = () => {
  _toggleBottomnav()
}


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

<style type="text/css">

.icon-toggle-button, .icon-fixed-nav-button {
  @apply bg-blue-600 hover:bg-blue-700;
  border: none;
  padding: 6px 8px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  transition: background-color 0.2s ease, transform 0.1s ease;
}

.icon-toggle-button i, .icon-fixed-nav-button i {
  font-size: 16px;
}

.icon-fixed-nav-button.is-active {
  background-color: #eee;
  @apply bg-orange-300 hover:bg-orange-400;
  transform: scale(0.95);
}

.icon-fixed-nav-button.is-active i {
  opacity: 0.7;
}

.is-fixed-bottom {
  @apply absolute z-50 pb-8 bottom-0;
  margin: auto;
  opacity: 0.9;
}
</style>