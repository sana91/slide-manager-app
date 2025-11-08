<template>
  <div class="container mx-auto px-4 py-8">
    <!-- ローディング -->
    <div v-if="!slide" class="text-center py-12">
      <div class="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
      <p class="mt-4 text-gray-600">読み込み中...</p>
    </div>

    <!-- スライド詳細 -->
    <div v-else>
      <!-- ヘッダー -->
      <div class="mb-8">
        <div class="flex items-start justify-between mb-4">
          <div class="flex-1">
            <h1 class="text-3xl font-bold text-gray-900 mb-2">
              {{ slide.slideName }}
            </h1>
            <p class="text-gray-500 font-mono bg-gray-100 px-3 py-1 rounded inline-block">
              /slide/{{ slide.slideCode }}/
            </p>
          </div>
          <div class="flex gap-2">
            <button
              @click="editMode = !editMode"
              class="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
            >
              {{ editMode ? 'キャンセル' : '編集' }}
            </button>
            <button
              @click="confirmDelete"
              class="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
            >
              削除
            </button>
          </div>
        </div>

        <!-- 説明 -->
        <p v-if="slide.description" class="text-gray-600 mb-4">
          {{ slide.description }}
        </p>

        <!-- タグ -->
        <div v-if="slide.tags && slide.tags.length > 0" class="flex flex-wrap gap-2 mb-4">
          <span
            v-for="tag in slide.tags"
            :key="tag"
            class="text-sm bg-primary-100 text-primary-700 px-3 py-1 rounded"
          >
            {{ tag }}
          </span>
        </div>

        <!-- 統計 -->
        <div class="flex items-center gap-6 text-sm text-gray-600">
          <span>📄 {{ slide.pages.length }} ページ</span>
          <span>📅 作成: {{ formatDate(slide.createdAt) }}</span>
          <span>🔄 更新: {{ formatDate(slide.updatedAt) }}</span>
        </div>
      </div>

      <!-- ページ追加ボタン -->
      <div class="mb-6">
        <button
          @click="showAddPageForm = true"
          class="bg-primary-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-700 transition-colors shadow-sm"
        >
          ＋ ページを追加
        </button>
      </div>

      <!-- ページ追加フォーム -->
      <div v-if="showAddPageForm" class="mb-6 bg-white rounded-lg shadow-md p-6">
        <h3 class="text-xl font-bold text-gray-900 mb-4">新規ページ追加</h3>
        
        <div class="mb-4">
          <label class="block text-sm font-medium text-gray-700 mb-2">
            HTMLソースコード
          </label>
          <textarea
            v-model="newPageContent"
            rows="12"
            placeholder="HTMLコードを入力してください..."
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent font-mono text-sm"
          />
          <p class="mt-2 text-sm text-gray-500">
            次のページ番号: {{ slide.pages.length + 1 }}
          </p>
        </div>

        <div class="flex gap-4">
          <button
            @click="handleAddPage"
            :disabled="!newPageContent.trim() || isAddingPage"
            class="flex-1 bg-primary-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-700 transition-colors disabled:bg-gray-400"
          >
            {{ isAddingPage ? '追加中...' : 'ページを追加' }}
          </button>
          <button
            @click="cancelAddPage"
            class="flex-1 bg-gray-200 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-300 transition-colors"
          >
            キャンセル
          </button>
        </div>
      </div>

      <!-- ページリスト -->
      <div class="space-y-4">
        <h2 class="text-2xl font-bold text-gray-900 mb-4">
          ページ一覧
        </h2>

        <!-- 空の状態 -->
        <div v-if="slide.pages.length === 0" class="text-center py-12 bg-white rounded-lg shadow-sm">
          <div class="text-6xl mb-4">📄</div>
          <h3 class="text-xl font-semibold text-gray-900 mb-2">
            ページがありません
          </h3>
          <p class="text-gray-600">
            最初のページを追加してください
          </p>
        </div>

        <!-- ページカード -->
        <div
          v-for="page in sortedPages"
          :key="page.id"
          class="bg-white rounded-lg shadow-sm p-6 border border-gray-200"
        >
          <div class="flex items-start justify-between mb-4">
            <div>
              <h3 class="text-lg font-bold text-gray-900">
                ページ {{ page.pageNumber }}
              </h3>
              <p class="text-sm text-gray-500">
                最終更新: {{ formatDateTime(page.updatedAt) }}
              </p>
            </div>
            <div class="flex gap-2">
              <NuxtLink
                :to="`/slide/${slide.slideCode}/${page.pageNumber}`"
                target="_blank"
                class="px-3 py-1 bg-green-600 text-white text-sm rounded hover:bg-green-700 transition-colors"
              >
                プレビュー
              </NuxtLink>
              <button
                @click="editPage(page)"
                class="px-3 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-700 transition-colors"
              >
                編集
              </button>
              <button
                @click="confirmDeletePage(page)"
                class="px-3 py-1 bg-red-600 text-white text-sm rounded hover:bg-red-700 transition-colors"
              >
                削除
              </button>
            </div>
          </div>

          <!-- HTMLプレビュー -->
          <div class="bg-gray-50 rounded p-4 overflow-x-auto">
            <pre class="text-xs text-gray-700 font-mono">{{ truncateHtml(page.htmlContent) }}</pre>
          </div>
        </div>
      </div>
    </div>

    <!-- ページ編集モーダル -->
    <div
      v-if="editingPage"
      class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      @click.self="closeEditModal"
    >
      <div class="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto p-6">
        <h3 class="text-xl font-bold text-gray-900 mb-4">
          ページ {{ editingPage.pageNumber }} を編集
        </h3>
        
        <textarea
          v-model="editingContent"
          rows="20"
          class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent font-mono text-sm mb-4"
        />

        <div class="flex gap-4">
          <button
            @click="handleUpdatePage"
            :disabled="isUpdatingPage"
            class="flex-1 bg-primary-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-700 transition-colors disabled:bg-gray-400"
          >
            {{ isUpdatingPage ? '更新中...' : '更新' }}
          </button>
          <button
            @click="closeEditModal"
            class="flex-1 bg-gray-200 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-300 transition-colors"
          >
            キャンセル
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Slide, SlidePage } from '~/types'

