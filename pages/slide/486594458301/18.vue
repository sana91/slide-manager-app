<template>
  <SlidePageWrapper slide-id="486594458301" page-title="第5章-1：日本特有の前提条件" :current-page="18" :total-pages="22">
<div class="slide-container">
    <!-- 背景装飾 --><svg class="bg-element w-full h-full top-0 left-0" preserveaspectratio="xMidYMid slice" viewbox="0 0 1280 720">
        <defs>
            <pattern height="60" id="grid-lines" patternunits="userSpaceOnUse" width="60">
                <path d="M 60 0 L 0 0 0 60" fill="none" opacity="0.1" stroke="#1e3a8a" stroke-width="0.5"></path>
            </pattern>
        </defs>
        <rect fill="url(#grid-lines)" height="100%" width="100%"></rect>
        <path d="M 1100 0 L 1280 180 L 1280 0 Z" fill="#1e3a8a" opacity="0.1"></path>
        <circle cx="100" cy="650" fill="none" opacity="0.1" r="200" stroke="#1e40af" stroke-width="1"></circle>
    </svg><!-- ヘッダー -->
    <div class="absolute top-8 right-12 z-20">
        <div class="flex items-center space-x-2 text-gray-500 text-xs tracking-widest uppercase"><span class="text-blue-500 font-bold">Chapter 5-1</span><span>/</span><span>Japan's Unique Context</span></div>
    </div><!-- メインコンテンツ -->
    <div class="content-wrapper">
        <!-- 左カラム：詳細説明 -->
        <div class="main-content">
            <div class="section-header"><span class="section-sub">第5章 日本特有の課題と機会</span>
                <h1 class="section-title">日本特有の前提条件</h1>
            </div><!-- ポイント1: 低い流動性と長期雇用 -->
            <div class="bullet-point">
                <div class="bullet-title"><i class="fas fa-user-clock bullet-icon"></i>
                    <p>極端に低い流動性と長期雇用慣行</p>
                </div>
                <p class="bullet-desc"> 日本の転職率は米国の3分の1以下であり、平均勤続年数も長い（約12.4年）。組織への強い帰属意識は強みである一方、急激な産業構造の変化に対する適応力を削ぐ要因ともなっている。 </p>
            </div><!-- ポイント2: 現場力のパラドクス -->
            <div class="bullet-point" style="border-left-color: #ef4444;">
                <div class="bullet-title" style="color: #fca5a5;"><i class="fas fa-exclamation-triangle bullet-icon" style="color: #ef4444;"></i>
                    <p>「優秀な現場」がIT投資を阻害する</p>
                </div>
                <p class="bullet-desc"> 日本の現場力は非常に高く、不備のあるシステムやプロセスを現場の創意工夫でカバーしてしまう。この「現場の底力」が、皮肉にも根本的なIT投資やシステム刷新の緊急性をマスクし、DXを遅らせる原因となっている。 </p>
            </div><!-- ポイント3: IT投資の遅れ -->
            <div class="bullet-point">
                <div class="bullet-title"><i class="fas fa-chart-line-down bullet-icon"></i>
                    <p>IT投資の国際的遅れ</p>
                </div>
                <p class="bullet-desc"> 対GDP比でのIT投資額は主要国と比較して低位（約3.0%）に留まる。キャッシュレス普及の遅れなどに見られるように、変化への慎重な姿勢が「デジタル敗戦」のリスクを高めている。 </p>
            </div>
        </div><!-- 右カラム：チャート・ハイライト -->
        <div class="side-column">
            <!-- ハイライトボックス -->
            <div class="highlight-box">
                <p class="quote-text"> 「優秀な現場がIT投資を<br />遅らせる皮肉」 </p>
                <p class="quote-sub"> 現場が優秀すぎて問題が表面化しないため、経営は投資の必要性を感じにくい構造的ジレンマ。 </p>
            </div><!-- チャートエリア -->
            <div class="chart-container"><span class="chart-title">IT Investment vs GDP (%)</span><canvas id="investmentChart"></canvas></div>
            <div class="mt-4 text-xs text-gray-400 text-right">
                <p>※データは書籍内の記述に基づくイメージ比較</p>
            </div>
        </div>
    </div>
</div>
  </SlidePageWrapper>
</template>

<script setup>
// Nuxt4/Composition API対応（マウント後にChart.jsで描画）
import { onMounted } from 'vue'
import Chart from 'chart.js/auto'

