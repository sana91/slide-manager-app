<template>
  <SlidePageWrapper slide-id="486594458303" page-title="" :current-page="17" :total-pages="23">
<div class="slide-container">
    <!-- Header -->
    <div class="header-area">
        <div class="flex items-center"><span class="section-tag mr-4">CHAPTER 12</span>
            <h2 class="text-xl font-bold text-white">SaaSからエージェント時代への転換</h2>
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
            </svg><canvas height="600" id="transformationCanvas" width="680"></canvas></div><!-- Right Panel: Detailed Points -->
        <div class="right-panel">
            <h3 class="text-2xl font-bold text-white mb-6 pb-2 border-b border-gray-700"><span class="k-logo mr-3">Klarna.</span>の衝撃的成果 </h3><!-- Point 1 -->
            <div class="point-card" style="border-left-color: #f472b6;">
                <div class="point-title"><span>大規模な効率化</span><i class="fas fa-bolt text-pink-400"></i></div>
                <div class="stat-row"><span class="stat-value text-pink-400">700</span><span class="stat-label">人の人員削減（Salesforce/Workday廃止）</span></div>
                <p class="point-desc mt-2"> SaaSへの依存を減らし、独自AIと内製ツールへ移行することで劇的なコスト削減を実現。 </p>
            </div><!-- Point 2 -->
            <div class="point-card" style="border-left-color: #3b82f6;">
                <div class="point-title"><span>顧客対応の革命</span><i class="fas fa-headset text-blue-400"></i></div>
                <div class="stat-row"><span class="stat-value text-blue-400">2/3</span><span class="stat-label">の問い合わせをAIが処理</span></div>
                <div class="stat-row"><span class="stat-value text-blue-400">80%</span><span class="stat-label">短縮（対応時間 11分 → 2分）</span></div>
            </div><!-- Point 3 -->
            <div class="point-card" style="border-left-color: #10b981;">
                <div class="point-title"><span>生産性の向上</span><i class="fas fa-chart-line text-green-400"></i></div>
                <p class="point-desc"> 従業員1人当たりの収益が飛躍的に向上。AIエージェントが「業務を自走」する体制へ。 </p>
            </div>
            <div class="quote-box"><i class="fas fa-quote-left mr-2"></i> 「アプリの概念自体がエージェントの時代に崩壊する」 <div class="text-right text-xs mt-1 text-gray-400">- サティア・ナデラ (Microsoft CEO)</div>
            </div>
        </div>
    </div>
</div>
  </SlidePageWrapper>
</template>
<script setup>
import { onMounted } from 'vue';

onMounted(() => {
  const canvas = document.getElementById('transformationCanvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  const centerX = canvas.width / 2;
  const centerY = canvas.height / 2;
  // Colors
  const colorSaaS = '#4b5563';
  const colorAgent = '#3b82f6';

  // Draw BEFORE (SaaS Era) - Left Top
  const beforeX = centerX - 150;
  const beforeY = centerY - 100;

  drawEraCircle(ctx, beforeX, beforeY, 90, colorSaaS, 'SaaS Era', 'アプリの集合体');

  // Draw many small squares inside (fragmented apps)
  for(let i=0; i<8; i++) {
    const angle = (i / 8) * Math.PI * 2;
    const r = 50;
    const sx = beforeX + Math.cos(angle) * r;
    const sy = beforeY + Math.sin(angle) * r;
    drawIconRect(ctx, sx, sy, 24, '#9ca3af');
  }

  // Draw AFTER (Agent Era) - Right Bottom
  const afterX = centerX + 120;
  const afterY = centerY + 80;

  // Glow effect
  const grad = ctx.createRadialGradient(afterX, afterY, 0, afterX, afterY, 150);
  grad.addColorStop(0, 'rgba(59, 130, 246, 0.3)');
  grad.addColorStop(1, 'rgba(0,0,0,0)');
  ctx.fillStyle = grad;
  ctx.fillRect(afterX-150, afterY-150, 300, 300);

  drawEraCircle(ctx, afterX, afterY, 110, colorAgent, 'Agent Era', '自律的統合');

  // Draw Central Brain/Core
  ctx.beginPath();
  ctx.arc(afterX, afterY, 30, 0, Math.PI*2);
  ctx.fillStyle = '#fff';
  ctx.fill();
  ctx.shadowColor = '#3b82f6';
  ctx.shadowBlur = 20;
  ctx.fill();
  ctx.shadowBlur = 0;

  // Draw orbiting nodes (connected)
  for(let i=0; i<6; i++) {
    const angle = (i / 6) * Math.PI * 2;
    const r = 70;
    const nx = afterX + Math.cos(angle) * r;
    const ny = afterY + Math.sin(angle) * r;

    // Line to center
    ctx.beginPath();
    ctx.moveTo(afterX, afterY);
    ctx.lineTo(nx, ny);
    ctx.strokeStyle = 'rgba(59, 130, 246, 0.6)';
    ctx.lineWidth = 2;
    ctx.stroke();

    drawNode(ctx, nx, ny, 8, '#60a5fa');
  }
  // Draw Arrow connecting Eras
  drawArrow(ctx, beforeX + 60, beforeY + 60, afterX - 80, afterY - 60);

  // Label for Transformation
  ctx.font = "bold 16px 'Noto Sans JP'";
  ctx.fillStyle = '#fff';
  ctx.textAlign = 'center';
  ctx.fillText('パラダイムシフト', centerX, centerY);

  ctx.font = "12px 'Noto Sans JP'";
  ctx.fillStyle = '#94a3b8';
  ctx.fillText('断片化 → 統合・自律化', centerX, centerY + 20);
});

// Utility functions
function drawEraCircle(ctx, x, y, r, color, title, subtitle) {
  ctx.beginPath();
  ctx.arc(x, y, r, 0, Math.PI * 2);
  ctx.strokeStyle = color;
  ctx.lineWidth = 2;
  ctx.setLineDash([5, 3]);
  ctx.stroke();
  ctx.setLineDash([]);

  ctx.fillStyle = color;
  ctx.font = "bold 18px 'Noto Sans JP'";
  ctx.textAlign = 'center';
  ctx.fillText(title, x, y - r - 15);

  ctx.fillStyle = '#9ca3af';
  ctx.font = "12px 'Noto Sans JP'";
  ctx.fillText(subtitle, x, y - r + 5);
}

function drawIconRect(ctx, x, y, size, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x - size/2, y - size/2, size, size);
}

