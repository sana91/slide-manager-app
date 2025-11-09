<template>
    <SlidePageWrapper slide-id="B0FYLJTC59" page-title="本書から得られる気づきと変容" :current-page="19" :total-pages="20">
        <div class="slide-container flex flex-col items-center px-16 py-12">
            <!-- Header -->
            <div class="w-full mb-8">
                <h1 class="text-4xl font-bold text-center text-gray-700"><span class="color-accent">本書から得られる</span>気づきと変容 </h1>
                <div class="w-32 h-1 bg-orange-400 mx-auto mt-4"></div>
            </div><!-- Main Content -->
            <div class="flex-1 w-full flex flex-col justify-center">
                <div class="grid grid-cols-1 gap-8">
                    <!-- 気づき -->
                    <div class="content-box pl-6 py-2">
                        <div class="flex items-center"><i class="fas fa-lightbulb text-2xl color-accent mr-4"></i>
                            <p class="text-2xl font-bold text-gray-700">気づき:</p>
                        </div>
                        <p class="ml-12 text-xl text-gray-700">減点文化の"空気"は設計で変えられる／承認は科学的に有効。</p>
                    </div><!-- 個人の変容 -->
                    <div class="content-box pl-6 py-2">
                        <div class="flex items-center"><i class="fas fa-user-check text-2xl color-accent mr-4"></i>
                            <p class="text-2xl font-bold text-gray-700">個人の変容:</p>
                        </div>
                        <p class="ml-12 text-xl text-gray-700">自己承認と他者承認の両輪で、再挑戦の力が湧く。</p>
                    </div><!-- 組織の変容 -->
                    <div class="content-box pl-6 py-2">
                        <div class="flex items-center"><i class="fas fa-sitemap text-2xl color-accent mr-4"></i>
                            <p class="text-2xl font-bold text-gray-700">組織の変容:</p>
                        </div>
                        <p class="ml-12 text-xl text-gray-700">心理的安全性→エンゲージメント→成果の好循環。</p>
                    </div><!-- 社会の変容 -->
                    <div class="content-box pl-6 py-2">
                        <div class="flex items-center"><i class="fas fa-hands-helping text-2xl color-accent mr-4"></i>
                            <p class="text-2xl font-bold text-gray-700">社会の変容:</p>
                        </div>
                        <p class="ml-12 text-xl text-gray-700">言葉づかいの変化が、信頼とつながりを増やす。</p>
                    </div>
                </div>
            </div><!-- Footer -->
            <div class="w-full flex justify-between items-center mt-8">
                <div class="flex items-center"><i class="fas fa-heart text-sm color-accent mr-2"></i>
                    <p class="text-sm text-gray-500">ホメホメ革命</p>
                </div>
                <p class="text-sm text-gray-500">19 / 20</p>
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