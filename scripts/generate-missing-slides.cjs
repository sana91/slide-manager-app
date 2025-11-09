#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// TSVファイルがあるディレクトリ
const tsvDir = path.join(__dirname, 'src');
// スライドディレクトリがある場所
const slideDir = path.join(__dirname, '..', 'pages', 'slide');
// generate-slides.cjs のパス
const generateScript = path.join(__dirname, 'generate-slides.cjs');

// TSVファイル一覧を取得
function getTSVFiles() {
  if (!fs.existsSync(tsvDir)) {
    console.error(`❌ Error: TSV directory not found: ${tsvDir}`);
    process.exit(1);
  }

  const files = fs.readdirSync(tsvDir);
  return files
    .filter(file => file.endsWith('.tsv'))
    .map(file => file.replace('.tsv', ''));
}

// 既存のスライドディレクトリ一覧を取得
function getExistingSlideDirs() {
  if (!fs.existsSync(slideDir)) {
    return [];
  }

  const dirs = fs.readdirSync(slideDir, { withFileTypes: true });
  return dirs
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);
}

// メイン処理
function main() {
  console.log('🔍 Comparing TSV files and slide directories...\n');

  const tsvFiles = getTSVFiles();
  const existingDirs = getExistingSlideDirs();

  console.log(`📄 TSV files found: ${tsvFiles.length}`);
  tsvFiles.forEach(file => console.log(`   - ${file}.tsv`));
  console.log('');

  console.log(`📂 Existing slide directories: ${existingDirs.length}`);
  existingDirs.forEach(dir => console.log(`   - ${dir}/`));
  console.log('');

  // 存在しないディレクトリのTSVファイルを特定
  const missingDirs = tsvFiles.filter(tsv => !existingDirs.includes(tsv));

  if (missingDirs.length === 0) {
    console.log('✅ All TSV files have corresponding slide directories.');
    return;
  }

  console.log(`⚠️  Missing slide directories: ${missingDirs.length}`);
  missingDirs.forEach(dir => console.log(`   - ${dir}/`));
  console.log('');

  // 各TSVファイルに対して generate-slides.cjs を実行
  for (const slideCode of missingDirs) {
    console.log(`🚀 Generating slides for: ${slideCode}`);
    try {
      execSync(`node "${generateScript}" "${slideCode}"`, {
        stdio: 'inherit',
        cwd: path.join(__dirname, '..')
      });
      console.log(`✅ Completed: ${slideCode}\n`);
    } catch (error) {
      console.error(`❌ Failed to generate slides for: ${slideCode}`);
      console.error(error.message);
      console.log('');
    }
  }

  console.log('🎉 All missing slides have been generated!');
}

main();

