#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// コマンドライン引数を取得
const args = process.argv.slice(2);

if (args.length < 2) {
  console.error('❌ Usage: npm run generate:slides <slide_code> <page_count>');
  console.error('   Example: npm run generate:slides MY_SLIDE 5');
  process.exit(1);
}

const slideCode = args[0];
const pageCount = parseInt(args[1], 10);

// バリデーション
if (!slideCode || slideCode.trim() === '') {
  console.error('❌ Error: slide_code cannot be empty');
  process.exit(1);
}

if (isNaN(pageCount) || pageCount < 1) {
  console.error('❌ Error: page_count must be a positive number');
  process.exit(1);
}

// スライドディレクトリのパス
const slideDir = path.join(__dirname, '..', 'pages', 'slide', slideCode);

// ディレクトリが既に存在するかチェック
if (fs.existsSync(slideDir)) {
  console.warn(`⚠️  Warning: Directory already exists: ${slideDir}`);
  const readline = require('readline');
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  rl.question('Continue and overwrite existing files? (y/N): ', (answer) => {
    rl.close();
    if (answer.toLowerCase() !== 'y') {
      console.log('❌ Operation cancelled');
      process.exit(0);
    }
    createSlides();
  });
} else {
  createSlides();
}

function createSlides() {
  // ディレクトリを作成
  fs.mkdirSync(slideDir, { recursive: true });
  console.log(`✅ Created directory: ${slideDir}`);

  // 各ページファイルを作成
  for (let i = 1; i <= pageCount; i++) {
    const fileName = `${i}.vue`;
    const filePath = path.join(slideDir, fileName);
    const content = generateVueTemplate(slideCode, i, pageCount);
    
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`  ✅ Created: ${fileName}`);
  }

  console.log('');
  console.log('🎉 Slide generation completed!');
  console.log('');
  console.log(`📂 Location: pages/slide/${slideCode}/`);
  console.log(`📄 Files created: ${pageCount} page(s)`);
  console.log('');
  console.log(`🌐 Access URLs:`);
  for (let i = 1; i <= pageCount; i++) {
    console.log(`   - http://localhost:3000/slide/${slideCode}/${i}`);
  }
  console.log('');
}

function generateVueTemplate(slideCode, pageNumber, totalPages) {
  return `<style scoped>


</style>

<template>
  <div class="min-h-screen bg-gray-900 text-white container px-4 py-4">
    <div class="prose prose-lg max-w-none">





    </div>

    <div class="mt-8 flex justify-start items-center">
      <div>
        ${pageNumber > 1 ? `<NuxtLink
          to="/slide/${slideCode}/${pageNumber - 1}"
          class="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors"
        >
          ← 前頁
        </NuxtLink>` : '<div class="inline-block bg-gray-800 text-white px-6 py-3 rounded-lg transition-colors">← 前頁</div>'}
      </div>

      <div
        class="inline-block bg-gray-900 text-white px-6 py-3 rounded-lg transition-colors text-center"
      >
        <span> [ ${pageNumber} / ${totalPages} ]</span>
      </div>

      <div>
        ${pageNumber < totalPages ? `<NuxtLink
          to="/slide/${slideCode}/${pageNumber + 1}"
          class="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors"
        >
          次頁 →
        </NuxtLink>` : '<div class="inline-block bg-gray-800 text-white px-6 py-3 rounded-lg transition-colors">次頁 →</div>'}
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
useHead({
  title: '${slideCode} - ページ ${pageNumber}'
})
</script>
`;
}
