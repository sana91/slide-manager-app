<template>
    <SlidePageWrapper slide-id="486594458302" page-title="" :current-page="10" :total-pages="22">
        <div class="slide-container">
            <div class="header">
                <div class="header-accent"></div><span class="chapter-badge">第7章</span>
                <h2 class="header-title">人と半導体の価値転換</h2>
            </div>
            <div class="main-content">
                <div class="content-title-area">
                    <h1 class="content-title">労働力と計算力の価格トレンド</h1>
                    <p class="content-subtitle">「高価になる人間」と「劇的に安くなる計算力」の対比が、組織設計の前提を変えます。</p>
                </div>
                <div class="content-grid">
                    <!-- Left Column: Charts -->
                    <div class="chart-column">
                        <!-- Population Chart -->
                        <div class="chart-card">
                            <div class="chart-title"><i class="fas fa-users text-blue-400"></i> 日本の生産年齢人口の減少 </div>
                            <div style="position: relative; height: 160px; width: 100%;"><canvas id="populationChart"></canvas></div>
                            <div class="mt-2 text-sm text-gray-400 text-center">2020年：7,406万人 → 2040年：5,978万人 (<span class="text-red-400 font-bold">約20%減</span>)</div>
                        </div><!-- Computing Cost Chart -->
                        <div class="chart-card">
                            <div class="chart-title"><i class="fas fa-microchip text-green-400"></i> 計算コストの劇的な低下 </div>
                            <div style="position: relative; height: 160px; width: 100%;"><canvas id="computingChart"></canvas></div>
                            <div class="mt-2 text-sm text-gray-400 text-center">GPU性能/価格は20年で<span class="text-green-400 font-bold">99%以上低下</span></div>
                        </div>
                    </div><!-- Right Column: Data Analysis -->
                    <div class="data-column">
                        <!-- Human Cost Card -->
                        <div class="data-card">
                            <div class="data-card-header"><i class="fas fa-user-tie text-xl text-blue-400"></i>
                                <h3 class="data-card-title">上昇する「人間」のコスト</h3>
                            </div>
                            <div class="cost-item"><span class="cost-label">中途採用コスト (1名平均)</span><span class="cost-value">84万円</span></div>
                            <div class="cost-item"><span class="cost-label">育成コスト</span><span class="cost-value">42万円</span></div>
                            <div class="cost-item"><span class="cost-label">離職による損失</span><span class="cost-alert">年収の200～300%</span></div>
                            <p class="text-xs text-gray-500 mt-2">※ 採用難易度の上昇により、このコストは年々増加傾向にある</p>
                        </div><!-- AI Cost Comparison Card -->
                        <div class="data-card">
                            <div class="data-card-header"><i class="fas fa-robot text-xl text-green-400"></i>
                                <h3 class="data-card-title">圧倒的な「AI」のコストパフォーマンス</h3>
                            </div>
                            <div class="comparison-box">
                                <div class="comparison-item">
                                    <p class="comparison-label">AIサービス (1日)</p>
                                    <p class="comparison-value text-green-400">約 500円</p>
                                </div>
                                <div class="comparison-vs">VS</div>
                                <div class="comparison-item">
                                    <p class="comparison-label">人件費 (1日)</p>
                                    <p class="comparison-value text-blue-400">約 30,000円</p>
                                </div>
                            </div>
                            <div class="comparison-ratio"> コスト比 1 : 60 </div>
                            <p class="text-sm text-gray-300 mt-3 text-center"> AIは24時間365日稼働可能で、疲労も感情の波もない。<br /> 定型業務におけるコスト差は決定的。 </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="footer">
                <p>AIエージェント 人類と協働する機械 - 第2部要約</p>
                <p>Page 10</p>
            </div>
        </div>
    </SlidePageWrapper>
</template>
<script setup>
import { onMounted } from 'vue'
import Chart from 'chart.js/auto'

