<template>
  <div class="min-h-screen flex flex-col">
    <!-- ヘッダー -->
    <header class="bg-white shadow-sm border-b border-gray-200">
      <nav class="container mx-auto px-4 py-4">
        <div class="flex items-center justify-between">
          <NuxtLink 
            to="/" 
            class="text-2xl font-bold text-primary-600 hover:text-primary-700 transition-colors"
          >
            📊 Slide Manager
          </NuxtLink>
          
          <div class="flex items-center gap-4">
            <NuxtLink 
              to="/" 
              class="px-4 py-2 text-gray-700 hover:text-primary-600 transition-colors font-medium"
            >
              ホーム
            </NuxtLink>
            <NuxtLink 
              to="/slides" 
              class="px-4 py-2 text-gray-700 hover:text-primary-600 transition-colors font-medium"
            >
              スライド一覧
            </NuxtLink>
            <NuxtLink 
              to="/slides/create" 
              class="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-medium shadow-sm"
            >
              新規作成
            </NuxtLink>
          </div>
        </div>
      </nav>
    </header>

    <!-- メインコンテンツ -->
    <main class="flex-1">
      <slot />
    </main>

    <!-- フッター -->
    <footer class="bg-gray-100 border-t border-gray-200 mt-auto">
      <div class="container mx-auto px-4 py-6 text-center text-gray-600 text-sm">
        <p>&copy; 2024 Slide Manager. Built with Nuxt 3 + Tailwind CSS.</p>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
// レイアウト固有のロジックのみ
</script>