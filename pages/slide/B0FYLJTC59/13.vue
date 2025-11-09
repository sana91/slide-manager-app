<template>
    <SlidePageWrapper slide-id="B0FYLJTC59" page-title="第6章: ホメホメ地域の取り組み" :current-page="13" :total-pages="20">
        <div class="slide-container flex flex-col items-center px-16 py-12">
            <!-- Header -->
            <div class="w-full mb-8">
                <h1 class="text-4xl font-bold text-center text-gray-700"><span class="color-accent">第6章: ホメホメ地域</span>の取り組み </h1>
                <div class="w-32 h-1 bg-orange-400 mx-auto mt-4"></div>
            </div><!-- Main Content -->
            <div class="flex-1 w-full flex flex-col justify-center">
                <div class="grid grid-cols-1 gap-8">
                    <!-- 可視化 -->
                    <div class="content-box pl-6 py-2">
                        <div class="flex items-center"><i class="fas fa-eye text-2xl color-accent mr-4"></i>
                            <p class="text-2xl font-bold text-gray-700">可視化:</p>
                        </div>
                        <p class="ml-12 text-xl text-gray-700">「いいね掲示板」で優しさを見える化。地域の小さな親切や感謝を共有。</p>
                    </div><!-- 行政 -->
                    <div class="content-box pl-6 py-2">
                        <div class="flex items-center"><i class="fas fa-landmark text-2xl color-accent mr-4"></i>
                            <p class="text-2xl font-bold text-gray-700">行政:</p>
                        </div>
                        <p class="ml-12 text-xl text-gray-700">ルールより"ホメホメデザイン"を（承認が回る制度設計）。防災にも有効。</p>
                    </div><!-- つながり -->
                    <div class="content-box pl-6 py-2">
                        <div class="flex items-center"><i class="fas fa-hands-helping text-2xl color-accent mr-4"></i>
                            <p class="text-2xl font-bold text-gray-700">つながり:</p>
                        </div>
                        <p class="ml-12 text-xl text-gray-700">相談/短文メッセージを送り合う仕組みづくり。孤立防止と共助の促進。</p>
                    </div><!-- 拡張 -->
                    <div class="content-box pl-6 py-2">
                        <div class="flex items-center"><i class="fas fa-expand-arrows-alt text-2xl color-accent mr-4"></i>
                            <p class="text-2xl font-bold text-gray-700">拡張:</p>
                        </div>
                        <p class="ml-12 text-xl text-gray-700">個人の習慣→地域の文化→SNSの言葉づかいへ波及。地域から社会全体へ。</p>
                    </div>
                </div>
            </div><!-- Footer -->
            <div class="w-full flex justify-between items-center mt-8">
                <div class="flex items-center"><i class="fas fa-heart text-sm color-accent mr-2"></i>
                    <p class="text-sm text-gray-500">承認がめぐるまちのつくり方</p>
                </div>
                <p class="text-sm text-gray-500">13 / 20</p>
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