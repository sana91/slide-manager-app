<template>
  <div class="min-h-screen bg-gray-900 text-white">
    <div class="container mx-auto px-4 py-8">
      <div class="bg-white text-gray-900 rounded-lg shadow-2xl p-12">
        <h1 class="text-5xl font-bold mb-8 text-center">サンプルスライド</h1>
        
        <div class="prose prose-lg max-w-none">
          <h2>ページ 1</h2>
          <p>これは手動で作成されたサンプルスライドページです。</p>
          
          <ul>
            <li>静的なSPAとして動作します</li>
            <li>各スライドは手動で作成します</li>
            <li>ディレクトリ構造: /slide/[スライドコード]/[ページ番号].vue</li>
          </ul>
          
          <h3>使い方</h3>
          <p>新しいスライドを追加するには：</p>
          <ol>
            <li><code>pages/slide/</code> 配下に新しいディレクトリを作成</li>
            <li>その中に <code>1.vue</code>, <code>2.vue</code> などのページファイルを作成</li>
            <li>このファイルをテンプレートとして使用できます</li>
          </ol>
        </div>
      </div>
      
      <div class="mt-8 text-center">
        <NuxtLink 
          to="/" 
          class="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors"
        >
          ホームに戻る
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'サンプルスライド - ページ 1'
})
</script>

<style scoped>
.prose {
  @apply text-gray-900;
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
</style>
