<template>
    <SlidePageWrapper slide-id="486594458302" page-title="" :current-page="11" :total-pages="22">
        <div class="slide-container">
            <div class="header">
                <div class="header-accent"></div><span class="chapter-badge">第7章</span>
                <h2 class="header-title">人と半導体の価値転換</h2>
            </div>
            <div class="main-content">
                <!-- Left Column -->
                <div class="left-col">
                    <div class="slide-title-box">
                        <div class="title-accent"></div>
                        <h1 class="slide-title">RGTフレームと<br />働き方改革</h1>
                        <p class="slide-subtitle">運営から変革への人材再配置</p>
                    </div>
                    <div class="visual-area"><i class="fas fa-layer-group visual-bg-icon"></i>
                        <div style="display: flex; flex-direction: column; align-items: center; gap: 15px; z-index: 2; width: 80%;">
                            <div style="background: #1e40af; padding: 15px; border-radius: 8px; width: 100%; text-align: center; font-weight: bold;">Transform (変革)</div>
                            <div style="background: #1d4ed8; padding: 15px; border-radius: 8px; width: 100%; text-align: center; font-weight: bold;">Grow (改善)</div>
                            <div style="background: #2563eb; padding: 15px; border-radius: 8px; width: 100%; text-align: center; font-weight: bold; opacity: 0.7;">Run (運営)</div><i class="fas fa-arrow-up text-white text-2xl mt-2"></i>
                            <p style="font-size: 14px; color: #94a3b8;">AIによる比重シフト</p>
                        </div>
                    </div>
                </div><!-- Right Column -->
                <div class="right-col">
                    <!-- Card 1: RGT Framework -->
                    <div class="content-card">
                        <div class="card-header"><i class="fas fa-chart-pie card-icon"></i>
                            <p class="card-title">RGTフレームワークによる人材再配置</p>
                        </div>
                        <div class="card-text">
                            <p>企業活動をRun（運営）、Grow（改善）、Transform（変革）に分類。多くの日本企業がリソースの70〜80%をRunに費やしてきましたが、AI自動化によりこの構造が劇的に変化します。</p>
                            <div class="rgt-container">
                                <div class="rgt-box">
                                    <p class="rgt-label">Run (運営)</p>
                                    <p class="rgt-value">AIで自動化</p><i class="fas fa-arrow-right arrow-icon"></i>
                                </div>
                                <div class="rgt-box active">
                                    <p class="rgt-label">Grow (改善)</p>
                                    <p class="rgt-value">人とAI協働</p><i class="fas fa-arrow-right arrow-icon"></i>
                                </div>
                                <div class="rgt-box active">
                                    <p class="rgt-label">Transform</p>
                                    <p class="rgt-value">人の創造性</p>
                                </div>
                            </div>
                        </div>
                    </div><!-- Data Highlight -->
                    <div class="data-highlight-box">
                        <div class="data-item">
                            <p class="data-label">従来のRun業務比率</p>
                            <p class="data-value">70-80<span style="font-size: 18px;">%</span></p>
                            <p class="data-sub">定型業務・維持管理</p>
                        </div>
                        <div class="data-item"><i class="fas fa-arrow-right text-blue-400 text-2xl"></i></div>
                        <div class="data-item">
                            <p class="data-label">AI導入後の変化</p>
                            <p class="data-value">大幅<span style="font-size: 18px;">削減</span></p>
                            <p class="data-sub">コスト1/60・時間短縮</p>
                        </div>
                    </div><!-- Card 2: Real Cause of Work Style Reform -->
                    <div class="content-card">
                        <div class="card-header"><i class="fas fa-briefcase card-icon"></i>
                            <p class="card-title">働き方改革の「真因」</p>
                        </div>
                        <div class="card-text">
                            <p>働き方改革の本質は、技術進化による個人のエンパワーメントです。AIとソフトウェアにより1人で生み出せる価値が増大し、組織は管理型から自律型へと進化を迫られています。</p>
                            <ul class="list-disc list-inside mt-2 space-y-1 text-gray-300 text-base pl-2">
                                <li><strong class="text-white">組織構造：</strong>ヒエラルキー型 → フラット・ネットワーク型</li>
                                <li><strong class="text-white">マネジメント：</strong>管理・監視 → 権限委譲・OKR</li>
                                <li><strong class="text-white">人事制度：</strong>メンバーシップ型 → ジョブ型・成果重視</li>
                            </ul>
                        </div>
                    </div><!-- Insight Box -->
                    <div class="insight-box">
                        <div class="insight-icon-box"><i class="fas fa-lightbulb text-white text-lg"></i></div>
                        <div class="insight-content">
                            <p class="insight-label">KEY INSIGHT</p>
                            <p class="insight-text"> 「AIに仕事を奪われる」のではなく、「Run業務から解放され、Grow/Transformという本来人間が担うべき創造的領域へシフトする」ことが、これからの生産性向上の鍵です。 </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="footer">
                <p>AIエージェント 人類と協働する機械 - 第2部要約</p>
                <p>Page 11</p>
            </div>
        </div>
    </SlidePageWrapper>
