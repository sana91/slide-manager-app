#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// コマンドライン引数を取得
const args = process.argv.slice(2);

if (args.length < 1) {
  console.error('❌ Usage: npm run generate:slides <slide_code>');
  console.error('   Example: npm run generate:slides MY_SLIDE');
  process.exit(1);
}

const slideCode = args[0];

// バリデーション
if (!slideCode || slideCode.trim() === '') {
  console.error('❌ Error: slide_code cannot be empty');
  process.exit(1);
}

// TSVファイルのパス
const tsvPath = path.join(__dirname, 'src', `${slideCode}.tsv`);

// TSVファイルの存在確認
if (!fs.existsSync(tsvPath)) {
  console.error(`❌ Error: TSV file not found: ${tsvPath}`);
  process.exit(1);
}

// TSVファイルを読み込んで解析
function parseTSV(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const lines = content.split('\n').filter(line => line.trim() !== '');

  if (lines.length < 2) {
    console.error('❌ Error: TSV file must have at least a header row and one data row');
    process.exit(1);
  }

  // ヘッダー行を取得
  const headers = lines[0].split('\t').map(h => h.trim());

  // 必要な列のインデックスを取得
  const titleIndex = headers.indexOf('title');
  const bodyIndex = headers.indexOf('body');
  const styleIndex = headers.indexOf('style');

  if (titleIndex === -1 || bodyIndex === -1 || styleIndex === -1) {
    console.error('❌ Error: TSV file must have "title", "body", and "style" columns');
    process.exit(1);
  }

  // データ行を解析（ヘッダー行を除く）
  const dataRows = [];
  for (let i = 1; i < lines.length; i++) {
    const values = lines[i].split('\t');
    dataRows.push({
      title: values[titleIndex] || '',
      body: values[bodyIndex] || '',
      style: values[styleIndex] || ''
    });
  }

  return dataRows;
}

// TSVデータを解析
const tsvData = parseTSV(tsvPath);
const totalPages = tsvData.length;

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
  for (let i = 1; i <= totalPages; i++) {
    const fileName = `${i}.vue`;
    const filePath = path.join(slideDir, fileName);
    const rowData = tsvData[i - 1]; // 0-indexedなので i-1
    const content = generateVueTemplate(
      slideCode,
      rowData.title,
      i,
      totalPages,
      rowData.body,
      rowData.style
    );
    
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`  ✅ Created: ${fileName}`);
  }

  console.log('');
  console.log('🎉 Slide generation completed!');
  console.log('');
  console.log(`📂 Location: pages/slide/${slideCode}/`);
  console.log(`📄 Files created: ${totalPages} page(s)`);
  console.log('');
  console.log(`🌐 Access URLs:`);
  for (let i = 1; i <= totalPages; i++) {
    console.log(`   - http://localhost:3000/slide/${slideCode}/${i}`);
  }
  console.log('');
}

function generateVueTemplate(slideCode, pageTitle, pageNumber, totalPages, body, style) {
  return `<template>
  <SlidePageWrapper slide-id="${slideCode}" page-title="${pageTitle}" :current-page="${pageNumber}" :total-pages="${totalPages}">
${body}
  </SlidePageWrapper>
</template>

<style scoped>
${style}
</style>
`;
}
