<style scoped>
        body, html {
            margin: 0;
            padding: 0;
            font-family: 'Noto Sans JP', sans-serif;
            color: #333;
        }
        .slide-container {
            width: 1280px;
            min-height: 720px;
            display: flex;
            background-color: #f5f9fc;
            overflow: hidden;
            position: relative;
        }
        .content-wrapper {
            flex: 1;
            display: flex;
            flex-direction: column;
            padding: 60px;
            z-index: 2;
        }
        .header {
            margin-bottom: 30px;
        }
        .title {
            font-size: 42px;
            font-weight: 700;
            color: #1e88e5;
            margin-bottom: 10px;
        }
        .subtitle {
            font-size: 24px;
            font-weight: 500;
            color: #546e7a;
        }
        .content-section {
            display: flex;
            flex-direction: column;
            gap: 16px;
        }
        .bullet-item {
            display: flex;
            align-items: flex-start;
            gap: 16px;
        }
        .bullet-icon {
            flex-shrink: 0;
            width: 36px;
            height: 36px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 16px;
            color: white;
        }
        .bullet-text {
            flex: 1;
        }
        .bullet-title {
            font-size: 20px;
            font-weight: 700;
            margin-bottom: 0;
        }
        .bullet-desc {
            font-size: 16px;
            font-weight: 400;
            line-height: 1.4;
            margin-top: 2px;
            margin-bottom: 0;
        }
        .accent-color-1 { background-color: #4caf50; }
        .accent-color-2 { background-color: #2196f3; }
        .accent-color-3 { background-color: #ff9800; }
        .accent-color-4 { background-color: #9c27b0; }
        .accent-color-5 { background-color: #e91e63; }
        .accent-color-6 { background-color: #00bcd4; }
        .accent-color-7 { background-color: #009688; }
        .accent-color-8 { background-color: #ff5722; }
        .accent-color-9 { background-color: #795548; }
        .accent-color-10 { background-color: #607d8b; }
        .accent-color-11 { background-color: #f44336; }
        .decoration {
            position: absolute;
            z-index: 1;
        }
        .decoration-top-right {
            top: -80px;
            right: -80px;
            width: 200px;
            height: 200px;
            border-radius: 50%;
            background-color: rgba(33, 150, 243, 0.1);
        }
        .decoration-bottom-left {
            bottom: -100px;
            left: -100px;
            width: 300px;
            height: 300px;
            border-radius: 50%;
            background-color: rgba(76, 175, 80, 0.1);
        }
        .chapters-container {
            display: flex;
            flex-wrap: wrap;
            gap: 14px;
        }
        .chapter-col {
            flex: 1;
            min-width: 45%;
        }
        .separator {
            height: 2px;
            background-color: rgba(33, 150, 243, 0.2);
            margin: 12px 0;
            border-radius: 1px;
        }
</style>

<template>
  <div class="min-h-screen bg-gray-900 text-white">
    <div class="prose prose-lg max-w-none">

<div class="slide-container">
<div class="decoration decoration-top-right"></div>
<div class="decoration decoration-bottom-left"></div>
<div class="content-wrapper">
<div class="header">
<p class="title">全体構成（10章＋30日プログラム）</p>
<p class="subtitle">体力おばけになるための段階的アプローチ</p>
</div>
<div class="chapters-container">
<div class="chapter-col">
<div class="content-section">
<div class="bullet-item">
<div class="bullet-icon accent-color-1">
<i class="fas fa-brain"></i>
</div>
<div class="bullet-text">
<p class="bullet-title">第1章：体力おばけのマインドセット</p>
<p class="bullet-desc">体力は何歳からでも伸ばせる資産という考え方</p>
</div>
</div>
<div class="bullet-item">
<div class="bullet-icon accent-color-2">
<i class="fas fa-arrows-alt"></i>
</div>
<div class="bullet-text">
<p class="bullet-title">第2章：運動が苦手を変える考え方</p>
<p class="bullet-desc">小さな目標設定で運動ハードルを下げる</p>
</div>
</div>
<div class="bullet-item">
<div class="bullet-icon accent-color-3">
<i class="fas fa-sync-alt"></i>
</div>
<div class="bullet-text">
<p class="bullet-title">第3章：モチベーションに頼らない仕組み</p>
<p class="bullet-desc">気分に左右されない継続の仕掛けづくり</p>
</div>
</div>
<div class="bullet-item">
<div class="bullet-icon accent-color-4">
<i class="fas fa-chair"></i>
</div>
<div class="bullet-text">
<p class="bullet-title">第4章：動かない時間を減らす工夫</p>
<p class="bullet-desc">日常のちょっとした動きが大きな差に</p>
</div>
</div>
<div class="bullet-item">
<div class="bullet-icon accent-color-5">
<i class="fas fa-hourglass-start"></i>
</div>
<div class="bullet-text">
<p class="bullet-title">第5章：今が最も若い日</p>
<p class="bullet-desc">年齢を言い訳にせず今すぐ始める意義</p>
</div>
</div>
</div>
</div>
<div class="chapter-col">
<div class="content-section">
<div class="bullet-item">
<div class="bullet-icon accent-color-6">
<i class="fas fa-chart-line"></i>
</div>
<div class="bullet-text">
<p class="bullet-title">第6章：体力を「見える化」する</p>
<p class="bullet-desc">セルフチェックと記録で体力を可視化</p>
</div>
</div>
<div class="bullet-item">
<div class="bullet-icon accent-color-7">
<i class="fas fa-shield-alt"></i>
</div>
<div class="bullet-text">
<p class="bullet-title">第7章：怪我の予防と安全な運動</p>
<p class="bullet-desc">安全・無理なく続けるための注意点</p>
</div>
</div>
<div class="bullet-item">
<div class="bullet-icon accent-color-8">
<i class="fas fa-dumbbell"></i>
</div>
<div class="bullet-text">
<p class="bullet-title">第8章：体力を上げる「3種の運動フォーム」</p>
<p class="bullet-desc">筋トレ・有酸素・ストレッチの効率的実践</p>
</div>
</div>
<div class="bullet-item">
<div class="bullet-icon accent-color-9">
<i class="fas fa-bed"></i>
</div>
<div class="bullet-text">
<p class="bullet-title">第9章：リカバリー（回復）の重要性</p>
<p class="bullet-desc">休養・睡眠・ケアで体力を底上げ</p>
</div>
</div>
<div class="bullet-item">
<div class="bullet-icon accent-color-10">
<i class="fas fa-home"></i>
</div>
<div class="bullet-text">
<p class="bullet-title">第10章：体力の底上げをする習慣</p>
<p class="bullet-desc">日常生活に運動を組み込む具体策</p>
</div>
</div>
</div>
</div>
</div>
<div class="separator"></div>
<div class="content-section">
<div class="bullet-item">
<div class="bullet-icon accent-color-11">
<i class="fas fa-calendar-check"></i>
</div>
<div class="bullet-text">
<p class="bullet-title">30日実践プログラム（体力おばけへの道シート）</p>
<p class="bullet-desc">• Day1–10：3種目×10秒×1–3セット<br/>
            • Day11–20：3種目×20秒×1–3セット<br/>
            • Day21–30：3種目×30秒×1–3セット<br/>
            ※日々の記録・振り返りシート付き</p>
</div>
</div>
</div>
</div>
</div>


    </div>

    <div class="mt-8 flex justify-start items-center">
      <div>
        <NuxtLink
          to="/slide/B0FPPSR9ZW/2"
          class="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors"
        >
          ← 前のページ
        </NuxtLink>
      </div>

      <div
        class="inline-block bg-gray-600 text-white px-6 py-3 rounded-lg transition-colors"
      >
        <span><code>B0FPPSR9ZW</code>: </span>
        <span> [ 3 / 20 ]</span>
      </div>

      <div>
        <NuxtLink
          to="/slide/B0FPPSR9ZW/4"
          class="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors"
        >
          次のページ →
        </NuxtLink>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'B0FPPSR9ZW - ページ 3'
})
</script>
