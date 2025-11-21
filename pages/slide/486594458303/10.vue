<template>
  <SlidePageWrapper slide-id="486594458303" page-title="" :current-page="10" :total-pages="23">
<div class="slide-container">
    <!-- Header -->
    <div class="header-area">
        <div class="flex items-center"><span class="section-tag mr-4">CHAPTER 11</span>
            <h2 class="text-xl font-bold text-white">SECIモデル：4つの知識変換プロセス</h2>
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
            </svg><canvas height="600" id="seciCanvas" width="680"></canvas>
            <div class="absolute bottom-6 left-10 flex">
                <div class="legend-item">
                    <div class="legend-color" style="background-color: #1d4ed8;"></div>暗黙知
                </div>
                <div class="legend-item">
                    <div class="legend-color" style="background-color: #3b82f6;"></div>形式知
                </div>
            </div>
        </div><!-- Right Panel: Detailed Points -->
        <div class="right-panel">
            <h3 class="text-2xl font-bold text-white mb-5 pb-2 border-b border-gray-700"> SECIモデルと<span class="text-blue-500">「場(Ba)」</span></h3><!-- S: Socialization -->
            <div class="point-card" style="border-left-color: #1e3a8a;">
                <div class="point-title"><span style="color: #93c5fd;">1. 共同化 (Socialization)</span><span class="ba-tag">創発の場 (Originating Ba)</span></div>
                <p class="point-desc"> 暗黙知 → 暗黙知。経験の共有、共感、観察を通じて暗黙知を獲得・移転するプロセス。 </p>
            </div><!-- E: Externalization -->
            <div class="point-card" style="border-left-color: #3b82f6;">
                <div class="point-title"><span style="color: #60a5fa;">2. 表出化 (Externalization)</span><span class="ba-tag">対話の場 (Interacting Ba)</span></div>
                <p class="point-desc"> 暗黙知 → 形式知。対話や思索を通じて暗黙知を言語化・図式化し、概念を創る。 </p>
            </div><!-- C: Combination -->
            <div class="point-card" style="border-left-color: #60a5fa;">
                <div class="point-title"><span style="color: #3b82f6;">3. 連結化 (Combination)</span><span class="ba-tag">システムの場 (Cyber Ba)</span></div>
                <p class="point-desc"> 形式知 → 形式知。異なる形式知を組み合わせ、加工・体系化して新たな知識体系へ。 </p>
            </div><!-- I: Internalization -->
            <div class="point-card" style="border-left-color: #93c5fd;">
                <div class="point-title"><span style="color: #e0f2fe;">4. 内面化 (Internalization)</span><span class="ba-tag">実践の場 (Exercising Ba)</span></div>
                <p class="point-desc"> 形式知 → 暗黙知。行動・実践を通じて形式知を体得し、新たな暗黙知として蓄積。 </p>
            </div>
            <div class="mt-4 p-3 bg-gray-900 rounded border border-gray-800">
                <p class="text-xs text-gray-400"><i class="fas fa-sync-alt mr-1 text-blue-500"></i> この<span class="text-blue-400 font-bold">知識創造スパイラル</span>をAIエージェントが加速・拡張する。 </p>
            </div>
        </div>
    </div>
</div>
  </SlidePageWrapper>
</template>
<script setup>
// Nuxt4: SECIビジュアライゼーションのCanvas描画ロジック (onMountedで実行)
import { onMounted } from 'vue'

