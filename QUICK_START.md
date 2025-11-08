# クイックスタートガイド

## スライド生成の3つの方法

### 1️⃣ npm script（最も簡単）

```bash
npm run generate:slides MY_SLIDE 5
```

### 2️⃣ シェルスクリプト

```bash
./generate-slides.sh MY_SLIDE 5
```

### 3️⃣ Make

```bash
make generate-slides SLIDE_CODE=MY_SLIDE PAGES=5
```

## 実行例

```bash
# 例1: プロダクト紹介スライドを10ページ生成
npm run generate:slides PRODUCT_INTRO 10

# 例2: チュートリアルスライドを7ページ生成
npm run generate:slides TUTORIAL 7

# 例3: 会社概要スライドを5ページ生成
npm run generate:slides COMPANY_PROFILE 5
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
