# Slide Manager App

HTMLスライドを管理・登録・閲覧できるアプリケーション

## 🚀 技術スタック

- **Nuxt 3** - Vue.jsフレームワーク（SPAモード）
- **Vue 3** - Composition API
- **TypeScript** - 型安全性
- **Tailwind CSS** - ユーティリティファーストCSS（Arbitrary Values対応）
- **Composables + Provide/Inject** - 状態管理
- **DOMPurify** - HTMLサニタイゼーション

## 📐 アーキテクチャ

### 設計原則

- **関心の分離**: ビジネスロジックとUIコンポーネントの完全な分離
- **状態管理**: Composables + Provide/Injectパターン
- **型安全性**: TypeScriptによる厳格な型チェック
- **SPAモード**: クライアントサイドのみで動作
- **親子構造**: スライド（親）→ ページ（子）の階層構造

### データ構造

```typescript
スライド (Slide)
├── id: string
├── slideName: string
├── slideCode: string (英数字、3-50文字)
├── description?: string
├── tags?: string[]
├── pages: SlidePage[]
├── createdAt: Date
└── updatedAt: Date

ページ (SlidePage)
├── id: string
├── pageNumber: number (1から連番)
├── htmlContent: string
├── createdAt: Date
└── updatedAt: Date
```

### URL構造

- スライド一覧: `/slides`
- スライド作成: `/slides/create`
- スライド詳細: `/slides/{id}`
- スライド表示: `/slide/{slideCode}/{pageNumber}`

### ディレクトリ構造

```
slide-manager-app/
├── assets/              # CSS、画像などの静的アセット
│   └── css/
│       └── tailwind.css
├── components/          # 再利用可能なVueコンポーネント
├── composables/         # ビジネスロジックとステート管理
│   ├── useSlides.ts           # スライド管理ロジック
│   └── useSlideProvider.ts    # Provide/Inject設定
├── layouts/             # レイアウトコンポーネント
│   └── default.vue
├── pages/               # ルーティングページ
│   ├── index.vue        # トップページ
│   ├── slides/
│   │   ├── index.vue    # スライド一覧
│   │   ├── create.vue   # スライド作成
│   │   └── [id].vue     # スライド詳細
│   └── slide/
│       └── [slideCode]/
│           └── [pageNumber].vue  # スライド表示
├── types/               # TypeScript型定義
│   └── index.ts
├── app.vue              # ルートコンポーネント
├── nuxt.config.ts       # Nuxt設定
└── tailwind.config.ts   # Tailwind設定
```

## 🔧 セットアップ

### 1. 依存関係のインストール

```bash
npm install --ignore-scripts
npx nuxi prepare
```

### 2. 開発サーバーの起動

```bash
npm run dev
```

開発サーバーは `http://localhost:3000` で起動します。

### 3. ビルド

```bash
npm run build
```

### 4. プレビュー

```bash
npm run preview
```

## 💡 機能

### ✅ 実装済み

- **スライド管理**
  - スライドの作成・編集・削除
  - スライドコード（英数字）の自動バリデーション
  - タグ管理
  - 検索・フィルタリング機能

- **ページ管理**
  - HTMLソースコードからのページ作成
  - ページの編集・削除
  - 自動連番付与（1から順番に）
  - ページプレビュー機能

- **スライド表示**
  - 専用URL（/slide/{code}/{page}）でのアクセス
  - キーボードナビゲーション（← / →）
  - ページ番号表示
  - HTMLサニタイゼーション

- **データ永続化**
  - LocalStorageによるデータ保存
  - 静的ファイル情報の管理

## 📝 使い方

### 1. スライド作成

1. 「新規作成」ボタンをクリック
2. スライド名とスライドコード（英数字）を入力
3. 説明やタグを追加（任意）
4. 「スライドを作成」をクリック

### 2. ページ追加

1. スライド詳細ページで「ページを追加」をクリック
2. HTMLソースコードを入力
3. 「ページを追加」をクリック
4. ページ番号が自動で付与されます

### 3. スライド表示

- スライド詳細ページの「プレビュー」ボタンをクリック
- または直接 `/slide/{slideCode}/{pageNumber}` にアクセス
- キーボードの ← / → キーでページ移動

## 🎯 Composablesの使用方法

### スライド管理

```typescript
// コンポーネント内でスライド管理機能を使用
const slideContext = injectSlideContext()

// スライド作成
const newSlide = await slideContext.createSlide({
  slideName: 'プレゼン2024',
  slideCode: 'presentation2024',
  description: '年次報告会',
  tags: ['ビジネス']
})

// ページ追加
const newPage = await slideContext.addPage({
  slideId: slide.id,
  htmlContent: '<h1>タイトル</h1><p>内容</p>'
})

// スライド検索
const slide = slideContext.getSlideByCode('presentation2024')

// フィルタリング
slideContext.updateFilters({ searchQuery: '2024' })
const filtered = slideContext.filteredSlides.value
```

### バリデーション

```typescript
// スライドコードのバリデーション
const validation = slideContext.validateSlideCode('myslide123')
if (!validation.isValid) {
  console.error(validation.message)
}
```

## 🎨 Tailwind Arbitrary Valuesの活用

```vue
<template>
  <div 
    class="w-[calc(100%-2rem)] h-[50vh] bg-[#1a1a1a]"
    :class="[`p-[${spacing}px]`]"
  >
    <!-- 柔軟なスタイリング -->
  </div>
</template>
```

## 🔐 セキュリティ

- **HTMLサニタイゼーション**: DOMPurifyを使用してXSS攻撃を防止
- **スライドコードバリデーション**: 英数字のみ許可、重複チェック
- **型安全性**: TypeScriptによる厳格な型チェック

## 📦 今後の拡張予定

- [ ] バックエンドAPI連携
- [ ] データベース永続化
- [ ] 認証・認可機能
- [ ] スライドのエクスポート（PDF、画像）
- [ ] テーマ・スタイル管理
- [ ] マルチメディア対応（画像、動画）
- [ ] コラボレーション機能
- [ ] プレゼンテーションモード（全画面表示）
- [ ] スライドテンプレート機能

## 🐛 トラブルシューティング

### npm installでエラーが出る

```bash
# --ignore-scriptsオプションを使用
npm install --ignore-scripts
npx nuxi prepare
```

### ページが表示されない

- LocalStorageのデータを確認
- ブラウザのコンソールでエラーを確認
- スライドコードとページ番号が正しいか確認

## 📄 ライセンス

MIT
