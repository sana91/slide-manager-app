# スライド生成ガイド

このプロジェクトでは、複数の方法でスライドページを自動生成できます。

## 方法1: npm script（推奨）

```bash
npm run generate:slides <slide_code> <page_count>
```

### 例
```bash
# MY_SLIDEという名前で5ページのスライドを生成
npm run generate:slides MY_SLIDE 5

# PRODUCT_INTROという名前で10ページのスライドを生成
npm run generate:slides PRODUCT_INTRO 10
```

## 方法2: シェルスクリプト

```bash
./generate-slides.sh <slide_code> <page_count>
```

### 例
```bash
./generate-slides.sh MY_SLIDE 5
```

## 方法3: Makefile

```bash
make generate-slides SLIDE_CODE=<code> PAGES=<count>
```

### 例
```bash
make generate-slides SLIDE_CODE=MY_SLIDE PAGES=5
```

## 方法4: Node.jsスクリプト直接実行

```bash
node scripts/generate-slides.js <slide_code> <page_count>
```

### 例
```bash
node scripts/generate-slides.js MY_SLIDE 5
```

## 生成されるもの

上記のコマンドを実行すると、以下が自動生成されます：

```
pages/slide/<slide_code>/
├── 1.vue
├── 2.vue
├── 3.vue
├── ...
└── <page_count>.vue
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

### エラー: SLIDE_CODE cannot be empty
- スライドコードが指定されていません
- 引数を正しく指定してください

### エラー: page_count must be a positive number
- ページ数は1以上の整数を指定してください

### Permission denied
- シェルスクリプトに実行権限がない場合：
  ```bash
  chmod +x generate-slides.sh
  ```

## 参考

既存のサンプルスライド：
- `pages/slide/B0FPPSR9ZW/1.vue`

このファイルを参考にカスタマイズできます。
