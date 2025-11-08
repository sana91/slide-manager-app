<style scoped>


        body, html {
            margin: 0;
            padding: 0;
            font-family: 'Noto Sans JP', sans-serif;
        }
        .slide-container {
            width: 1280px;
            min-height: 720px;
            display: flex;
            background-color: #4bb1da;
            color: white;
            overflow: hidden;
            position: relative;
        }
        .content-wrapper {
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            z-index: 2;
            padding: 40px;
            text-align: center;
        }
        .title {
            font-size: 64px;
            font-weight: 900;
            margin-bottom: 24px;
            line-height: 1.2;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
        }
        .subtitle {
            font-size: 32px;
            font-weight: 700;
            margin-bottom: 40px;
            line-height: 1.4;
        }
        .authors {
            font-size: 24px;
            font-weight: 500;
            margin-top: 20px;
            line-height: 1.6;
        }
        .decoration {
            position: absolute;
            z-index: 1;
        }
        .decoration-top-right {
            top: -100px;
            right: -100px;
            width: 400px;
            height: 400px;
            background-color: #3498db;
            border-radius: 50%;
        }
        .decoration-bottom-left {
            bottom: -120px;
            left: -120px;
            width: 350px;
            height: 350px;
            background-color: #2ecc71;
            border-radius: 50%;
        }
        .icon-row {
            display: flex;
            justify-content: center;
            margin: 30px 0;
            gap: 40px;
        }
        .icon-item {
            font-size: 36px;
            background-color: white;
            color: #4bb1da;
            width: 70px;
            height: 70px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
        }
        .summary-note {
            font-size: 18px;
            font-weight: 400;
            margin-top: 40px;
        }

</style>

<template>
  <div class="min-h-screen bg-gray-900 text-white container">
    <div class="prose prose-lg max-w-none">
<div class="slide-container">
<div class="decoration decoration-top-right"></div>
<div class="decoration decoration-bottom-left"></div>
<div class="content-wrapper">
<p class="title">体力おばけへの道</p>
<p class="subtitle">頭も体も疲れにくくなるスゴイ運動</p>
<div class="icon-row">
<div class="icon-item"><i class="fas fa-dumbbell"></i></div>
<div class="icon-item"><i class="fas fa-running"></i></div>
<div class="icon-item"><i class="fas fa-heart"></i></div>
</div>
<p class="authors">著者：澤木 一貴（SAWAKI GYM代表）</p>
<p class="authors">監修：國本 充洋（医学博士／循環器内科専門医）</p>
<p class="summary-note">書籍要約スライド（全20ページ）</p>
</div>
</div>
</div>

    <div class="mt-8 flex justify-start items-center">
      <div>
        <div class="inline-block bg-gray-800 text-white px-6 py-3 rounded-lg transition-colors">← 前のページ</div>
      </div>

      <div
        class="inline-block bg-gray-600 text-white px-6 py-3 rounded-lg transition-colors text-center"
      >
        <span><code>B0FPPSR9ZW</code><br /></span>
        <span> [ 1 / 20 ]</span>
      </div>

      <div>
        <NuxtLink
          to="/slide/B0FPPSR9ZW/2"
          class="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors"
        >
          次のページ →
        </NuxtLink>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'B0FPPSR9ZW - ページ 1'
})
</script>
