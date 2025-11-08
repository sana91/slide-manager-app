<template>
  <div class="container mx-auto px-4 py-8">
    <header class="mb-8">
      <h1 class="text-4xl font-bold text-primary-600 mb-2">
        Slide Manager
      </h1>
      <p class="text-gray-600">
        HTMLスライドの管理・登録・閲覧アプリケーション
      </p>
    </header>

    <div class="bg-white rounded-lg shadow-md p-6">
      <h2 class="text-2xl font-semibold mb-4">Welcome!</h2>
      <p class="text-gray-700 mb-4">
        Nuxt 4 + Tailwind CSS + TypeScriptでセットアップが完了しました。
      </p>
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div class="p-4 bg-primary-50 rounded-lg border border-primary-200">
          <h3 class="font-semibold text-primary-700 mb-2">📝 スライド登録</h3>
          <p class="text-sm text-gray-600">HTMLスライドを簡単に登録・管理</p>
        </div>
        
        <div class="p-4 bg-primary-50 rounded-lg border border-primary-200">
          <h3 class="font-semibold text-primary-700 mb-2">📚 一覧表示</h3>
          <p class="text-sm text-gray-600">登録されたスライドを一覧で確認</p>
        </div>
        
        <div class="p-4 bg-primary-50 rounded-lg border border-primary-200">
          <h3 class="font-semibold text-primary-700 mb-2">👀 閲覧機能</h3>
          <p class="text-sm text-gray-600">スライドをプレビュー表示</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'ホーム'
})
</script>
