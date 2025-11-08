/**
 * アプリケーション全体で使用する型定義
 */

// スライドページの型定義
export interface SlidePage {
  id: string
  pageNumber: number
  htmlContent: string
  createdAt: Date
  updatedAt: Date
}

// スライド（親）の型定義
export interface Slide {
  id: string
  slideName: string
  slideCode: string // 英数字のユニークコード
  description?: string
  pages: SlidePage[]
  createdAt: Date
  updatedAt: Date
  tags?: string[]
}

// スライド作成用の入力データ型
export interface CreateSlideInput {
  slideName: string
  slideCode: string
  description?: string
  tags?: string[]
}

// スライド更新用の入力データ型
export interface UpdateSlideInput {
  slideName?: string
  slideCode?: string
  description?: string
  tags?: string[]
}

// ページ作成用の入力データ型
export interface CreatePageInput {
  slideId: string
  htmlContent: string
}

// ページ更新用の入力データ型
export interface UpdatePageInput {
  htmlContent: string
}

// ページネーション型
export interface Pagination {
  page: number
  pageSize: number
  total: number
  totalPages: number
}

// フィルター型
export interface SlideFilters {
  searchQuery?: string
  tags?: string[]
  sortBy?: 'createdAt' | 'updatedAt' | 'slideName'
  sortOrder?: 'asc' | 'desc'
}

// スライドコードのバリデーション結果
export interface SlideCodeValidation {
  isValid: boolean
  message?: string
}
