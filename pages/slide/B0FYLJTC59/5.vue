<template>
    <SlidePageWrapper slide-id="B0FYLJTC59" page-title="ホメホメ革命とは何か" :current-page="5" :total-pages="20">
        <div class="slide-container flex flex-col items-center px-16 py-12">
            <!-- Header -->
            <div class="w-full mb-8">
                <h1 class="text-4xl font-bold text-center text-gray-700"><span class="color-accent">ホメホメ革命</span>とは何か </h1>
                <div class="w-32 h-1 bg-orange-400 mx-auto mt-4"></div>
            </div><!-- Main Content -->
            <div class="flex-1 w-full flex flex-col justify-center">
                <div class="grid grid-cols-1 gap-8">
                    <!-- 定義 -->
                    <div class="content-box pl-6 py-2">
                        <div class="flex items-center"><i class="fas fa-book-open text-2xl color-accent mr-4"></i>
                            <p class="text-2xl font-bold text-gray-700">定義:</p>
                        </div>
                        <p class="ml-12 text-xl text-gray-700">感謝と承認の言葉を日常に戻し、関係を温め、挑戦を促す社会運動。</p>
                    </div><!-- ビジョン -->
                    <div class="content-box pl-6 py-2">
                        <div class="flex items-center"><i class="fas fa-eye text-2xl color-accent mr-4"></i>
                            <p class="text-2xl font-bold text-gray-700">ビジョン:</p>
                        </div>
                        <p class="ml-12 text-xl text-gray-700">世界で一番「ありがとう」が響く国へ。</p>
                    </div><!-- スコープ -->
                    <div class="content-box pl-6 py-2">
                        <div class="flex items-center"><i class="fas fa-project-diagram text-2xl color-accent mr-4"></i>
                            <p class="text-2xl font-bold text-gray-700">スコープ:</p>
                        </div>
                        <p class="ml-12 text-xl text-gray-700">個人→家庭→職場/学校→地域→社会へ波及。</p>
                    </div><!-- キーワード -->
                    <div class="content-box pl-6 py-2">
                        <div class="flex items-center"><i class="fas fa-key text-2xl color-accent mr-4"></i>
                            <p class="text-2xl font-bold text-gray-700">キーワード:</p>
                        </div>
                        <div class="ml-12">
                            <p class="text-xl text-gray-700 mb-2">承認、尊重、信頼、共感</p>
                            <p class="text-xl font-medium text-orange-600">"評価ではなく尊重から始める"</p>
                        </div>
                    </div>
                </div>
            </div><!-- Footer -->
            <div class="w-full flex justify-between items-center mt-8">
                <div class="flex items-center"><i class="fas fa-heart text-sm color-accent mr-2"></i>
                    <p class="text-sm text-gray-500">ホメホメ革命</p>
                </div>
                <p class="text-sm text-gray-500">5 / 20</p>
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