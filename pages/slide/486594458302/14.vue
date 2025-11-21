<template>
  <SlidePageWrapper slide-id="486594458302" page-title="" :current-page="14" :total-pages="22">
<div class="slide-container">
    <div class="header">
        <div class="header-accent"></div><span class="chapter-badge">第8章</span>
        <h2 class="header-title">意思決定の高密度化とAI疲れ</h2>
    </div>
    <div class="main-content">
        <!-- Left Column: Text & Insights -->
        <div class="content-column">
            <div class="content-title-area">
                <h1 class="content-title">労働の高密度化の歴史</h1>
                <p class="content-subtitle">労働時間は減少傾向にあるにもかかわらず、「忙しさ」の実感はむしろ増大しています。これは労働の「密度」が劇的に上昇しているためです。</p>
            </div>
            <div class="stats-card"><i class="fas fa-tachometer-alt stats-icon"></i>
                <p class="stats-label">欧州労働条件調査データ</p>
                <p class="stats-value">労働者の約3分の1が<br />「常に高スピードで作業」している</p>
            </div>
            <div class="insight-box">
                <div class="insight-icon"><i class="fas fa-compress-arrows-alt"></i></div>
                <div>
                    <p class="insight-text" style="font-weight: 700; color: #fff; margin-bottom: 5px;">空白の時間の圧縮</p>
                    <p class="insight-text">メール、チャット、そしてAI。新技術は待ち時間や移動時間といった「空白」を極限まで削減しました。結果として、脳を休める隙間がなくなり、高強度の知的作業が絶え間なく続く「忙しさの恒常化」を招いています。</p>
                </div>
            </div>
        </div><!-- Right Column: Chart -->
        <div class="chart-column">
            <div class="chart-label">年労働時間と労働密度の推移イメージ</div>
            <div class="chart-wrapper"><canvas id="densityChart"></canvas></div>
            <div style="margin-top: 20px; width: 100%; padding: 0 20px;">
                <div style="display: flex; justify-content: space-between; font-size: 12px; color: #94a3b8; margin-bottom: 5px;"><span>20世紀初頭</span><span>現代</span></div>
                <div style="height: 6px; background: #334155; border-radius: 3px; position: relative; overflow: hidden;">
                    <div style="position: absolute; left: 0; top: 0; height: 100%; width: 100%; background-color: #334155;"></div>
                    <div style="position: absolute; right: 0; top: 0; height: 100%; width: 60%; background-color: #ef4444;"></div>
                </div>
                <div style="display: flex; justify-content: space-between; font-size: 12px; margin-top: 5px;"><span style="color: #60a5fa;">● 労働時間（減少）</span><span style="color: #ef4444;">● 労働密度（上昇）</span></div>
            </div>
        </div>
    </div>
    <div class="footer">
        <p>AIエージェント 人類と協働する機械 - 第2部要約</p>
        <p>Page 14</p>
    </div>
</div>
  </SlidePageWrapper>
</template>
<script setup>
import { onMounted, onBeforeUnmount } from 'vue'

let densityChart = null

onMounted(async () => {
  // Chart.js（およびwindow/document）はクライアントサイドのみ利用
  const Chart = (await import('chart.js/auto')).default

  // カスタムプラグイン（現状未使用ですが、元コード保持用）
  const chartAreaBorder = {
    id: 'chartAreaBorder',
    beforeDraw(chart, args, options) {
      const { ctx, chartArea: { left, top, width, height } } = chart;
      ctx.save();
      ctx.strokeStyle = options.borderColor;
      ctx.lineWidth = options.borderWidth;
      ctx.setLineDash(options.borderDash || []);
      ctx.lineDashOffset = options.borderDashOffset;
      ctx.strokeRect(left, top, width, height);
      ctx.restore();
    }
  };

  const canvas = document.getElementById('densityChart');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  densityChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['1900', '1920', '1940', '1960', '1980', '2000', '2020'],
      datasets: [
        {
          label: '年間労働時間 (h)',
          data: [3000, 2800, 2400, 2200, 2000, 1800, 1700],
          borderColor: '#60a5fa', // Blue
          backgroundColor: 'rgba(96, 165, 250, 0.1)',
          borderWidth: 3,
          yAxisID: 'y',
          tension: 0.4,
          fill: true
        },
        {
          label: '労働密度 (精神的負荷)',
          data: [20, 30, 40, 50, 65, 85, 95],
          borderColor: '#ef4444', // Red
          backgroundColor: 'transparent',
          borderWidth: 3,
          borderDash: [5, 5],
          yAxisID: 'y1',
          tension: 0.4,
          pointBackgroundColor: '#ef4444'
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      interaction: {
        mode: 'index',
        intersect: false
      },
      plugins: {
        legend: {
          display: false // HTML側でカスタム凡例
        },
        tooltip: {
          backgroundColor: 'rgba(15, 23, 42, 0.9)',
          titleColor: '#f8fafc',
          bodyColor: '#cbd5e1',
          borderColor: '#334155',
          borderWidth: 1,
          padding: 10,
          displayColors: true
        }
      },
      scales: {
        x: {
          grid: {
            color: '#334155',
            drawBorder: false
          },
          ticks: {
            color: '#94a3b8',
            font: {
              family: "'Noto Sans JP', sans-serif"
            }
          }
        },
        y: {
          type: 'linear',
          display: true,
          position: 'left',
          grid: {
            color: 'rgba(51, 65, 85, 0.5)',
            drawBorder: false
          },
          ticks: {
            color: '#60a5fa',
            callback: function(value) {
              return value + 'h';
            }
          },
          min: 0,
          max: 3500,
          title: {
            display: true,
            text: '年間労働時間',
            color: '#60a5fa',
            font: { size: 10 }
          }
        },
        y1: {
          type: 'linear',
          display: true,
          position: 'right',
          grid: {
            drawOnChartArea: false
          },
          ticks: {
            display: false // 数字は非表示（抽象的な密度指標）
          },
          min: 0,
          max: 100,
          title: {
            display: true,
            text: '労働密度（高）',
            color: '#ef4444',
            font: { size: 10 }
          }
        }
      }
    }
    // , plugins: [chartAreaBorder] // 必要ならカスタムプラグインを有効化
  });
});