onMounted(() => {
    // Population Chart
    const popCanvas = document.getElementById('populationChart')
    if (popCanvas) {
        const ctxPop = popCanvas.getContext('2d')
        new Chart(ctxPop, {
            type: 'line',
            data: {
                labels: ['2020', '2025', '2030', '2035', '2040'],
                datasets: [{
                    label: '生産年齢人口 (万人)',
                    data: [7406, 7170, 6875, 6480, 5978],
                    borderColor: '#ef4444',
                    backgroundColor: 'rgba(239, 68, 68, 0.1)',
                    borderWidth: 3,
                    fill: true,
                    tension: 0.4,
                    pointBackgroundColor: '#ef4444'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false },
                    tooltip: {
                        mode: 'index',
                        intersect: false,
                    }
                },
                scales: {
                    y: {
                        min: 5000,
                        max: 8000,
                        grid: { color: '#334155' },
                        ticks: { color: '#94a3b8' }
                    },
                    x: {
                        grid: { display: false },
                        ticks: { color: '#94a3b8' }
                    }
                }
            }
        })
    }

    // Computing Cost Chart (Conceptual)
    const compCanvas = document.getElementById('computingChart')
    if (compCanvas) {
        const ctxComp = compCanvas.getContext('2d')
        new Chart(ctxComp, {
            type: 'line',
            data: {
                labels: ['2004', '2009', '2014', '2019', '2024'],
                datasets: [{
                    label: 'GPU性能/価格 (相対値)',
                    data: [100, 45, 20, 8, 1],
                    borderColor: '#22c55e',
                    backgroundColor: 'rgba(34, 197, 94, 0.1)',
                    borderWidth: 3,
                    fill: true,
                    tension: 0.4,
                    pointBackgroundColor: '#22c55e'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false }
                },
                scales: {
                    y: {
                        display: false,
                        grid: { display: false }
                    },
                    x: {
                        grid: { display: false },
                        ticks: { color: '#94a3b8' }
                    }
                }
            }
        })
    }
})
</script>
<style scoped>
body {
    margin: 0;
    padding: 0;
    width: 1280px;
    min-height: 720px;
    font-family: 'Noto Sans JP', sans-serif;
    background-color: #0f172a;
    color: #ffffff;
}

.slide-container {
    width: 1280px;
    min-height: 720px;
    display: flex;
    flex-direction: column;
    position: relative;
    background-color: #0f172a;
    overflow: hidden;
}

/* Header */
.header {
    height: 80px;
    padding: 0 60px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #1e293b;
    background-color: #0f172a;
    position: relative;
    z-index: 10;
}

.header-accent {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background-color: #3b82f6;
}

.chapter-badge {
    background-color: #1e40af;
    color: #ffffff;
    font-weight: 700;
    padding: 4px 12px;
    border-radius: 20px;
    font-size: 14px;
    margin-right: 15px;
}

.header-title {
    font-size: 24px;
    font-weight: 700;
    color: #f8fafc;
}

/* Main Content */
.main-content {
    flex: 1;
    padding: 30px 60px;
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.content-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 30px;
    flex: 1;
}

/* Left Column - Charts */
.chart-column {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.chart-card {
    background-color: #1e293b;
    border-radius: 12px;
    padding: 15px;
    border: 1px solid #334155;
    flex: 1;
    display: flex;
    flex-direction: column;
}

.chart-title {
    font-size: 16px;
    font-weight: 700;
    color: #94a3b8;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    gap: 8px;
}

/* Right Column - Data & Comparison */
.data-column {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.data-card {
    background-color: #1e293b;
    border-radius: 12px;
    padding: 20px;
    border: 1px solid #334155;
}

.data-card-header {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 15px;
    border-bottom: 1px solid #334155;
    padding-bottom: 10px;
}

.data-card-title {
    font-size: 18px;
    font-weight: 700;
    color: #60a5fa;
}

.cost-item {
    display: flex;
    justify-content: space-between;
    margin-bottom: 12px;
    font-size: 16px;
}

.cost-label {
    color: #cbd5e1;
}

.cost-value {
    font-weight: 700;
    color: #f1f5f9;
}

.cost-alert {
    color: #ef4444;
    font-weight: 700;
}

.comparison-box {
    background-color: rgba(15, 23, 42, 0.6);
    border-radius: 8px;
    padding: 20px;
    margin-top: 10px;
    border: 1px solid #334155;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.comparison-item {
    text-align: center;
    flex: 1;
}

.comparison-label {
    font-size: 14px;
    color: #94a3b8;
    margin-bottom: 5px;
}

.comparison-value {
    font-size: 24px;
    font-weight: 900;
    color: #ffffff;
}

.comparison-vs {
    font-size: 20px;
    font-weight: 900;
    color: #64748b;
    margin: 0 20px;
}

.comparison-ratio {
    margin-top: 15px;
    background-color: #1d4ed8;
    color: white;
    text-align: center;
    padding: 8px;
    border-radius: 6px;
    font-weight: 700;
    font-size: 18px;
}

/* Title Area */
.content-title-area {
    margin-bottom: 5px;
}

.content-title {
    font-size: 32px;
    font-weight: 900;
    color: #ffffff;
    margin-bottom: 8px;
}

.content-subtitle {
    font-size: 18px;
    color: #94a3b8;
}

/* Footer */
.footer {
    height: 50px;
    padding: 0 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
    color: #64748b;
    border-top: 1px solid #1e293b;
}
</style>