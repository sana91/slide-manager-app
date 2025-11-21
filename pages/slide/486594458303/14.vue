<template>
  <SlidePageWrapper slide-id="486594458303" page-title="" :current-page="14" :total-pages="23">
<div class="slide-container">
    <!-- Header -->
    <div class="header-area">
        <div class="flex items-center"><span class="section-tag mr-4">CHAPTER 11</span>
            <h2 class="text-xl font-bold text-white">内面化段階のAIエージェント</h2>
        </div>
        <div class="text-gray-500 text-sm font-light">SECIモデルとAIエージェントの統合</div>
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
            </svg><canvas height="600" id="internalizationCanvas" width="680"></canvas></div><!-- Right Panel: Detailed Points -->
        <div class="right-panel">
            <h3 class="text-2xl font-bold text-white mb-6 pb-2 border-b border-gray-700"><span class="text-blue-500">内面化</span> (Internalization) </h3>
            <p class="text-gray-400 mb-6 text-sm"> 形式知を個人の暗黙知として体得するプロセス。実践を通じて知識を身体化し、新たな暗黙知へと還流させる。 </p><!-- Role 1: Practical Support -->
            <div class="point-card">
                <div class="point-title"><i class="fas fa-hands-helping mr-2 text-blue-500"></i> 実践支援とコーチング </div>
                <p class="point-desc"> 現場実行時にリアルタイムでガイダンスを提供。チェックリスト化や標準作業の提示で、形式知の実践を補助。 </p>
            </div><!-- Role 2: KPI Measurement -->
            <div class="point-card">
                <div class="point-title"><i class="fas fa-tachometer-alt mr-2 text-blue-500"></i> KPI計測とフィードバック </div>
                <p class="point-desc"> 行動結果を即座に定量化・可視化。効果測定を自動で行い、改善のためのフィードバックループを回す。 </p>
            </div><!-- Specific Examples -->
            <div class="point-card" style="border-left-color: #60a5fa;">
                <div class="point-title"><i class="fas fa-laptop-code mr-2 text-blue-400"></i> 具体例 </div>
                <ul class="custom-list text-sm mt-2">
                    <li><span class="text-blue-200 font-bold">営業支援AI:</span> 商談中に最適なトークスクリプトを提示</li>
                    <li><span class="text-blue-200 font-bold">コードレビューAI:</span> PR作成時に修正案を即時提示</li>
                    <li><span class="text-blue-200 font-bold">オンボーディング:</span> 新入社員への学習ステップ自動配信</li>
                </ul>
            </div>
        </div>
    </div>
</div>
  </SlidePageWrapper>
</template>
<script setup>
import { onMounted } from 'vue';

