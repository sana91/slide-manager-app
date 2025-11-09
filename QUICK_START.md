# クイックスタートガイド

## スライド生成の3つの方法

### 前提条件
- `scripts/src/<slide_code>.tsv` ファイルが必要です
- TSVファイルには `title`, `body`, `style` の3列が必要です
- ページ数はTSVファイルのデータ行数から自動的に取得されます

### 1️⃣ npm script（最も簡単）

```bash
npm run generate:slides MY_SLIDE
```

### 2️⃣ シェルスクリプト

```bash
./generate-slides.sh MY_SLIDE
```

### 3️⃣ Make

```bash
make generate-slides SLIDE_CODE=MY_SLIDE
```

## 実行例

```bash
# 例1: プロダクト紹介スライドを生成（TSVファイルから自動的にページ数を取得）
npm run generate:slides PRODUCT_INTRO

# 例2: チュートリアルスライドを生成
npm run generate:slides TUTORIAL

# 例3: 会社概要スライドを生成
npm run generate:slides COMPANY_PROFILE
```

## 生成後の確認

開発サーバーを起動：
```bash
npm run dev
```

ブラウザでアクセス：
```
http://localhost:3000/slide/MY_SLIDE/1
http://localhost:3000/slide/MY_SLIDE/2
...
```

## スライドの編集

生成されたファイルを直接編集：
```bash
# VS Codeで開く
code pages/slide/MY_SLIDE/1.vue

# vimで開く
vim pages/slide/MY_SLIDE/1.vue
```

## 詳細情報

- 詳しい使い方: `SLIDE_GENERATION.md`
- サンプル: `pages/slide/B0FPPSR9ZW/1.vue`

---

**💡 Tip**: 最初のスライド作成時は、サンプルファイルを参考にしてください！
