<template>
    <SlidePageWrapper slide-id="B0FYLJTC59" page-title="第4章: ホメホメ職場の実践" :current-page="11" :total-pages="20">
        <div class="slide-container flex flex-col items-center px-16 py-12">
            <!-- Header -->
            <div class="w-full mb-8">
                <h1 class="text-4xl font-bold text-center text-gray-700"><span class="color-accent">第4章:</span> ホメホメ職場の実践</h1>
                <div class="w-32 h-1 bg-orange-400 mx-auto mt-4"></div>
            </div><!-- Main Content -->
            <div class="flex-1 w-full flex flex-col justify-center">
                <div class="grid grid-cols-1 gap-8">
                    <!-- 設計思想 -->
                    <div class="content-box pl-6 py-2">
                        <div class="flex items-center"><i class="fas fa-drafting-compass text-2xl color-accent mr-4"></i>
                            <p class="text-2xl font-bold text-gray-700">設計思想:</p>
                        </div>
                        <p class="ml-12 text-xl text-gray-700">承認を"制度化"し日常運用へ（承認のデザイン）。</p>
                    </div><!-- 仕掛け -->
                    <div class="content-box pl-6 py-2">
                        <div class="flex items-center"><i class="fas fa-cogs text-2xl color-accent mr-4"></i>
                            <p class="text-2xl font-bold text-gray-700">仕掛け:</p>
                        </div>
                        <p class="ml-12 text-xl text-gray-700">ありがとうカード/ポイント、称賛タイム、P→I対話。</p>
                    </div><!-- 上司の役割 -->
                    <div class="content-box pl-6 py-2">
                        <div class="flex items-center"><i class="fas fa-user-tie text-2xl color-accent mr-4"></i>
                            <p class="text-2xl font-bold text-gray-700">上司の役割:</p>
                        </div>
                        <p class="ml-12 text-xl text-gray-700">存在承認で心理的安全性をつくる。</p>
                    </div><!-- 脱却 -->
                    <div class="content-box pl-6 py-2">
                        <div class="flex items-center"><i class="fas fa-door-open text-2xl color-accent mr-4"></i>
                            <p class="text-2xl font-bold text-gray-700">脱却:</p>
                        </div>
                        <p class="ml-12 text-xl text-gray-700">「叱られる文化」からの転換をリーダーが主導。</p>
                    </div>
                </div>
            </div><!-- Footer -->
            <div class="w-full flex justify-between items-center mt-8">
                <div class="flex items-center"><i class="fas fa-heart text-sm color-accent mr-2"></i>
                    <p class="text-sm text-gray-500">ホメホメ革命</p>
                </div>
                <p class="text-sm text-gray-500">11 / 20</p>
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