onMounted(() => {
  const canvas = document.getElementById('investmentChart')
  if (!canvas) return
  const ctx = canvas.getContext('2d')
  if (!ctx) return

  // Chart.js デフォルト設定
  Chart.defaults.color = '#9ca3af'
  Chart.defaults.font.family = "'Noto Sans JP', sans-serif"

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['日本', '米国', '英国', '仏国'],
      datasets: [{
        label: '対GDP比 IT投資額 (%)',
        data: [3.0, 5.2, 4.8, 4.1],
        backgroundColor: [
          'rgba(59, 130, 246, 0.8)', // 日本（青）
          'rgba(75, 85, 99, 0.5)',   // 米国（グレー）
          'rgba(75, 85, 99, 0.3)',   // 英国
          'rgba(75, 85, 99, 0.3)'    // 仏国
        ],
        borderColor: [
          '#3b82f6',
          '#4b5563',
          '#4b5563',
          '#4b5563'
        ],
        borderWidth: 1,
        borderRadius: 4,
        barPercentage: 0.6
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: {
          backgroundColor: 'rgba(17, 24, 39, 0.9)',
          titleColor: '#fff',
          bodyColor: '#d1d5db',
          borderColor: 'rgba(59, 130, 246, 0.3)',
          borderWidth: 1,
          padding: 10,
          callbacks: {
            label: context => context.parsed.y + '%'
          }
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          max: 6,
          grid: {
            color: 'rgba(75, 85, 99, 0.2)',
            drawBorder: false
          },
          ticks: {
            callback: value => value + '%'
          }
        },
        x: {
          grid: { display: false }
        }
      },
      animation: false
    }
  })
})
</script>

<style scoped>
body {      font-family: 'Noto Sans JP', sans-serif;      margin: 0;      padding: 0;      background-color: #000000;    }    .slide-container {      width: 1280px;      min-height: 720px;      display: flex;      flex-direction: column;      position: relative;      background-color: #020408;      color: #ffffff;      overflow: hidden;    }    .content-wrapper {      flex: 1;      display: flex;      padding: 40px 60px;      position: relative;      z-index: 10;      gap: 50px; /* 間隔を少し広げる */    }    .bg-element {      position: absolute;      z-index: 1;      pointer-events: none;    }    /* 左側：メインコンテンツ */    .main-content {      flex: 3;      display: flex;      flex-direction: column;      justify-content: center;    }    .section-header {      margin-bottom: 30px;    }    .section-sub {      color: #60a5fa;      font-size: 0.85rem;      font-weight: 700;      letter-spacing: 0.1em;      text-transform: uppercase;      margin-bottom: 8px;      display: block;    }    .section-title {      font-size: 2.4rem;      font-weight: 700;      color: #ffffff;      line-height: 1.2;    }    .bullet-point {      margin-bottom: 25px;      padding-left: 20px;      border-left: 2px solid rgba(59, 130, 246, 0.3);      transition: all 0.3s ease;    }    .bullet-point:hover {      border-left-color: #3b82f6;      background-color: rgba(30, 58, 138, 0.1);    }    .bullet-title {      font-size: 1.2rem;      font-weight: 700;      color: #93c5fd;      margin-bottom: 6px;      display: flex;      align-items: center;    }    .bullet-icon {      margin-right: 12px;      font-size: 1rem;      color: #3b82f6;      width: 24px;      text-align: center;    }    .bullet-desc {      font-size: 0.95rem;      color: #d1d5db;      line-height: 1.6;      margin: 0;    }    /* 右側：サイドカラム */    .side-column {      flex: 2;      display: flex;      flex-direction: column;      justify-content: center;    }    .highlight-box {      background-color: rgba(17, 24, 39, 0.8);      border: 1px solid rgba(59, 130, 246, 0.3);      border-radius: 12px;      padding: 25px;      position: relative;      margin-bottom: 25px;      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);    }    .highlight-box::before {      content: '';      position: absolute;      top: 0;      left: 0;      width: 100%;      height: 4px;      background-color: #3b82f6;      border-radius: 12px 12px 0 0;    }    .quote-text {      font-size: 1.2rem;      font-weight: 700;      color: #ffffff;      line-height: 1.5;      margin-bottom: 10px;      font-family: 'Noto Serif JP', serif;    }    .quote-sub {      font-size: 0.9rem;      color: #9ca3af;    }    .chart-container {      background-color: rgba(30, 58, 138, 0.1);      border-radius: 12px;      padding: 20px;      border: 1px dashed rgba(59, 130, 246, 0.3);      height: 280px;      position: relative;    }    .chart-title {      position: absolute;      top: 15px;      left: 20px;      font-size: 0.85rem;      font-weight: 700;      color: #93c5fd;      text-transform: uppercase;      letter-spacing: 0.05em;    }
</style>
