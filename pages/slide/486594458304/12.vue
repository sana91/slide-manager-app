<template>
    <SlidePageWrapper slide-id="486594458304" page-title="15-3 第3の壁：消える生産性の罠" :current-page="12" :total-pages="22">
        <div class="slide-container">
            <div class="bg-pattern"></div><!-- Header -->
            <div class="header">
                <h1 class="header-title">第3の壁：消える生産性の罠</h1>
                <div style="color: #64748b; font-size: 14px;">Chapter 15</div>
            </div><!-- Main Content -->
            <div class="main-content">
                <!-- Left Panel: Problems & Solutions -->
                <div class="left-panel">
                    <div class="concept-card">
                        <p class="concept-label"><i class="fas fa-exclamation-triangle" style="margin-right:8px; color:#ef4444;"></i> 問題：ブルシット・ジョブの増殖</p>
                        <h2 class="concept-title">効率化の余剰時間が消える</h2>
                        <p class="concept-text"> AI導入で業務を効率化しても、生まれた余剰時間が新たな「報告・会議・メール」などの本質的でない業務に吸収されてしまう現象。<br /> 結果として、組織全体の成果（売上・利益）にはつながらない。 </p>
                    </div>
                    <div class="concept-card solution">
                        <p class="concept-label"><i class="fas fa-check-circle" style="margin-right:8px; color:#3b82f6;"></i> 解決策：戦略的なリソース再配置</p>
                        <h2 class="concept-title">RunからGrow/Transformへ</h2>
                        <p class="concept-text"> 効率化で浮いたリソースを、意図的に「非定型業務（Grow）」や「変革業務（Transform）」へシフトさせる設計が必要。 </p>
                    </div>
                </div><!-- Right Panel: Visual Chart -->
                <div class="right-panel">
                    <div class="chart-container">
                        <div class="chart-title"><i class="fas fa-chart-pie"></i>
                            <p>リソース再配置の理想形</p>
                        </div>
                        <div class="canvas-wrapper"><canvas id="resourceShiftChart"></canvas></div>
                        <div class="implication-box" style="margin-top: 15px;"><i class="fas fa-lightbulb implication-icon"></i>
                            <div class="implication-text">
                                <p><strong>「早く帰る」か「新しい価値を作る」か</strong></p>
                                <p style="font-size: 14px; color: #cbd5e1; margin-top: 5px;"> 単なる空き時間にするのではなく、明確に「価値創造」のための活動に投資する合意形成が不可欠。 </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div><!-- Footer -->
            <div class="footer">
                <p>12 / 22</p>
            </div>
        </div>
    </SlidePageWrapper>
</template>
<script setup>
import { onMounted } from 'vue'

// Chart.js のインポート（Nuxt4では直接利用可能。グローバル登録済み想定。インポートパスは環境に合わせて調整）
import Chart from 'chart.js/auto'

onMounted(() => {
  const canvas = document.getElementById('resourceShiftChart')
  if (!canvas) return
  // 高解像度対応
  canvas.width = 340
  canvas.height = 340

  const ctx = canvas.getContext('2d')
  if (!ctx) return

  // チャートのインスタンス生成
  new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ['Run (定型/運営)', 'Grow (成長/改善)', 'Transform (変革)'],
      datasets: [
        {
          label: 'Before (現在)',
          data: [70, 20, 10],
          backgroundColor: [
            'rgba(148, 163, 184, 0.3)', // Run - Gray
            'rgba(59, 130, 246, 0.3)',  // Grow - Light Blue
            'rgba(37, 99, 235, 0.3)'    // Transform - Blue
          ],
          borderColor: '#1e293b',
          borderWidth: 2,
          weight: 0.8 // 外側リング
        },
        {
          label: 'After (AI導入後)',
          data: [30, 40, 30],
          backgroundColor: [
            'rgba(148, 163, 184, 0.8)', // Run - Gray
            'rgba(59, 130, 246, 0.8)',  // Grow - Light Blue
            'rgba(37, 99, 235, 0.8)'    // Transform - Blue
          ],
          borderColor: '#1e293b',
          borderWidth: 2,
          weight: 1.2 // 内側リング
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      cutout: '40%',
      plugins: {
        legend: {
          position: 'bottom',
          labels: {
            color: '#e2e8f0',
            font: {
              family: "'Noto Sans JP', sans-serif",
              size: 12
            },
            padding: 20
          }
        },
        title: {
          display: true,
          text: '内側: After / 外側: Before',
          color: '#94a3b8',
          font: {
            size: 12,
            weight: 'normal'
          },
          padding: {
            bottom: 10
          }
        },
        tooltip: {
          backgroundColor: 'rgba(15, 23, 42, 0.9)',
          titleColor: '#e2e8f0',
          bodyColor: '#e2e8f0',
          borderColor: 'rgba(59, 130, 246, 0.3)',
          borderWidth: 1,
          callbacks: {
            label: function(context) {
              return context.label + ': ' + context.raw + '%'
            }
          }
        }
      }
    }
  })
})
</script>
<style scoped>
body {
    margin: 0;
    padding: 0;
    font-family: 'Noto Sans JP', sans-serif;
    background-color: #000000;
    color: #ffffff;
    overflow: hidden;
}

