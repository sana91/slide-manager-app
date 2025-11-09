<template>
    <SlidePageWrapper slide-id="B0FYLJTC59" page-title="内発的モチベーションを育てる" :current-page="10" :total-pages="20">
        <div class="slide-container flex flex-col items-center px-16 py-12">
            <!-- Header -->
            <div class="w-full mb-8">
                <h1 class="text-4xl font-bold text-center text-gray-700"><span class="color-accent">内発的モチベーション</span>を育てる </h1>
                <div class="w-32 h-1 bg-orange-400 mx-auto mt-4"></div>
            </div><!-- Main Content -->
            <div class="flex-1 w-full flex flex-col justify-center">
                <div class="grid grid-cols-1 gap-8">
                    <!-- ポイント -->
                    <div class="content-box pl-6 py-2">
                        <div class="flex items-center"><i class="fas fa-star text-2xl color-accent mr-4"></i>
                            <p class="text-2xl font-bold text-gray-700">ポイント:</p>
                        </div>
                        <p class="ml-12 text-xl text-gray-700">外発ではなく内発（自分ごと化）を起こす承認。</p>
                    </div><!-- 方法 -->
                    <div class="content-box pl-6 py-2">
                        <div class="flex items-center"><i class="fas fa-tools text-2xl color-accent mr-4"></i>
                            <p class="text-2xl font-bold text-gray-700">方法:</p>
                        </div>
                        <div class="ml-12">
                            <p class="text-xl text-gray-700 mb-2">• 小さな変化を言語化</p>
                            <p class="text-xl text-gray-700 mb-2">• 努力の継続を可視化</p>
                            <p class="text-xl text-gray-700">• 自己承認の習慣化</p>
                        </div>
                    </div><!-- 効果 -->
                    <div class="content-box pl-6 py-2">
                        <div class="flex items-center"><i class="fas fa-chart-line text-2xl color-accent mr-4"></i>
                            <p class="text-2xl font-bold text-gray-700">効果:</p>
                        </div>
                        <div class="ml-12">
                            <p class="text-xl text-gray-700 mb-2">• 自己効力感の醸成</p>
                            <p class="text-xl text-gray-700 mb-2">• 再挑戦のエネルギーの向上</p>
                            <p class="text-xl text-gray-700">• 学習・成長の持続</p>
                        </div>
                    </div><!-- 注意 -->
                    <div class="content-box pl-6 py-2">
                        <div class="flex items-center"><i class="fas fa-exclamation-circle text-2xl color-accent mr-4"></i>
                            <p class="text-2xl font-bold text-gray-700">注意:</p>
                        </div>
                        <p class="ml-12 text-xl text-gray-700">承認は依存を生まない"自立支援"として運用する。</p>
                    </div>
                </div>
            </div><!-- Footer -->
            <div class="w-full flex justify-between items-center mt-8">
                <div class="flex items-center"><i class="fas fa-heart text-sm color-accent mr-2"></i>
                    <p class="text-sm text-gray-500">ホメホメ革命</p>
                </div>
                <p class="text-sm text-gray-500">10 / 20</p>
            </div>
        </div>
    </SlidePageWrapper>
</template>
<style scoped>
body,
html {
    margin: 0;
    padding: 0;
    font-family: 'M PLUS Rounded 1c', sans-serif;
}

.slide-container {
    width: 1280px;
    min-height: 720px;
    overflow: hidden;
    position: relative;
    background-color: #FFF8F0;
}

.color-accent {
    color: #FF8A00;
}

.bg-accent-light {
    background-color: rgba(255, 138, 0, 0.1);
}

.content-box {
    border-left: 4px solid #FF8A00;
}
</style>