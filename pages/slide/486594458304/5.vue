<template>
  <SlidePageWrapper slide-id="486594458304" page-title="13-3 日本の技術採用の遅れと強み" :current-page="5" :total-pages="22">
<div class="slide-container">
    <div class="bg-pattern"></div><!-- Header -->
    <div class="header">
        <h1 class="header-title">日本の技術採用の遅れと強み</h1>
        <div style="color: #64748b; font-size: 14px;">Chapter 13</div>
    </div><!-- Main Content -->
    <div class="main-content">
        <!-- Left Panel: Chart -->
        <div class="left-panel">
            <div class="chart-container">
                <div class="chart-title"><i class="fas fa-history"></i>
                    <p>主要技術の採用遅れ（米国比較）</p>
                </div>
                <div class="canvas-wrapper"><canvas id="techDelayChart"></canvas></div>
            </div>
        </div><!-- Right Panel: Infra Data & Implication -->
        <div class="right-panel">
            <div style="margin-bottom: 10px;">
                <p style="color: #60a5fa; font-weight: 700; font-size: 16px; margin-bottom: 10px; display: flex; align-items: center;"><i class="fas fa-network-wired" style="margin-right: 8px;"></i>インフラの強み（OECD比較） </p>
            </div>
            <div class="data-card">
                <p class="data-label">固定ブロードバンド契約数</p>
                <p class="data-value">OECD 2位<span>（普及率）</span></p>
            </div>
            <div class="data-card">
                <p class="data-label">光ファイバー普及率</p>
                <p class="data-value">79%<span>（OECD 5位）</span></p>
            </div>
            <div class="data-card">
                <p class="data-label">5Gカバレッジ (2023年)</p>
                <p class="data-value">98.1%<span>（人口カバー率）</span></p>
            </div>
            <div class="implication-box"><i class="fas fa-lightbulb implication-icon"></i>
                <div class="implication-text">
                    <p><strong>インフラは整っているが、活用が遅れている。</strong></p>
                    <p style="font-size: 14px; color: #cbd5e1; margin-top: 5px;"> この遅れを挽回する唯一の方法は、AIエージェントを「使いこなす実践」を今すぐ始めることにある。 </p>
                </div>
            </div>
        </div>
    </div><!-- Footer -->
    <div class="footer">
        <p>5 / 22</p>
    </div>
</div>
    </SlidePageWrapper>
</template>
<script setup>
import { onMounted, onBeforeUnmount } from 'vue'
let techDelayChart = null

// Nuxt4: window/document/Chart are only available client-side
onMounted(async () => {
  // dynamic import Chart.js only on client
  const Chart = (await import('chart.js/auto')).default

  const ctx = document.getElementById('techDelayChart')?.getContext('2d')
  if (!ctx) return

  techDelayChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['PC/インターネット', 'ブロードバンド', 'クラウド', 'スマートフォン', '生成AI'],
      datasets: [
        {
          label: '米国からの採用遅れ（年）',
          data: [5, 4, 6, 1.5, 0.8],
          backgroundColor: [
            'rgba(148, 163, 184, 0.5)',
            'rgba(148, 163, 184, 0.5)',
            'rgba(148, 163, 184, 0.5)',
            'rgba(148, 163, 184, 0.5)',
            'rgba(59, 130, 246, 0.8)' // Highlight AI
          ],
          borderColor: [
            'rgba(148, 163, 184, 1)',
            'rgba(148, 163, 184, 1)',
            'rgba(148, 163, 184, 1)',
            'rgba(148, 163, 184, 1)',
            '#3b82f6'
          ],
          borderWidth: 1,
          borderRadius: 4
        }
      ]
    },
    options: {
      indexAxis: 'y',
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: {
          callbacks: {
            label: function(context) {
              return context.raw + '年の遅れ';
            }
          },
          backgroundColor: 'rgba(15, 23, 42, 0.9)',
          titleColor: '#e2e8f0',
          bodyColor: '#e2e8f0',
          borderColor: 'rgba(59, 130, 246, 0.3)',
          borderWidth: 1
        }
      },
      scales: {
        x: {
          grid: { color: 'rgba(148, 163, 184, 0.1)' },
          ticks: {
            color: '#94a3b8',
            font: { family: "'Noto Sans JP', sans-serif" }
          },
          title: {
            display: true,
            text: '遅れの期間（年）',
            color: '#64748b'
          }
        },
        y: {
          grid: { display: false },
          ticks: {
            color: '#e2e8f0',
            font: {
              size: 14,
              family: "'Noto Sans JP', sans-serif",
              weight: 'bold'
            }
          }
        }
      }
    }
  })
})

