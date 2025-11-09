<template>
  <div class="container mx-auto px-4 py-8">
    <header class="mb-12 text-center">
      <h1 class="text-5xl font-bold text-primary-600 mb-4">
        📊 Slide Manager
      </h1>
      <p class="text-xl text-gray-600 mb-8">
        HTMLスライドの管理・登録・閲覧アプリケーション
      </p>
      <div class="flex justify-center gap-4">
        <NuxtLink 
          to="/slides" 
          class="px-8 py-4 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors shadow-lg text-lg"
        >
          スライド一覧を見る
        </NuxtLink>
      </div>
    </header>

    <!-- 統計情報 -->
    <div class="mb-12 grid grid-cols-1 md:grid-cols-3 gap-6">
      <div class="bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg shadow-lg p-6 text-white">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-blue-100 text-sm font-medium mb-1">登録スライド数</p>
            <p class="text-4xl font-bold">{{ totalSlides }}</p>
          </div>
          <div class="text-5xl opacity-80">📊</div>
        </div>
      </div>
      
      <div class="bg-gradient-to-br from-green-500 to-green-600 rounded-lg shadow-lg p-6 text-white">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-green-100 text-sm font-medium mb-1">総ページ数</p>
            <p class="text-4xl font-bold">{{ totalPages }}</p>
          </div>
          <div class="text-5xl opacity-80">📄</div>
        </div>
      </div>
      
      <div class="bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg shadow-lg p-6 text-white">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-purple-100 text-sm font-medium mb-1">最終更新</p>
            <p class="text-lg font-semibold">{{ lastUpdateText }}</p>
          </div>
          <div class="text-5xl opacity-80">🕐</div>
        </div>
      </div>
    </div>

    <!-- 機能紹介 -->
    <div class="mb-12">
      <h2 class="text-3xl font-bold text-gray-900 mb-8 text-center">主な機能</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
          <div class="text-4xl mb-4">📝</div>
          <h3 class="font-bold text-xl text-gray-900 mb-3">スライド登録</h3>
          <p class="text-gray-600 mb-4">
            スライド名とユニークなコードを設定し、HTMLソースコードから直接ページを作成できます。
          </p>
          <ul class="text-sm text-gray-500 space-y-1 list-disc list-inside">
            <li>スライド単位での管理</li>
            <li>英数字のスライドコード</li>
            <li>ページごとのHTML編集</li>
          </ul>
        </div>
        
        <div class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
          <div class="text-4xl mb-4">📚</div>
          <h3 class="font-bold text-xl text-gray-900 mb-3">一覧管理</h3>
          <p class="text-gray-600 mb-4">
            登録されたスライドを一覧で確認し、検索やフィルタリングで素早く目的のスライドを見つけられます。
          </p>
          <ul class="text-sm text-gray-500 space-y-1 list-disc list-inside">
            <li>検索機能</li>
            <li>タグでのフィルタリング</li>
            <li>ソート機能</li>
          </ul>
        </div>
        
        <div class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
          <div class="text-4xl mb-4">👀</div>
          <h3 class="font-bold text-xl text-gray-900 mb-3">閲覧・プレゼン</h3>
          <p class="text-gray-600 mb-4">
            各スライドは独自のURLでアクセス可能。キーボードナビゲーションでスムーズにプレゼンテーションできます。
          </p>
          <ul class="text-sm text-gray-500 space-y-1 list-disc list-inside">
            <li>スライドごとの専用URL</li>
            <li>キーボードナビゲーション</li>
            <li>ページ番号表示</li>
          </ul>
        </div>
      </div>
    </div>

    <!-- クイックスタートガイド -->
    <div class="bg-gradient-to-r from-primary-50 to-blue-50 rounded-lg p-8 border border-primary-200">
      <h2 class="text-2xl font-bold text-gray-900 mb-4">🚀 クイックスタート</h2>
      <ol class="space-y-3 text-gray-700">
        <li class="flex items-start gap-3">
          <span class="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold">1</span>
          <div>
            <strong>スライドを作成:</strong> 
            <span class="text-primary-600 hover:underline">新規作成</span>
            からスライド名とスライドコードを登録 ※そんなものはない
          </div>
        </li>
        <li class="flex items-start gap-3">
          <span class="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold">2</span>
          <div>
            <strong>ページを追加:</strong> スライド詳細画面からHTMLコードを入力してページを追加
          </div>
        </li>
        <li class="flex items-start gap-3">
          <span class="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold">3</span>
          <div>
            <strong>プレゼン:</strong> 生成されたURL（/slide/コード/ページ番号）でスライドを表示
          </div>
        </li>
      </ol>
    </div>
  </div>
</template>

<script setup lang="ts">
// Head設定
useHead({
  title: 'ホーム'
})

interface SlideStats {
  totalSlides: number
  totalPages: number
  lastUpdate: string | null
}

// 開発時はAPI、本番（SPA）ではJSONファイルを読み込む
// APIが失敗した場合はJSONファイルにフォールバック
const isDev = import.meta.dev
const apiUrl = isDev ? '/api/slides/stats' : '/api/slides/stats.json'
const jsonUrl = '/api/slides/stats.json'

// 統計情報を取得
let fetchResult = await useFetch<SlideStats>(apiUrl)

// APIが失敗した場合はJSONファイルを読み込む
if (fetchResult.error.value && fetchResult.error.value.statusCode === 404) {
  fetchResult = await useFetch<SlideStats>(jsonUrl)
}

const { data: stats, pending } = fetchResult

// 統計情報
const totalSlides = computed(() => stats.value?.totalSlides ?? 0)
const totalPages = computed(() => stats.value?.totalPages ?? 0)

const lastUpdateText = computed(() => {
  if (!stats.value?.lastUpdate) return '—'
  
  const latest = new Date(stats.value.lastUpdate)
  const now = new Date()
  const diff = now.getTime() - latest.getTime()
  const days = Math.floor(diff / (1000 * 60 * 60 * 24))
  
  if (days === 0) return '今日'
  if (days === 1) return '昨日'
  if (days < 7) return `${days}日前`
  
  return latest.toLocaleDateString('ja-JP', { month: 'short', day: 'numeric' })
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