onMounted(() => {
  // DOMが描画されてから実行
  const canvas = document.getElementById('seciCanvas')
  if (!canvas || !canvas.getContext) return
  const ctx = canvas.getContext('2d')

  // Clear canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height)

  const centerX = canvas.width / 2
  const centerY = canvas.height / 2
  const radius = 220

  // 背景円
  ctx.beginPath()
  ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI)
  ctx.fillStyle = 'rgba(20, 20, 30, 0.5)'
  ctx.fill()
  ctx.strokeStyle = '#333'
  ctx.lineWidth = 1
  ctx.stroke()

  // 軸 (十字)
  ctx.beginPath()
  ctx.moveTo(centerX, centerY - radius - 20)
  ctx.lineTo(centerX, centerY + radius + 20)
  ctx.moveTo(centerX - radius - 20, centerY)
  ctx.lineTo(centerX + radius + 20, centerY)
  ctx.strokeStyle = '#4b5563'
  ctx.lineWidth = 1
  ctx.setLineDash([5, 5])
  ctx.stroke()
  ctx.setLineDash([])

  // 知識タイプラベル
  ctx.font = "bold 14px 'Noto Sans JP'"
  ctx.fillStyle = "#9ca3af"
  ctx.textAlign = "center"

  // 上部
  ctx.fillText("暗黙知 (Tacit)", centerX - 100, centerY - radius - 10)
  ctx.fillText("形式知 (Explicit)", centerX + 100, centerY - radius - 10)

  // サイドラベル
  ctx.save()
  ctx.translate(centerX - radius - 20, centerY)
  ctx.rotate(-Math.PI / 2)
  ctx.fillText("暗黙知 (Tacit)", 0, -10) // 左
  ctx.restore()

  ctx.save()
  ctx.translate(centerX + radius + 20, centerY)
  ctx.rotate(Math.PI / 2)
  ctx.fillText("形式知 (Explicit)", 0, -10) // 右
  ctx.restore()

  // 各象限描画
  // 1. Socialization (左上)
  drawQuadrant(centerX, centerY, radius, Math.PI, 1.5 * Math.PI, '#1e3a8a', '共同化', 'Socialization', 'Originating Ba')
  // 2. Externalization (右上)
  drawQuadrant(centerX, centerY, radius, 1.5 * Math.PI, 2 * Math.PI, '#2563eb', '表出化', 'Externalization', 'Interacting Ba')
  // 3. Combination (右下)
  drawQuadrant(centerX, centerY, radius, 0, 0.5 * Math.PI, '#3b82f6', '連結化', 'Combination', 'Cyber Ba')
  // 4. Internalization (左下)
  drawQuadrant(centerX, centerY, radius, 0.5 * Math.PI, Math.PI, '#60a5fa', '内面化', 'Internalization', 'Exercising Ba')

  // スパイラル矢印
  drawSpiral(centerX, centerY, 40, radius - 40, '#ffffff')

  // --- 関数定義 ---

  function drawQuadrant(cx, cy, r, startAngle, endAngle, color, title, subTitle, baName) {
    // セクター描画 (半透明)
    ctx.beginPath()
    ctx.moveTo(cx, cy)
    ctx.arc(cx, cy, r - 10, startAngle, endAngle)
    ctx.closePath()
    ctx.fillStyle = color + '33' // 20% opacity (hex: 33)
    ctx.fill()

    // 外枠
    ctx.beginPath()
    ctx.arc(cx, cy, r - 10, startAngle, endAngle)
    ctx.strokeStyle = color
    ctx.lineWidth = 2
    ctx.stroke()

    // テキスト位置計算
    const midAngle = (startAngle + endAngle) / 2
    const textR = r * 0.65
    const textX = cx + Math.cos(midAngle) * textR
    const textY = cy + Math.sin(midAngle) * textR

    // タイトル
    ctx.fillStyle = '#fff'
    ctx.font = "bold 18px 'Noto Sans JP'"
    ctx.fillText(title, textX, textY - 10)

    // サブタイトル
    ctx.fillStyle = '#bfdbfe'
    ctx.font = "14px 'Noto Sans JP'"
    ctx.fillText(subTitle, textX, textY + 10)

    // Baラベル (タグ風)
    const baR = r * 0.85
    const baX = cx + Math.cos(midAngle) * baR
    const baY = cy + Math.sin(midAngle) * baR
    ctx.fillStyle = '#1f2937'
    const textWidth = ctx.measureText(baName).width
    ctx.fillRect(baX - textWidth / 2 - 5, baY - 10, textWidth + 10, 20)

    ctx.fillStyle = '#9ca3af'
    ctx.font = "12px 'Noto Sans JP'"
    ctx.fillText(baName, baX, baY + 4)
  }

  function drawSpiral(cx, cy, innerR, outerR, color) {
    ctx.beginPath()
    const coils = 3
    const points = 100
    const angleStep = (2 * Math.PI * coils) / points
    const radiusStep = (outerR - innerR) / points

    // 左上(Socialization) 始点
    let angle = -Math.PI * 0.75
    ctx.moveTo(cx + Math.cos(angle) * innerR, cy + Math.sin(angle) * innerR)
    for (let i = 0; i <= points; i++) {
      const currentR = innerR + i * radiusStep
      const x = cx + Math.cos(angle) * currentR
      const y = cy + Math.sin(angle) * currentR
      ctx.lineTo(x, y)
      angle += 0.15 // 時計回り
    }
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.6)'
    ctx.lineWidth = 3
    ctx.stroke()

    // ※矢印先端等は省略
  }
})
</script>
<style scoped>
body {      font-family: 'Noto Sans JP', sans-serif;      background-color: #000000;      color: #f8fafc;      margin: 0;      padding: 0;      overflow: hidden;    }    .slide-container {      width: 1280px;      height: 720px;      position: relative;      display: flex;      flex-direction: column;      background-color: #050505;      overflow: hidden;    }        /* Header Area */    .header-area {      height: 80px;      padding: 0 40px;      display: flex;      align-items: center;      justify-content: space-between;      border-bottom: 1px solid #1f2937;      background-color: #0a0a0a;    }        .section-tag {      background-color: #1e3a8a;      color: #bfdbfe;      padding: 4px 12px;      border-radius: 4px;      font-size: 0.8rem;      font-weight: 700;      letter-spacing: 0.05em;    }        /* Main Content Area */    .content-area {      flex: 1;      display: flex;      padding: 0;      overflow: hidden;    }        /* Left Panel (Diagram) */    .left-panel {      width: 55%;      position: relative;      background-color: #050505;      display: flex;      justify-content: center;      align-items: center;      padding: 20px;    }        /* Right Panel (Points) */    .right-panel {      width: 45%;      padding: 40px;      background-color: #0f0f0f;      border-left: 1px solid #333;      display: flex;      flex-direction: column;      justify-content: center;    }        /* Canvas Overlay for Grid */    .bg-grid {      position: absolute;      top: 0;      left: 0;      width: 100%;      height: 100%;      z-index: 0;      opacity: 0.05;      pointer-events: none;    }        /* Canvas for Diagram */    #seciCanvas {      z-index: 10;    }    /* Points Styling */    .point-card {      background-color: #1a1a1a;      border-left: 4px solid #3b82f6;      padding: 12px 20px;      margin-bottom: 12px;      border-radius: 0 4px 4px 0;      transition: transform 0.2s;    }        .point-card:hover {      background-color: #222;    }        .point-title {      color: #60a5fa;      font-weight: 700;      font-size: 1.05rem;      margin-bottom: 4px;      display: flex;      align-items: center;      justify-content: space-between;    }        .point-desc {      color: #d1d5db;      font-size: 0.85rem;      line-height: 1.5;    }        .ba-tag {      display: inline-block;      font-size: 0.7rem;      padding: 2px 8px;      border-radius: 10px;      background-color: #1e293b;      color: #9ca3af;      border: 1px solid #374151;    }    .highlight-text {      color: #3b82f6;      font-weight: bold;    }        /* Legend */    .legend-item {      display: flex;      align-items: center;      font-size: 0.8rem;      color: #9ca3af;      margin-right: 15px;    }    .legend-color {      width: 10px;      height: 10px;      border-radius: 50%;      margin-right: 5px;    }
</style>
