# スライド生成ガイド

このプロジェクトでは、複数の方法でスライドページを自動生成できます。

## 方法1: npm script（推奨）

```bash
npm run generate:slides <slide_code>
```

### 前提条件
- `scripts/src/<slide_code>.tsv` ファイルが存在すること
- TSVファイルには以下の列が必要: `title`, `body`, `style`
- ヘッダー行を含む必要があります

### 例
```bash
# MY_SLIDEという名前のスライドを生成（TSVファイルから自動的にページ数を取得）
npm run generate:slides MY_SLIDE

# PRODUCT_INTROという名前のスライドを生成
npm run generate:slides PRODUCT_INTRO
```

## 方法2: シェルスクリプト

```bash
./generate-slides.sh <slide_code>
```

### 例
```bash
./generate-slides.sh MY_SLIDE
```

## 方法3: Makefile

```bash
make generate-slides SLIDE_CODE=<code>
```

### 例
```bash
make generate-slides SLIDE_CODE=MY_SLIDE
```

## 方法4: Node.jsスクリプト直接実行

```bash
node scripts/generate-slides.cjs <slide_code>
```

### 例
```bash
node scripts/generate-slides.cjs MY_SLIDE
```

## TSVファイルの形式

スライドを生成するには、`scripts/src/<slide_code>.tsv` ファイルが必要です。

### TSVファイルの構造

```tsv
title	body	style
ページ1のタイトル	<div>ページ1のコンテンツ</div>	/* ページ1のスタイル */
ページ2のタイトル	<div>ページ2のコンテンツ</div>	/* ページ2のスタイル */
ページ3のタイトル	<div>ページ3のコンテンツ</div>	/* ページ3のスタイル */
```

- **ヘッダー行**: `title`, `body`, `style` の3列が必要
- **データ行**: 各行が1ページに対応
- **ページ数**: データ行の数が自動的にページ数として使用されます

## 生成されるもの

上記のコマンドを実行すると、以下が自動生成されます：

```
pages/slide/<slide_code>/
├── 1.vue
├── 2.vue
├── 3.vue
├── ...
└── <n>.vue  (TSVファイルのデータ行数に応じて自動生成)
```

### 生成されるファイルの特徴

- ✅ Tailwind CSSでスタイリング済み
- ✅ 前へ/次へのナビゲーションリンク付き
- ✅ ホームへ戻るリンク付き
- ✅ レスポンシブデザイン
- ✅ すぐに編集可能なテンプレート

## 既存のスライドディレクトリへの対処

既にスライドディレクトリが存在する場合、確認プロンプトが表示されます：

```
⚠️  Warning: Directory already exists: pages/slide/MY_SLIDE
Continue and overwrite existing files? (y/N):
```

- `y` を入力すると、既存ファイルを上書きします
- `N` または他の入力で、操作をキャンセルします

## アクセスURL

生成されたスライドには以下のURLでアクセスできます：

```
http://localhost:3000/slide/<slide_code>/1
http://localhost:3000/slide/<slide_code>/2
...
```

## スライドの編集

生成されたVueファイルを直接編集してコンテンツを追加・変更してください：

```bash
# エディタで開く
code pages/slide/MY_SLIDE/1.vue

# または
vim pages/slide/MY_SLIDE/1.vue
```

## トラブルシューティング

### エラー: slide_code cannot be empty
- スライドコードが指定されていません
- 引数を正しく指定してください

### エラー: TSV file not found
- `scripts/src/<slide_code>.tsv` ファイルが存在しません
- TSVファイルを作成してから実行してください

### エラー: TSV file must have "title", "body", and "style" columns
- TSVファイルのヘッダー行に `title`, `body`, `style` の3列が必要です
- ヘッダー行を確認してください

### エラー: TSV file must have at least a header row and one data row
- TSVファイルにはヘッダー行と少なくとも1行のデータ行が必要です

### Permission denied
- シェルスクリプトに実行権限がない場合：
  ```bash
  chmod +x generate-slides.sh
  ```

## 参考

既存のサンプルスライド：
- `pages/slide/B0FPPSR9ZW/1.vue`

このファイルを参考にカスタマイズできます。