.slide-container {
    width: 1280px;
    height: 720px;
    display: flex;
    flex-direction: column;
    position: relative;
    background: #0a0a0a;
    overflow: hidden;
}

.bg-pattern {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 0;
    background-color: #0a0a0a;
    background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%233b82f6' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}

.header {
    padding: 25px 60px 10px;
    z-index: 10;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid rgba(59, 130, 246, 0.3);
}

.header-title {
    font-size: 28px;
    font-weight: 700;
    color: #94a3b8;
    letter-spacing: 0.5px;
    display: flex;
    align-items: center;
}

.header-title::before {
    content: "15-3";
    display: inline-block;
    background-color: #3b82f6;
    color: white;
    font-size: 16px;
    padding: 2px 10px;
    border-radius: 4px;
    margin-right: 15px;
}

.main-content {
    flex: 1;
    display: flex;
    padding: 40px 60px;
    gap: 40px;
    z-index: 10;
    align-items: stretch;
}

.left-panel {
    flex: 2;
    display: flex;
    flex-direction: column;
    gap: 25px;
}

.right-panel {
    flex: 3;
    display: flex;
    flex-direction: column;
}

.chart-container {
    background-color: rgba(30, 41, 59, 0.4);
    border-radius: 16px;
    border: 1px solid rgba(71, 85, 105, 0.5);
    padding: 25px;
    flex: 1;
    position: relative;
    display: flex;
    flex-direction: column;
}

.chart-title {
    font-size: 18px;
    font-weight: 700;
    color: #e2e8f0;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
}

.chart-title i {
    color: #3b82f6;
    margin-right: 10px;
}

.canvas-wrapper {
    flex: 1;
    position: relative;
    min-height: 300px;
}

.concept-card {
    background-color: rgba(30, 41, 59, 0.4);
    border-left: 4px solid #ef4444;
    /* Red for warning/problem */
    padding: 20px;
    border-radius: 0 12px 12px 0;
    display: flex;
    flex-direction: column;
}

.concept-card.solution {
    border-left-color: #3b82f6;
    /* Blue for solution */
    margin-top: 20px;
}

.concept-label {
    font-size: 14px;
    color: #94a3b8;
    margin-bottom: 8px;
    font-weight: 500;
    display: flex;
    align-items: center;
}

.concept-title {
    font-size: 20px;
    font-weight: 700;
    color: #fff;
    margin-bottom: 10px;
}

.concept-text {
    font-size: 15px;
    color: #cbd5e1;
    line-height: 1.6;
}

.implication-box {
    margin-top: auto;
    background-color: rgba(59, 130, 246, 0.15);
    border: 1px solid rgba(59, 130, 246, 0.3);
    border-radius: 12px;
    padding: 20px;
    display: flex;
    align-items: flex-start;
}

.implication-icon {
    color: #60a5fa;
    font-size: 24px;
    margin-right: 15px;
    margin-top: 2px;
}

.implication-text {
    font-size: 16px;
    color: #e2e8f0;
    line-height: 1.6;
}

.footer {
    position: absolute;
    bottom: 20px;
    right: 30px;
    font-size: 12px;
    color: #475569;
}
</style>