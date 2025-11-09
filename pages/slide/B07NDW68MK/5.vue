<template>
  <SlidePageWrapper slide-id="B07NDW68MK" page-title="第1章：著者の実証と伸びの事例" :current-page="5" :total-pages="20">
<div class="slide-container">
    <div class="left-panel">
        <h1 class="text-3xl font-bold mb-6">第1章：著者の実証と伸びの事例</h1>
        <p class="text-lg opacity-80 mt-4">記憶術で劇的に伸びる記憶力</p>
        <div class="brain-pattern"><i class="fas fa-chart-line"></i></div>
    </div>
    <div class="right-panel">
        <div class="bullet-item">
            <div class="bullet-icon"><i class="fas fa-user"></i></div>
            <div class="bullet-text">
                <p class="text-xl font-bold text-blue-800">凡人からの出発点</p>
                <p class="text-lg mt-1">著者は元々記憶力が特別良いわけではなく、ごく一般的なレベルからスタート</p>
            </div>
        </div>
        <div class="chart-container">
          <canvas ref="chartCanvas"></canvas>
        </div>
        <div class="bullet-item">
            <div class="bullet-icon"><i class="fas fa-trophy"></i></div>
            <div class="bullet-text">
                <p class="text-xl font-bold text-blue-800">記憶術習得後の記録</p>
                <p class="text-lg mt-1">記憶術未使用：数十桁が限界 → 習得後：<span class="text-red-600 font-bold">200桁以上</span>を安定記憶</p>
            </div>
        </div>
        <div class="bullet-item">
            <div class="bullet-icon"><i class="fas fa-users"></i></div>
            <div class="bullet-text">
                <p class="text-xl font-bold text-blue-800">誰でも伸びる可能性</p>
                <p class="text-lg mt-1">記憶力競技では小学生から60歳以上まで、全ての年代で記録向上を実現</p>
            </div>
        </div>
        <div class="bullet-item">
            <div class="bullet-icon"><i class="fas fa-graduation-cap"></i></div>
            <div class="bullet-text">
                <p class="text-xl font-bold text-blue-800">実学での成果</p>
                <p class="text-lg mt-1">大学テストで記憶術を使った全科目で最高評価（A+）を獲得した実績</p>
            </div>
        </div>
    </div>
</div>
  </SlidePageWrapper>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import {
  Chart,
  CategoryScale,
  LinearScale,
  BarElement,
  BarController,
  Title,
  Tooltip,
  Legend
} from 'chart.js'

// Chart.jsのコンポーネントを登録
Chart.register(
  CategoryScale,
  LinearScale,
  BarElement,
  BarController,
  Title,
  Tooltip,
  Legend
)

const chartCanvas = ref<HTMLCanvasElement | null>(null)
let chartInstance: Chart | null = null

onMounted(() => {
  if (chartCanvas.value) {
    const ctx = chartCanvas.value.getContext('2d')
    if (ctx) {
      chartInstance = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: [
            '記憶術習得前',
            '1ヶ月後',
            '3ヶ月後',
            '1年後'
          ],
          datasets: [{
            label: '記憶できる数字桁数',
            data: [44, 80, 120, 200],
            backgroundColor: ['#4299e1', '#3182ce', '#2b6cb0', '#1a365d'],
            borderWidth: 0
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: false
            }
          },
          scales: {
            y: {
              beginAtZero: true,
              title: {
                display: true,
                text: '数字桁数'
              }
            }
          }
        }
      })
    }
  }
})

onBeforeUnmount(() => {
  if (chartInstance) {
    chartInstance.destroy()
  }
})
</script>

<style scoped>
body {      font-family: 'Noto Sans JP', sans-serif;      margin: 0;      padding: 0;    }    .slide-container {      width: 1280px;      min-height: 720px;      display: flex;      background-color: white;      color: #1a365d;      overflow: hidden;    }    .left-panel {      width: 30%;      background-color: #1a365d;      color: white;      padding: 40px;      display: flex;      flex-direction: column;      justify-content: center;      position: relative;    }    .right-panel {      width: 70%;      padding: 60px 50px;      display: flex;      flex-direction: column;      justify-content: center;    }    .bullet-item {      display: flex;      align-items: flex-start;      margin-bottom: 25px;    }    .bullet-icon {      font-size: 24px;      margin-right: 15px;      color: #2b6cb0;      flex-shrink: 0;      margin-top: 2px;    }    .bullet-text {      flex: 1;    }    .brain-pattern {      position: absolute;      bottom: 20px;      right: 20px;      font-size: 100px;      opacity: 0.1;    }    .chart-container {      width: 100%;      height: 180px;      margin-top: 20px;      margin-bottom: 20px;    }
</style>

