<template>
  <SlidePageWrapper slide-id="486594458303" page-title="" :current-page="4" :total-pages="23">
<div class="slide-container">
    <!-- Header -->
    <div class="header-area">
        <div class="flex items-center"><span class="section-tag mr-4">CHAPTER 10</span>
            <h2 class="text-xl font-bold text-white">SoR → SoE → SoI → SoK：4段階進化</h2>
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
            </svg><canvas height="600" ref="canvasRef" id="evolutionCanvas" width="680"></canvas></div><!-- Right Panel: Detailed Points -->
        <div class="right-panel">
            <h3 class="text-2xl font-bold text-white mb-6 pb-2 border-b border-gray-700"><span class="text-blue-500">システム領域</span>の拡張 </h3><!-- SoR -->
            <div class="point-card">
                <div class="point-title"> SoR (System of Record) <span class="tag-label">記録</span></div>
                <p class="point-desc"> 「真実の源泉（SSOT）」を確立する基幹システム。データの整合性と永続性を保証。 </p>
                <div class="mt-2 text-xs text-gray-500 font-mono"><i class="fas fa-cube mr-1"></i>ERP, RDB (Oracle, SAP) </div>
            </div><!-- SoE -->
            <div class="point-card">
                <div class="point-title"> SoE (System of Engagement) <span class="tag-label">顧客接点</span></div>
                <p class="point-desc"> 顧客との継続的関係を構築。スマホ・SNS時代に対応した体験重視のシステム。 </p>
                <div class="mt-2 text-xs text-gray-500 font-mono"><i class="fas fa-users mr-1"></i>Salesforce, Slack, SNS </div>
            </div><!-- SoI -->
            <div class="point-card">
                <div class="point-title"> SoI (System of Insight) <span class="tag-label">洞察</span></div>
                <p class="point-desc"> 蓄積データから分析・予測を導出。OLAPとOLTPの分離、ビッグデータ活用。 </p>
                <div class="mt-2 text-xs text-gray-500 font-mono"><i class="fas fa-chart-line mr-1"></i>DWH, Data Lake, Tableau </div>
            </div><!-- SoK -->
            <div class="point-card" style="border-left-color: #60a5fa; background-color: #1e293b;">
                <div class="point-title text-white"> SoK (System of Knowledge) <span class="tag-label bg-blue-600 text-white">知識創造</span></div>
                <p class="point-desc text-gray-200"> 非構造化データから<span class="highlight-text">AIエージェント</span>が仮説→検証→知識化を自律的に実行。 </p>
                <div class="mt-2 text-xs text-blue-200 font-mono"><i class="fas fa-robot mr-1"></i>Generative AI, Agents </div>
            </div>
        </div>
    </div>
</div>
  </SlidePageWrapper>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const canvasRef = ref(null)

onMounted(() => {
  const canvas = canvasRef.value
  if (!canvas) return

  const ctx = canvas.getContext('2d')
  if (!ctx) return

  drawEvolutionDiagram(ctx, canvas)
})