onMounted(() => {
  const canvas = document.getElementById('internalizationCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  // Clear canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const centerX = canvas.width / 2;
  const centerY = canvas.height / 2;
  const radius = 180;

  // Colors
  const bluePrimary = '#3b82f6';
  const blueLight = '#93c5fd';
  const blueDark = '#1e3a8a';
  const textWhite = '#ffffff';
  const textGray = '#9ca3af';

  // Draw Loop Circle Path (Dashed)
  ctx.beginPath();
  ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
  ctx.strokeStyle = '#333';
  ctx.lineWidth = 2;
  ctx.setLineDash([10, 10]);
  ctx.stroke();
  ctx.setLineDash([]);

  // Draw Nodes
  const nodes = [
    { angle: -Math.PI/2, label: "形式知", sub: "Explicit Knowledge", icon: "\uf0f6", color: blueLight }, // Top
    { angle: 0, label: "実践・行動", sub: "Action / Practice", icon: "\uf4c4", color: bluePrimary },      // Right
    { angle: Math.PI/2, label: "結果・KPI", sub: "Results", icon: "\uf080", color: bluePrimary },        // Bottom
    { angle: Math.PI, label: "フィードバック", sub: "Feedback", icon: "\uf086", color: bluePrimary }     // Left
  ];

  nodes.forEach(node => {
    const x = centerX + Math.cos(node.angle) * radius;
    const y = centerY + Math.sin(node.angle) * radius;

    // Node Circle
    ctx.beginPath();
    ctx.arc(x, y, 45, 0, Math.PI * 2);
    ctx.fillStyle = '#111';
    ctx.fill();
    ctx.lineWidth = 3;
    ctx.strokeStyle = node.color;
    ctx.stroke();

    // Icon (FontAwesome)
    ctx.fillStyle = node.color;
    ctx.font = "900 24px 'Font Awesome 6 Free'";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(node.icon, x, y - 10);

    // Label
    ctx.fillStyle = textWhite;
    ctx.font = "bold 14px 'Noto Sans JP'";
    ctx.fillText(node.label, x, y + 15);

    // Sub Label
    ctx.fillStyle = textGray;
    ctx.font = "10px 'Noto Sans JP'";
    ctx.fillText(node.sub, x, y + 30);
  });

  // Draw Connecting Arrows (Curved)
  ctx.save();
  nodes.forEach((node, i) => {
    const nextNode = nodes[(i + 1) % nodes.length];
    const startAngle = node.angle;
    const endAngle = nextNode.angle;

    // Draw arc segment
    ctx.beginPath();
    // Slightly offset from node centers
    const offset = 0.3;
    ctx.arc(centerX, centerY, radius, startAngle + offset, endAngle - offset);
    ctx.strokeStyle = bluePrimary;
    ctx.lineWidth = 4;
    ctx.stroke();

    // Arrowhead
    const arrowAngle = endAngle - offset;
    const arrowX = centerX + Math.cos(arrowAngle) * radius;
    const arrowY = centerY + Math.sin(arrowAngle) * radius;

    ctx.save();
    ctx.translate(arrowX, arrowY);
    ctx.rotate(arrowAngle + Math.PI/2);

    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(-8, -12);
    ctx.lineTo(8, -12);
    ctx.closePath();
    ctx.fillStyle = bluePrimary;
    ctx.fill();

    ctx.restore();
  });
  ctx.restore();

  // Center Element: "内面化"
  ctx.beginPath();
  ctx.arc(centerX, centerY, 70, 0, Math.PI * 2);

  // Gradient for center
  const grad = ctx.createRadialGradient(centerX, centerY, 10, centerX, centerY, 70);
  grad.addColorStop(0, '#1e40af');
  grad.addColorStop(1, '#1e3a8a');
  ctx.fillStyle = grad;
  ctx.fill();

  ctx.lineWidth = 0;
  ctx.stroke();
  ctx.fillStyle = textWhite;
  ctx.font = "bold 20px 'Noto Sans JP'";
  ctx.textAlign = "center";
  ctx.fillText("内面化", centerX, centerY - 5);

  ctx.fillStyle = blueLight;
  ctx.font = "14px 'Noto Sans JP'";
  ctx.fillText("Internalization", centerX, centerY + 20);

  // Add Spiral Effect to indicate "Next Spiral"
  ctx.beginPath();
  ctx.moveTo(centerX, centerY - 80);
  ctx.quadraticCurveTo(centerX + 100, centerY - 100, centerX + 120, centerY - 200);
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
  ctx.lineWidth = 2;
  ctx.setLineDash([5, 5]);
  ctx.stroke();
  ctx.setLineDash([]);

  ctx.fillStyle = textGray;
  ctx.font = "12px 'Noto Sans JP'";
  ctx.textAlign = "left";
  ctx.fillText("次の共同化へ", centerX + 130, centerY - 190);
});
</script>
<style scoped>
body {      font-family: 'Noto Sans JP', sans-serif;      background-color: #000000;      color: #f8fafc;      margin: 0;      padding: 0;      overflow: hidden;    }    .slide-container {      width: 1280px;      height: 720px;      position: relative;      display: flex;      flex-direction: column;      background-color: #050505;      overflow: hidden;    }        /* Header Area */    .header-area {      height: 80px;      padding: 0 40px;      display: flex;      align-items: center;      justify-content: space-between;      border-bottom: 1px solid #1f2937;      background-color: #0a0a0a;    }        .section-tag {      background-color: #1e3a8a;      color: #bfdbfe;      padding: 4px 12px;      border-radius: 4px;      font-size: 0.8rem;      font-weight: 700;      letter-spacing: 0.05em;    }        /* Main Content Area */    .content-area {      flex: 1;      display: flex;      padding: 0;      overflow: hidden;    }        /* Left Panel (Diagram) */    .left-panel {      width: 55%;      position: relative;      background-color: #050505;      display: flex;      justify-content: center;      align-items: center;      padding: 20px;    }        /* Right Panel (Points) */    .right-panel {      width: 45%;      padding: 40px;      background-color: #0f0f0f;      border-left: 1px solid #333;      display: flex;      flex-direction: column;      justify-content: center;    }        /* Canvas Overlay for Grid */    .bg-grid {      position: absolute;      top: 0;      left: 0;      width: 100%;      height: 100%;      z-index: 0;      opacity: 0.05;      pointer-events: none;    }        /* Canvas for Diagram */    #internalizationCanvas {      z-index: 10;    }    /* Points Styling */    .point-card {      background-color: #1a1a1a;      border-left: 4px solid #3b82f6;      padding: 15px 20px;      margin-bottom: 15px;      border-radius: 0 4px 4px 0;      transition: transform 0.2s;    }        .point-card:hover {      background-color: #222;    }        .point-title {      color: #60a5fa;      font-weight: 700;      font-size: 1.1rem;      margin-bottom: 4px;      display: flex;      align-items: center;    }        .point-desc {      color: #d1d5db;      font-size: 0.9rem;      line-height: 1.5;    }        .tag-label {      display: inline-block;      font-size: 0.7rem;      padding: 2px 8px;      border-radius: 10px;      margin-left: 10px;      background-color: rgba(59, 130, 246, 0.2);      color: #93c5fd;    }    .highlight-text {      color: #3b82f6;      font-weight: bold;    }        /* Custom bullet */    ul.custom-list li {      position: relative;      padding-left: 20px;      margin-bottom: 8px;      color: #e5e7eb;    }    ul.custom-list li::before {      content: "•";      position: absolute;      left: 0;      color: #3b82f6;      font-weight: bold;    }
</style>
