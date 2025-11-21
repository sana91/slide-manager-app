<template>
  <SlidePageWrapper slide-id="486594458303" page-title="" :current-page="6" :total-pages="23">
<div class="slide-container">
    <!-- Header -->
    <div class="header-area">
        <div class="flex items-center"><span class="section-tag mr-4">CHAPTER 10</span>
            <h2 class="text-xl font-bold text-white">SoIの5段階分析レベル</h2>
        </div>
        <div class="text-gray-500 text-sm font-light">AIエージェント 人類と協働する機械</div>
    </div><!-- Main Content -->
    <div class="content-area">
        <!-- Left Panel: Canvas Visualization -->
        <div class="left-panel">
            <!-- SVG Grid Pattern --><svg class="bg-grid" height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <pattern height="20" id="grid-small" patternunits="userSpaceOnUse" width="20">
                        <path d="M 20 0 L 0 0 0 20" fill="none" stroke="white" stroke-width="0.5"></path>
                    </pattern>
                </defs>
                <rect fill="url(#grid-small)" height="100%" width="100%"></rect>
            </svg><canvas height="600" id="analysisCanvas" width="500"></canvas></div><!-- Right Panel: Detailed Points -->
        <div class="right-panel">
            <h3 class="text-2xl font-bold text-white mb-4 pb-2 border-b border-gray-700"><span class="text-blue-500">分析価値</span>の階層 </h3><!-- Level 1: Descriptive -->
            <div class="point-card" style="border-left-color: #4b5563;">
                <div class="point-header"><span class="point-title text-gray-400">1. 記述的分析 (Descriptive)</span><span class="level-badge" style="background-color: #374151; color: #9ca3af;">過去</span></div>
                <p class="point-desc">「何が起こったのか？」過去の事象を正確に把握・集計する段階。BIツールの基本機能。</p>
            </div><!-- Level 2: Diagnostic -->
            <div class="point-card" style="border-left-color: #6b7280;">
                <div class="point-header"><span class="point-title text-gray-300">2. 診断的分析 (Diagnostic)</span><span class="level-badge" style="background-color: #4b5563; color: #d1d5db;">原因</span></div>
                <p class="point-desc">「なぜ起こったのか？」ドリルダウンや相関分析により、事象の要因や背景を特定する。</p>
            </div><!-- Level 3: Predictive -->
            <div class="point-card" style="border-left-color: #60a5fa;">
                <div class="point-header"><span class="point-title">3. 予測的分析 (Predictive)</span><span class="level-badge" style="background-color: #1e40af; color: #bfdbfe;">未来</span></div>
                <p class="point-desc">「何が起こりそうか？」統計モデルや機械学習を用い、将来の傾向や数値を予測する。</p>
            </div><!-- Level 4: Prescriptive -->
            <div class="point-card" style="border-left-color: #3b82f6;">
                <div class="point-header"><span class="point-title">4. 処方的分析 (Prescriptive)</span><span class="level-badge">行動</span></div>
                <p class="point-desc">「何をすべきか？」予測に基づき、最適なアクションや意思決定の選択肢を提示する。</p>
            </div><!-- Level 5: Cognitive -->
            <div class="point-card" style="border-left-color: #2563eb; background-color: #1e293b;">
                <div class="point-header"><span class="point-title text-blue-300">5. 認知的分析 (Cognitive)</span><span class="level-badge bg-blue-600 text-white">自律</span></div>
                <p class="point-desc text-white">「自律的に理解し提案する」AIが非構造化データを含めて文脈を理解し、高度な判断を支援。</p>
            </div>
        </div>
    </div>
</div>
    </SlidePageWrapper>
</template>

<script setup>
// Nuxt4/Composition API に対応したCanvas描画ロジック
import { onMounted } from 'vue';