onBeforeUnmount(() => {
  // Clean up chart instance
  if (techDelayChart) {
    techDelayChart.destroy()
    techDelayChart = null
  }
})
</script>
<style scoped>
body {      margin: 0;      padding: 0;      font-family: 'Noto Sans JP', sans-serif;      background-color: #000000;      color: #ffffff;      overflow: hidden;    }    .slide-container {      width: 1280px;      height: 720px;      display: flex;      flex-direction: column;      position: relative;      background: #0a0a0a;      overflow: hidden;    }    .bg-pattern {      position: absolute;      width: 100%;      height: 100%;      z-index: 0;      background-color: #0a0a0a;      background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%233b82f6' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");    }    .header {      padding: 25px 60px 10px;      z-index: 10;      display: flex;      justify-content: space-between;      align-items: center;      border-bottom: 1px solid rgba(59, 130, 246, 0.3);    }    .header-title {      font-size: 28px;      font-weight: 700;      color: #94a3b8;      letter-spacing: 0.5px;      display: flex;      align-items: center;    }    .header-title::before {      content: "13-3";      display: inline-block;      background-color: #3b82f6;      color: white;      font-size: 16px;      padding: 2px 10px;      border-radius: 4px;      margin-right: 15px;    }    .main-content {      flex: 1;      display: flex;      padding: 40px 60px;      gap: 40px;      z-index: 10;      align-items: stretch;    }    .left-panel {      flex: 3;      display: flex;      flex-direction: column;    }    .right-panel {      flex: 2;      display: flex;      flex-direction: column;      gap: 25px;    }    .chart-container {      background-color: rgba(30, 41, 59, 0.4);      border-radius: 16px;      border: 1px solid rgba(71, 85, 105, 0.5);      padding: 25px;      flex: 1;      position: relative;      display: flex;      flex-direction: column;    }    .chart-title {      font-size: 18px;      font-weight: 700;      color: #e2e8f0;      margin-bottom: 20px;      display: flex;      align-items: center;    }    .chart-title i {      color: #3b82f6;      margin-right: 10px;    }    .canvas-wrapper {      flex: 1;      position: relative;      min-height: 300px;    }    .data-card {      background-color: rgba(30, 41, 59, 0.4);      border-left: 4px solid #3b82f6;      padding: 20px;      border-radius: 0 12px 12px 0;      display: flex;      flex-direction: column;      justify-content: center;    }    .data-label {      font-size: 14px;      color: #94a3b8;      margin-bottom: 5px;      font-weight: 500;    }    .data-value {      font-size: 24px;      font-weight: 700;      color: #fff;    }    .data-value span {      font-size: 14px;      color: #64748b;      margin-left: 8px;      font-weight: 400;    }    .implication-box {      margin-top: auto;      background-color: rgba(59, 130, 246, 0.15);      border: 1px solid rgba(59, 130, 246, 0.3);      border-radius: 12px;      padding: 20px;      display: flex;      align-items: flex-start;    }    .implication-icon {      color: #60a5fa;      font-size: 24px;      margin-right: 15px;      margin-top: 2px;    }    .implication-text {      font-size: 16px;      color: #e2e8f0;      line-height: 1.6;    }    .footer {      position: absolute;      bottom: 20px;      right: 30px;      font-size: 12px;      color: #475569;    }
</style>
