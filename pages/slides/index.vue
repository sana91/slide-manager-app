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
            <div class="aspect-video bg-gray-700 relative overflow-hidden" :ref="el => { if (el) iframeContainers.push(el as HTMLElement) }">
              <iframe
                :src="`${basePath}/slide/${slide.slideCode}/1`"
                class="absolute inset-0 w-full h-full border-0 pointer-events-none"
                :style="{
                  transform: `scale(${scaleRate})`,
                  transformOrigin: '0 0',
                  width: '400%',
                  height: '400%'
                }"
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

// ベースパスを動的に取得
const basePath = computed(() => {
  if (import.meta.client && typeof window !== 'undefined') {
    // クライアント側: window.location.pathnameからベースパスを取得
    const pathname = window.location.pathname
    // /slide-manager-app/slides のようなパスの場合、/slide-manager-app を抽出
    // /slides のようなルートパスの場合は '/' を返す
    const match = pathname.match(/^\/([^/]+)/)
    if (match && match[1] && match[1] !== 'slides' && match[1] !== 'slide') {
      // 最初のパスセグメントが 'slides' や 'slide' でない場合、それがベースパス
      return `/${match[1]}`
    }
    // ルートパスの場合は '/' を返す
    return ''
  }
  
  // フォールバック: GitHub Pages用の決め打ちパス
  // 開発環境では '' になるが、本番では '/slide-manager-app' になる
  return '/slide-manager-app'
})

// 開発時はAPI、本番（SPA）ではJSONファイルを読み込む
// APIが失敗した場合はJSONファイルにフォールバック
const isDev = import.meta.dev
const apiUrl = isDev ? '/api/slides/list' : '/api/slides/list.json'
const jsonUrl = '/api/slides/list.json'

let fetchResult = await useFetch<SlideInfo[]>(apiUrl)

// APIが失敗した場合はJSONファイルを読み込む
if (fetchResult.error.value && fetchResult.error.value.statusCode === 404) {
  fetchResult = await useFetch<SlideInfo[]>(jsonUrl)
}

const { data: slides, pending, error } = fetchResult

// iframeの幅を計測
const iframeContainers = ref<HTMLElement[]>([])
const iframeWidth = ref<number>(512) // デフォルト値（0.4 * 1280）

// iframeの幅を計測してscaleRateを計算
const scaleRate = computed(() => {
  const rate = iframeWidth.value / 1280
  // 小数点第3位を四捨五入して、小数点第2位までにする
  return Math.round(rate * 100) / 100
})

// マウント時にiframeの幅を計測
onMounted(() => {
  const updateWidth = () => {
    // 最初のiframeコンテナの幅を計測
    if (iframeContainers.value.length > 0 && iframeContainers.value[0]) {
      iframeWidth.value = iframeContainers.value[0].clientWidth
    }
  }
  
  // 初回計測（少し遅延させてDOMが完全にレンダリングされるのを待つ）
  nextTick(() => {
    updateWidth()
  })
  
  // リサイズ時にも更新
  window.addEventListener('resize', updateWidth)
  
  // クリーンアップ
  onUnmounted(() => {
    window.removeEventListener('resize', updateWidth)
  })
})
</script>