onMounted(() => {
  const canvas = document.getElementById('analysisCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  // キャンバスクリア
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const centerX = canvas.width / 2;
  const bottomY = 550;
  const levelHeight = 80;
  const baseWidth = 400;
  const widthStep = 60; // 各レベル毎の幅の減少値

  // レベルごとの色設定（下→上）
  const levelColors = [
    { bg: '#1f2937', border: '#374151', text: '#9ca3af' }, // Descriptive
    { bg: '#374151', border: '#4b5563', text: '#d1d5db' }, // Diagnostic
    { bg: '#1e3a8a', border: '#3b82f6', text: '#bfdbfe' }, // Predictive
    { bg: '#1e40af', border: '#60a5fa', text: '#dbeafe' }, // Prescriptive
    { bg: '#2563eb', border: '#93c5fd', text: '#ffffff', glow: true }  // Cognitive
  ];
  const labels = [
    "記述的 (Descriptive)",
    "診断的 (Diagnostic)",
    "予測的 (Predictive)",
    "処方的 (Prescriptive)",
    "認知的 (Cognitive)"
  ];
  const icons = [
    "📊", // Chart
    "🔍", // Mag glass
    "📈", // Trend
    "💊", // Rx/Action
    "🧠"  // Brain
  ];

  // ピラミッド各階層の描画
  for (let i = 0; i < 5; i++) {
    const y = bottomY - (i * levelHeight);
    const w = baseWidth - (i * widthStep);
    const x = centerX - w / 2;

    // 台形
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + w, y);
    // 上辺はさらに狭い
    const nextW = baseWidth - ((i + 1) * widthStep);
    const nextX = centerX - nextW / 2;
    ctx.lineTo(nextX + nextW, y - levelHeight + 5); // +5で少し隙間
    ctx.lineTo(nextX, y - levelHeight + 5);
    ctx.closePath();

    // スタイル
    const style = levelColors[i];

    // 最上階層は光らせる
    if (style.glow) {
      ctx.shadowColor = 'rgba(59, 130, 246, 0.8)';
      ctx.shadowBlur = 20;
    } else {
      ctx.shadowColor = 'transparent';
      ctx.shadowBlur = 0;
    }
    ctx.fillStyle = style.bg;
    ctx.fill();
    ctx.lineWidth = 2;
    ctx.strokeStyle = style.border;
    ctx.stroke();

    // テキスト
    ctx.shadowColor = 'transparent'; // テキストには影なし
    ctx.fillStyle = style.text;
    ctx.font = "bold 16px 'Noto Sans JP'";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    // 絵文字+ラベル
    const centerY = y - levelHeight / 2 + 2;
    ctx.fillText(icons[i] + " " + labels[i], centerX, centerY);

    // 価値・難易度矢印（最下段のみ）
    if (i === 0) {
      // ベースの矢印
      ctx.beginPath();
      ctx.moveTo(centerX + baseWidth/2 + 40, bottomY);
      ctx.lineTo(centerX + baseWidth/2 + 40, bottomY - (5 * levelHeight));
      ctx.strokeStyle = '#4b5563';
      ctx.lineWidth = 2;
      ctx.stroke();

      // 矢印ヘッド
      ctx.beginPath();
      ctx.moveTo(centerX + baseWidth/2 + 35, bottomY - (5 * levelHeight) + 10);
      ctx.lineTo(centerX + baseWidth/2 + 40, bottomY - (5 * levelHeight));
      ctx.lineTo(centerX + baseWidth/2 + 45, bottomY - (5 * levelHeight) + 10);
      ctx.stroke();

      // 矢印ラベル
      ctx.save();
      ctx.translate(centerX + baseWidth/2 + 65, bottomY - (2.5 * levelHeight));
      ctx.rotate(-Math.PI / 2);
      ctx.fillStyle = '#9ca3af';
      ctx.font = "14px 'Noto Sans JP'";
      ctx.fillText("価値と難易度の上昇", 0, 0);
      ctx.restore();
    }
  }
});
</script>

<style scoped>
body {      font-family: 'Noto Sans JP', sans-serif;      background-color: #000000;      color: #f8fafc;      margin: 0;      padding: 0;      overflow: hidden;    }    .slide-container {      width: 1280px;      min-height: 720px;      position: relative;      display: flex;      flex-direction: column;      background-color: #050505;      overflow: hidden;    }        /* Header Area */    .header-area {      height: 80px;      padding: 0 40px;      display: flex;      align-items: center;      justify-content: space-between;      border-bottom: 1px solid #1f2937;      background-color: #0a0a0a;    }        .section-tag {      background-color: #1e3a8a;      color: #bfdbfe;      padding: 4px 12px;      border-radius: 4px;      font-size: 0.8rem;      font-weight: 700;      letter-spacing: 0.05em;    }        /* Main Content Area */    .content-area {      flex: 1;      display: flex;      padding: 0;      overflow: hidden;    }        /* Left Panel (Diagram) */    .left-panel {      width: 45%;      position: relative;      background-color: #050505;      display: flex;      justify-content: center;      align-items: center;      padding: 20px;    }        /* Right Panel (Points) */    .right-panel {      width: 55%;      padding: 30px 40px;      background-color: #0f0f0f;      border-left: 1px solid #333;      display: flex;      flex-direction: column;      justify-content: center;    }        /* Canvas Overlay for Grid */    .bg-grid {      position: absolute;      top: 0;      left: 0;      width: 100%;      height: 100%;      z-index: 0;      opacity: 0.05;      pointer-events: none;    }        /* Canvas for Diagram */    #analysisCanvas {      z-index: 10;    }    /* Points Styling */    .point-card {      background-color: #1a1a1a;      border-left: 4px solid #3b82f6;      padding: 12px 18px;      margin-bottom: 12px;      border-radius: 0 4px 4px 0;      transition: transform 0.2s;      display: flex;      flex-direction: column;    }        .point-header {      display: flex;      align-items: center;      margin-bottom: 4px;      justify-content: space-between;    }    .point-title {      color: #60a5fa;      font-weight: 700;      font-size: 1.05rem;    }        .point-desc {      color: #d1d5db;      font-size: 0.85rem;      line-height: 1.5;    }        .level-badge {      font-size: 0.7rem;      padding: 2px 8px;      border-radius: 10px;      background-color: #1e3a8a;      color: #93c5fd;      font-weight: bold;    }    .highlight-text {      color: #3b82f6;      font-weight: bold;    }
</style>