function drawNode(ctx, x, y, r, color) {
  ctx.beginPath();
  ctx.arc(x, y, r, 0, Math.PI * 2);
  ctx.fillStyle = color;
  ctx.fill();
}

function drawArrow(ctx, x1, y1, x2, y2) {
  const headlen = 15;
  const dx = x2 - x1;
  const dy = y2 - y1;
  const angle = Math.atan2(dy, dx);

  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.strokeStyle = '#fff';
  ctx.lineWidth = 3;
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(x2, y2);
  ctx.lineTo(x2 - headlen * Math.cos(angle - Math.PI / 6), y2 - headlen * Math.sin(angle - Math.PI / 6));
  ctx.lineTo(x2 - headlen * Math.cos(angle + Math.PI / 6), y2 - headlen * Math.sin(angle + Math.PI / 6));
  ctx.fillStyle = '#fff';
  ctx.fill();
}
</script>

<style scoped>
body {      font-family: 'Noto Sans JP', sans-serif;      background-color: #000000;      color: #f8fafc;      margin: 0;      padding: 0;      overflow: hidden;    }    .slide-container {      width: 1280px;      height: 720px;      position: relative;      display: flex;      flex-direction: column;      background-color: #050505;      overflow: hidden;    }        /* Header Area */    .header-area {      height: 80px;      padding: 0 40px;      display: flex;      align-items: center;      justify-content: space-between;      border-bottom: 1px solid #1f2937;      background-color: #0a0a0a;    }        .section-tag {      background-color: #1e3a8a;      color: #bfdbfe;      padding: 4px 12px;      border-radius: 4px;      font-size: 0.8rem;      font-weight: 700;      letter-spacing: 0.05em;    }        /* Main Content Area */    .content-area {      flex: 1;      display: flex;      padding: 0;      overflow: hidden;    }        /* Left Panel (Diagram) */    .left-panel {      width: 55%;      position: relative;      background-color: #050505;      display: flex;      justify-content: center;      align-items: center;      padding: 20px;    }        /* Right Panel (Points) */    .right-panel {      width: 45%;      padding: 40px;      background-color: #0f0f0f;      border-left: 1px solid #333;      display: flex;      flex-direction: column;      justify-content: center;    }        /* Canvas Overlay for Grid */    .bg-grid {      position: absolute;      top: 0;      left: 0;      width: 100%;      height: 100%;      z-index: 0;      opacity: 0.05;      pointer-events: none;    }        /* Points Styling */    .point-card {      background-color: #1a1a1a;      border-left: 4px solid #3b82f6;      padding: 20px 25px;      margin-bottom: 20px;      border-radius: 0 4px 4px 0;      transition: transform 0.2s;    }        .point-title {      color: #60a5fa;      font-weight: 700;      font-size: 1.2rem;      margin-bottom: 8px;      display: flex;      align-items: center;      justify-content: space-between;    }        .point-desc {      color: #d1d5db;      font-size: 0.95rem;      line-height: 1.6;    }    .stat-row {      display: flex;      align-items: baseline;      margin-top: 8px;    }    .stat-value {      font-size: 2rem;      font-weight: 900;      color: #fff;      margin-right: 10px;      line-height: 1;    }    .stat-label {      font-size: 0.9rem;      color: #94a3b8;    }        .k-logo {      background-color: #FFB3C7; /* Klarna Pink */      color: #000;      font-weight: 900;      padding: 2px 8px;      border-radius: 4px;      font-size: 0.9rem;    }    .quote-box {      background-color: rgba(59, 130, 246, 0.1);      border: 1px solid rgba(59, 130, 246, 0.3);      padding: 15px;      border-radius: 8px;      margin-top: 20px;      font-style: italic;      color: #93c5fd;      font-size: 0.9rem;    }
</style>
