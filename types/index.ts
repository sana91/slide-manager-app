/**
 * アプリケーション全体で使用する型定義
 */

// スライドの型定義
export interface Slide {
  id: string
  title: string
  description?: string
  htmlContent: string
  thumbnail?: string
  createdAt: Date
  updatedAt: Date
  tags?: string[]
}

// スライド作成用の入力データ型
export interface CreateSlideInput {
  title: string
  description?: string
  htmlContent: string
  tags?: string[]
}

// スライド更新用の入力データ型
export interface UpdateSlideInput {
  title?: string
  description?: string
  htmlContent?: string
  tags?: string[]
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
  sortBy?: 'createdAt' | 'updatedAt' | 'title'
  sortOrder?: 'asc' | 'desc'
}