// ルートパラメータ取得
const route = useRoute()
const router = useRouter()
const slideId = route.params.id as string

// Head設定
useHead({
  title: computed(() => slide.value?.slideName || 'スライド詳細')
})

// スライド管理機能を取得
const slideContext = injectSlideContext()

// 状態
const slide = ref<Slide | null>(null)
const editMode = ref(false)
const showAddPageForm = ref(false)
const newPageContent = ref('')
const isAddingPage = ref(false)

// ページ編集
const editingPage = ref<SlidePage | null>(null)
const editingContent = ref('')
const isUpdatingPage = ref(false)

// スライドを読み込み
const loadSlide = () => {
  slide.value = slideContext.getSlideById(slideId) || null
}

// ページをソート
const sortedPages = computed(() => {
  if (!slide.value) return []
  return [...slide.value.pages].sort((a, b) => a.pageNumber - b.pageNumber)
})

// ページ追加
const handleAddPage = async () => {
  if (!slide.value || !newPageContent.value.trim()) return

  isAddingPage.value = true
  
  try {
    const newPage = await slideContext.addPage({
      slideId: slide.value.id,
      htmlContent: newPageContent.value
    })

    if (newPage) {
      loadSlide()
      cancelAddPage()
    }
  } catch (e) {
    console.error(e)
    alert('ページの追加に失敗しました')
  } finally {
    isAddingPage.value = false
  }
}

// ページ追加をキャンセル
const cancelAddPage = () => {
  showAddPageForm.value = false
  newPageContent.value = ''
}

// ページ編集モーダルを開く
const editPage = (page: SlidePage) => {
  editingPage.value = page
  editingContent.value = page.htmlContent
}

// ページ編集モーダルを閉じる
const closeEditModal = () => {
  editingPage.value = null
  editingContent.value = ''
}

// ページ更新
const handleUpdatePage = async () => {
  if (!slide.value || !editingPage.value) return

  isUpdatingPage.value = true

  try {
    const updated = await slideContext.updatePage(
      slide.value.id,
      editingPage.value.id,
      { htmlContent: editingContent.value }
    )

    if (updated) {
      loadSlide()
      closeEditModal()
    }
  } catch (e) {
    console.error(e)
    alert('ページの更新に失敗しました')
  } finally {
    isUpdatingPage.value = false
  }
}

// ページ削除確認
const confirmDeletePage = async (page: SlidePage) => {
  if (!confirm(`ページ ${page.pageNumber} を削除しますか？`)) return

  if (!slide.value) return

  const success = await slideContext.deletePage(slide.value.id, page.id)
  if (success) {
    loadSlide()
  }
}

// スライド削除確認
const confirmDelete = async () => {
  if (!confirm(`「${slide.value?.slideName}」を削除しますか？この操作は取り消せません。`)) return

  const success = await slideContext.deleteSlide(slideId)
  if (success) {
    await router.push('/slides')
  }
}

// HTML切り詰め
const truncateHtml = (html: string) => {
  if (html.length <= 200) return html
  return html.substring(0, 200) + '...'
}

// 日付フォーマット
const formatDate = (date: Date) => {
  return date.toLocaleDateString('ja-JP', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

const formatDateTime = (date: Date) => {
  return date.toLocaleString('ja-JP', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  })
}

// マウント時に読み込み
onMounted(() => {
  loadSlide()
})

// スライドが変更されたら再読み込み
watch(() => slideContext.slides.value, () => {
  loadSlide()
}, { deep: true })
</script>
