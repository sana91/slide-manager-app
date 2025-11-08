<template>
  <div class="container mx-auto px-4 py-8">
    <div class="max-w-3xl mx-auto">
      <!-- ヘッダー -->
      <div class="mb-8">
        <h1 class="text-3xl font-bold text-gray-900 mb-2">
          新規スライド作成
        </h1>
        <p class="text-gray-600">
          スライドの基本情報を入力してください
        </p>
      </div>

      <!-- エラーメッセージ -->
      <div 
        v-if="errorMessage" 
        class="mb-6 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg"
      >
        {{ errorMessage }}
      </div>

      <!-- フォーム -->
      <form @submit.prevent="handleSubmit" class="bg-white rounded-lg shadow-md p-6 space-y-6">
        <!-- スライド名 -->
        <div>
          <label for="slideName" class="block text-sm font-medium text-gray-700 mb-2">
            スライド名 <span class="text-red-500">*</span>
          </label>
          <input
            id="slideName"
            v-model="formData.slideName"
            type="text"
            required
            placeholder="例: 2024年度プレゼンテーション"
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          />
        </div>

        <!-- スライドコード -->
        <div>
          <label for="slideCode" class="block text-sm font-medium text-gray-700 mb-2">
            スライドコード <span class="text-red-500">*</span>
          </label>
          <input
            id="slideCode"
            v-model="formData.slideCode"
            type="text"
            required
            pattern="[a-zA-Z0-9]+"
            placeholder="例: presentation2024（英数字のみ）"
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            @blur="validateCode"
          />
          <p class="mt-1 text-sm text-gray-500">
            英数字のみ、3〜50文字。このコードはURLに使用されます: /slide/{{ formData.slideCode || 'code' }}/
          </p>
          <p v-if="codeValidationMessage" class="mt-1 text-sm text-red-600">
            {{ codeValidationMessage }}
          </p>
        </div>

        <!-- 説明 -->
        <div>
          <label for="description" class="block text-sm font-medium text-gray-700 mb-2">
            説明（任意）
          </label>
          <textarea
            id="description"
            v-model="formData.description"
            rows="4"
            placeholder="スライドの説明を入力してください"
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          />
        </div>

        <!-- タグ -->
        <div>
          <label for="tags" class="block text-sm font-medium text-gray-700 mb-2">
            タグ（任意）
          </label>
          <input
            id="tags"
            v-model="tagsInput"
            type="text"
            placeholder="例: ビジネス, プレゼン（カンマ区切り）"
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          />
          <p class="mt-1 text-sm text-gray-500">
            カンマ（,）で区切って複数のタグを入力できます
          </p>
        </div>

        <!-- ボタン -->
        <div class="flex items-center gap-4 pt-4">
          <button
            type="submit"
            :disabled="isSubmitting"
            class="flex-1 bg-primary-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            {{ isSubmitting ? '作成中...' : 'スライドを作成' }}
          </button>
          <NuxtLink
            to="/slides"
            class="flex-1 bg-gray-200 text-gray-700 px-6 py-3 rounded-lg font-medium text-center hover:bg-gray-300 transition-colors"
          >
            キャンセル
          </NuxtLink>
        </div>
      </form>

      <!-- 注意事項 -->
      <div class="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
        <h3 class="font-semibold text-blue-900 mb-2">📌 注意事項</h3>
        <ul class="text-sm text-blue-800 space-y-1 list-disc list-inside">
          <li>スライドコードは作成後も変更可能ですが、URLが変更されます</li>
          <li>スライド作成後、ページを追加してコンテンツを登録できます</li>
          <li>各ページはHTMLソースコードで直接編集できます</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { CreateSlideInput } from '~/types'

// Head設定
useHead({
  title: '新規スライド作成'
})

// スライド管理機能を取得
const slideContext = injectSlideContext()
const router = useRouter()

// フォームデータ
const formData = ref<CreateSlideInput>({
  slideName: '',
  slideCode: '',
  description: '',
  tags: []
})

// タグ入力用
const tagsInput = ref('')

// バリデーション
const codeValidationMessage = ref('')
const errorMessage = ref('')
const isSubmitting = ref(false)

// スライドコードのバリデーション
const validateCode = () => {
  if (!formData.value.slideCode) {
    codeValidationMessage.value = ''
    return
  }

  const validation = slideContext.validateSlideCode(formData.value.slideCode)
  codeValidationMessage.value = validation.isValid ? '' : (validation.message || '')
}

// フォーム送信
const handleSubmit = async () => {
  errorMessage.value = ''
  
  // バリデーション
  if (!formData.value.slideName.trim()) {
    errorMessage.value = 'スライド名を入力してください'
    return
  }

  if (!formData.value.slideCode.trim()) {
    errorMessage.value = 'スライドコードを入力してください'
    return
  }

  // スライドコードの最終バリデーション
  const validation = slideContext.validateSlideCode(formData.value.slideCode)
  if (!validation.isValid) {
    errorMessage.value = validation.message || 'スライドコードが不正です'
    return
  }

  // タグの処理
  if (tagsInput.value.trim()) {
    formData.value.tags = tagsInput.value
      .split(',')
      .map(tag => tag.trim())
      .filter(tag => tag.length > 0)
  }

  // 送信
  isSubmitting.value = true
  
  try {
    const newSlide = await slideContext.createSlide(formData.value)
    
    if (newSlide) {
      // 成功したら詳細ページへ遷移
      await router.push(`/slides/${newSlide.id}`)
    } else {
      errorMessage.value = slideContext.error.value || 'スライドの作成に失敗しました'
    }
  } catch (e) {
    console.error(e)
    errorMessage.value = 'エラーが発生しました'
  } finally {
    isSubmitting.value = false
  }
}

// エラークリア
watch(() => slideContext.error.value, (newError) => {
  if (newError) {
    errorMessage.value = newError
  }
})
</script>