</template>
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
    height: 100px;
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
    padding: 6px 16px;
    border-radius: 20px;
    font-size: 16px;
    margin-right: 20px;
}

.header-title {
    font-size: 28px;
    font-weight: 700;
    color: #f8fafc;
}

/* Main Content */
.main-content {
    flex: 1;
    display: flex;
    padding: 40px 60px;
    gap: 50px;
}

/* Left Column: Title & Icon */
.left-col {
    width: 380px;
    display: flex;
    flex-direction: column;
}

.slide-title-box {
    margin-bottom: 40px;
    position: relative;
}

.title-accent {
    width: 60px;
    height: 6px;
    background-color: #3b82f6;
    margin-bottom: 20px;
}

.slide-title {
    font-size: 42px;
    font-weight: 900;
    line-height: 1.3;
    color: #ffffff;
    margin-bottom: 10px;
}

.slide-subtitle {
    font-size: 22px;
    color: #94a3b8;
    font-weight: 500;
}

.visual-area {
    flex: 1;
    background-color: #1e293b;
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
    border: 1px solid #334155;
}

.visual-icon {
    font-size: 100px;
    color: #3b82f6;
    opacity: 0.9;
    z-index: 2;
    position: relative;
}

.visual-bg-icon {
    position: absolute;
    font-size: 250px;
    color: #0f172a;
    opacity: 0.5;
    transform: rotate(-15deg);
    right: -50px;
    bottom: -50px;
    z-index: 1;
}

/* Right Column: Content Cards */
.right-col {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.content-card {
    background-color: #1e293b;
    border-left: 4px solid #3b82f6;
    border-radius: 0 8px 8px 0;
    padding: 20px 30px;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

.card-header {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    gap: 12px;
}

.card-icon {
    color: #60a5fa;
    font-size: 20px;
}

.card-title {
    font-size: 22px;
    font-weight: 700;
    color: #e2e8f0;
}

.card-text {
    font-size: 18px;
    color: #cbd5e1;
    line-height: 1.6;
}

/* RGT Model Visualization */
.rgt-container {
    display: flex;
    gap: 15px;
    margin-top: 5px;
}

.rgt-box {
    flex: 1;
    background-color: #0f172a;
    border: 1px solid #334155;
    border-radius: 8px;
    padding: 12px;
    text-align: center;
    position: relative;
}

.rgt-box.active {
    border-color: #3b82f6;
    background-color: rgba(59, 130, 246, 0.1);
}

.rgt-label {
    font-size: 14px;
    font-weight: 700;
    color: #94a3b8;
    margin-bottom: 4px;
}

.rgt-value {
    font-size: 18px;
    font-weight: 900;
    color: #f8fafc;
}

.arrow-icon {
    position: absolute;
    top: 50%;
    right: -12px;
    transform: translateY(-50%);
    color: #3b82f6;
    z-index: 5;
}

/* Data Highlight Box */
.data-highlight-box {
    background-color: rgba(30, 58, 138, 0.4);
    border: 1px solid rgba(59, 130, 246, 0.4);
    border-radius: 12px;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
}

.data-item {
    flex: 1;
    text-align: center;
}

.data-label {
    font-size: 14px;
    color: #94a3b8;
    margin-bottom: 4px;
    font-weight: 700;
}

.data-value {
    font-size: 28px;
    font-weight: 900;
    color: #ffffff;
}

.data-sub {
    font-size: 14px;
    color: #60a5fa;
    margin-top: 2px;
}

/* Bottom Insight */
.insight-box {
    margin-top: auto;
    background-color: #172554;
    border-radius: 12px;
    padding: 15px 25px;
    display: flex;
    align-items: flex-start;
    gap: 15px;
}

.insight-icon-box {
    background-color: #3b82f6;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
}

.insight-content {
    flex: 1;
}

.insight-label {
    font-size: 13px;
    font-weight: 700;
    color: #60a5fa;
    margin-bottom: 3px;
}

.insight-text {
    font-size: 16px;
    color: #f1f5f9;
    font-weight: 500;
    line-height: 1.5;
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