onBeforeUnmount(() => {
  if (densityChart) {
    densityChart.destroy();
    densityChart = null;
  }
});
</script>
<style scoped>
body {            margin: 0;            padding: 0;            width: 1280px;            min-height: 720px;            font-family: 'Noto Sans JP', sans-serif;            background-color: #0f172a;            color: #ffffff;        }        .slide-container {            width: 1280px;            min-height: 720px;            display: flex;            flex-direction: column;            position: relative;            background-color: #0f172a;            overflow: hidden;        }        /* Header */        .header {            height: 80px;            padding: 0 60px;            display: flex;            align-items: center;            border-bottom: 1px solid #1e293b;            background-color: #0f172a;            position: relative;            z-index: 10;        }        .header-accent {            position: absolute;            top: 0;            left: 0;            width: 100%;            height: 4px;            background-color: #3b82f6;        }        .chapter-badge {            background-color: #1e40af;            color: #ffffff;            font-weight: 700;            padding: 4px 12px;            border-radius: 20px;            font-size: 14px;            margin-right: 15px;        }        .header-title {            font-size: 24px;            font-weight: 700;            color: #f8fafc;        }        /* Main Content */        .main-content {            flex: 1;            padding: 30px 60px;            display: flex;            gap: 30px;        }        /* Content Column */        .content-column {            flex: 1;            display: flex;            flex-direction: column;            justify-content: center;            gap: 20px;        }                /* Chart Column */        .chart-column {            flex: 1.2;            background-color: #1e293b;            border-radius: 16px;            padding: 20px;            border: 1px solid #334155;            display: flex;            flex-direction: column;            align-items: center;            justify-content: center;            position: relative;        }        /* Title Area within Content */        .content-title-area {            margin-bottom: 10px;        }        .content-title {            font-size: 32px;            font-weight: 900;            color: #ffffff;            margin-bottom: 8px;        }        .content-subtitle {            font-size: 18px;            color: #94a3b8;            line-height: 1.6;        }        /* Stats Card */        .stats-card {            background-color: rgba(30, 58, 138, 0.2);            border-left: 4px solid #3b82f6;            padding: 20px;            border-radius: 0 8px 8px 0;            margin-top: 10px;        }        .stats-label {            font-size: 14px;            color: #60a5fa;            font-weight: 700;            margin-bottom: 5px;            text-transform: uppercase;        }        .stats-value {            font-size: 24px;            font-weight: 700;            color: #f8fafc;            line-height: 1.4;        }        .stats-icon {            float: right;            color: rgba(59, 130, 246, 0.3);            font-size: 40px;            margin-top: -10px;        }        /* Insight Box */        .insight-box {            background-color: #1e293b;            border: 1px solid #334155;            border-radius: 12px;            padding: 20px;            display: flex;            gap: 15px;        }        .insight-icon {            color: #ef4444;            font-size: 24px;            margin-top: 2px;        }        .insight-text {            font-size: 16px;            color: #cbd5e1;            line-height: 1.6;        }        /* Chart Styles */        .chart-wrapper {            position: relative;            width: 100%;            height: 350px;        }        .chart-label {            position: absolute;            top: 10px;            right: 20px;            background-color: rgba(15, 23, 42, 0.8);            padding: 5px 10px;            border-radius: 4px;            font-size: 12px;            color: #94a3b8;            border: 1px solid #334155;        }        /* Footer */        .footer {            height: 50px;            padding: 0 60px;            display: flex;            align-items: center;            justify-content: space-between;            font-size: 14px;            color: #64748b;            border-top: 1px solid #1e293b;        }
</style>