function drawEvolutionDiagram (ctx, canvas) {
  // もとのロジックをそのまま移植
  ctx.clearRect(0, 0, canvas.width, canvas.height)

  const centerX = canvas.width / 2
  const startY = 520 // Bottom position
  const stepY = 130  // Vertical step size
  const boxWidth = 360
  const boxHeight = 70
  const cornerRadius = 10

  // Colors
  const colors = {
    sor: { bg: '#1f2937', border: '#374151', text: '#9ca3af' },
    soe: { bg: '#1e3a8a', border: '#3b82f6', text: '#bfdbfe' },
    soi: { bg: '#1e40af', border: '#60a5fa', text: '#dbeafe' },
    sok: { bg: '#3b82f6', border: '#93c5fd', text: '#ffffff', shadow: 'rgba(59, 130, 246, 0.5)' }
  }

  // Helper function to draw connection line with arrow
  function drawConnectLine (x, yBottom, yTop) {
    ctx.beginPath()
    ctx.moveTo(x, yBottom)
    ctx.lineTo(x, yTop)
    ctx.strokeStyle = '#4b5563'
    ctx.lineWidth = 2
    ctx.stroke()

    // Arrowhead
    ctx.beginPath()
    ctx.moveTo(x - 5, yTop + 5)
    ctx.lineTo(x, yTop)
    ctx.lineTo(x + 5, yTop + 5)
    ctx.stroke()
  }

  // Helper function to draw rounded rect
  function drawRoundedRect (x, y, w, h, r, style, text, subText, isTop = false) {
    ctx.beginPath()
    ctx.moveTo(x + r, y)
    ctx.lineTo(x + w - r, y)
    ctx.quadraticCurveTo(x + w, y, x + w, y + r)
    ctx.lineTo(x + w, y + h - r)
    ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h)
    ctx.lineTo(x + r, y + h)
    ctx.quadraticCurveTo(x, y + h, x, y + h - r)
    ctx.lineTo(x, y + r)
    ctx.quadraticCurveTo(x, y, x + r, y)
    ctx.closePath()

    // Shadow for top element
    if (isTop && style.shadow) {
      ctx.shadowColor = style.shadow
      ctx.shadowBlur = 20
      ctx.shadowOffsetX = 0
      ctx.shadowOffsetY = 0
    } else {
      ctx.shadowColor = 'transparent'
      ctx.shadowBlur = 0
      ctx.shadowOffsetX = 0
      ctx.shadowOffsetY = 0
    }

    ctx.fillStyle = style.bg
    ctx.fill()
    ctx.lineWidth = 2
    ctx.strokeStyle = style.border
    ctx.stroke()

    // Reset shadow
    ctx.shadowColor = 'transparent'
    ctx.shadowBlur = 0
    ctx.shadowOffsetX = 0
    ctx.shadowOffsetY = 0

    // Text (main)
    ctx.fillStyle = style.text
    ctx.font = isTop ? "bold 24px 'Noto Sans JP'" : "bold 20px 'Noto Sans JP'"
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'
    ctx.fillText(text, x + w / 2, y + h / 2 - 10)

    // Sub text
    ctx.font = "14px 'Noto Sans JP'"
    ctx.fillStyle = isTop ? '#e0f2fe' : '#9ca3af'
    ctx.fillText(subText, x + w / 2, y + h / 2 + 15)
  }

  // ===== Base Arrow Path (背景の縦の破線) =====
  ctx.beginPath()
  ctx.moveTo(centerX, startY + 40)
  ctx.lineTo(centerX, 50)
  ctx.strokeStyle = '#333'
  ctx.lineWidth = 2
  ctx.setLineDash([5, 5])
  ctx.stroke()
  ctx.setLineDash([])

  // ===== Stacked Boxes (Bottom to Top) =====

  // 1. SoR (Base)
  drawRoundedRect(
    centerX - boxWidth / 2,
    startY,
    boxWidth,
    boxHeight,
    cornerRadius,
    colors.sor,
    'SoR: System of Record',
    '記録のシステム (1990s~)'
  )

  // Connection Line
  drawConnectLine(centerX, startY, startY - stepY + boxHeight)

  // 2. SoE
  drawRoundedRect(
    centerX - boxWidth / 2,
    startY - stepY,
    boxWidth,
    boxHeight,
    cornerRadius,
    colors.soe,
    'SoE: System of Engagement',
    '絆のシステム (2000s~)'
  )

  // Connection Line
  drawConnectLine(centerX, startY - stepY, startY - stepY * 2 + boxHeight)

  // 3. SoI
  drawRoundedRect(
    centerX - boxWidth / 2,
    startY - stepY * 2,
    boxWidth,
    boxHeight,
    cornerRadius,
    colors.soi,
    'SoI: System of Insight',
    '洞察のシステム (2010s~)'
  )

  // Connection Line
  drawConnectLine(centerX, startY - stepY * 2, startY - stepY * 3 + boxHeight)

  // 4. SoK (Top) - Highlighted
  const topY = startY - stepY * 3

  // Glow effect behind top box
  const grad = ctx.createRadialGradient(
    centerX,
    topY + boxHeight / 2,
    0,
    centerX,
    topY + boxHeight / 2,
    200
  )
  grad.addColorStop(0, 'rgba(59, 130, 246, 0.2)')
  grad.addColorStop(1, 'rgba(0, 0, 0, 0)')
  ctx.fillStyle = grad
  ctx.fillRect(centerX - 250, topY - 50, 500, 200)

  drawRoundedRect(
    centerX - boxWidth / 2,
    topY,
    boxWidth,
    boxHeight + 10,
    cornerRadius,
    colors.sok,
    'SoK: System of Knowledge',
    '知識創造のシステム (2020s~)',
    true
  )

  // ===== Side Arrow: "価値の源泉の進化" =====
  const arrowX = centerX + boxWidth / 2 + 60
  const arrowBot = startY + boxHeight
  const arrowTop = topY

  ctx.beginPath()
  ctx.moveTo(arrowX, arrowBot)
  ctx.lineTo(arrowX, arrowTop)
  ctx.strokeStyle = '#3b82f6'
  ctx.lineWidth = 2
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(arrowX - 5, arrowTop + 10)
  ctx.lineTo(arrowX, arrowTop)
  ctx.lineTo(arrowX + 5, arrowTop + 10)
  ctx.stroke()

  // Text along arrow (縦書きっぽく回転)
  ctx.save()
  ctx.translate(arrowX + 20, (arrowBot + arrowTop) / 2)
  ctx.rotate(-Math.PI / 2)
  ctx.textAlign = 'center'
  ctx.font = "bold 14px 'Noto Sans JP'"
  ctx.fillStyle = '#60a5fa'
  ctx.fillText('価値の源泉の進化', 0, 0)
  ctx.restore()
}
</script>
<style scoped>
body {      font-family: 'Noto Sans JP', sans-serif;      background-color: #000000;      color: #f8fafc;      margin: 0;      padding: 0;      overflow: hidden;    }    .slide-container {      width: 1280px;      height: 720px;      position: relative;      display: flex;      flex-direction: column;      background-color: #050505;      overflow: hidden;    }        /* Header Area */    .header-area {      height: 80px;      padding: 0 40px;      display: flex;      align-items: center;      justify-content: space-between;      border-bottom: 1px solid #1f2937;      background-color: #0a0a0a;    }        .section-tag {      background-color: #1e3a8a;      color: #bfdbfe;      padding: 4px 12px;      border-radius: 4px;      font-size: 0.8rem;      font-weight: 700;      letter-spacing: 0.05em;    }        /* Main Content Area */    .content-area {      flex: 1;      display: flex;      padding: 0;      overflow: hidden;    }        /* Left Panel (Diagram) */    .left-panel {      width: 55%;      position: relative;      background-color: #050505;      display: flex;      justify-content: center;      align-items: center;      padding: 20px;    }        /* Right Panel (Points) */    .right-panel {      width: 45%;      padding: 40px;      background-color: #0f0f0f;      border-left: 1px solid #333;      display: flex;      flex-direction: column;      justify-content: center;    }        /* Canvas Overlay for Grid */    .bg-grid {      position: absolute;      top: 0;      left: 0;      width: 100%;      height: 100%;      z-index: 0;      opacity: 0.05;      pointer-events: none;    }        /* Canvas for Diagram */    #evolutionCanvas {      z-index: 10;    }    /* Points Styling */    .point-card {      background-color: #1a1a1a;      border-left: 4px solid #3b82f6;      padding: 15px 20px;      margin-bottom: 15px;      border-radius: 0 4px 4px 0;      transition: transform 0.2s;    }        .point-card:hover {      background-color: #222;    }        .point-title {      color: #60a5fa;      font-weight: 700;      font-size: 1.1rem;      margin-bottom: 4px;      display: flex;      align-items: center;    }        .point-desc {      color: #d1d5db;      font-size: 0.9rem;      line-height: 1.5;    }        .tag-label {      display: inline-block;      font-size: 0.7rem;      padding: 2px 8px;      border-radius: 10px;      margin-left: 10px;      background-color: rgba(59, 130, 246, 0.2);      color: #93c5fd;    }    .highlight-text {      color: #3b82f6;      font-weight: bold;    }        /* Custom bullet */    ul.custom-list li {      position: relative;      padding-left: 20px;      margin-bottom: 8px;      color: #e5e7eb;    }    ul.custom-list li::before {      content: "•";      position: absolute;      left: 0;      color: #3b82f6;      font-weight: bold;    }
</style>
