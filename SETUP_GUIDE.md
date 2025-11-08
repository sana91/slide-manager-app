# 🚀 セットアップガイド

## 📋 前提条件

以下のソフトウェアがインストールされている必要があります:

- **Node.js** 18.x 以上（推奨: 20.x LTS）
- **npm** または **yarn**

## 📦 インストール手順

### 1. プロジェクトの展開

圧縮ファイルをダウンロードして展開します:

```bash
tar -xzf slide-manager-app.tar.gz
cd slide-manager-app
```

### 2. 依存関係のインストール

```bash
npm install
```

**注意**: インストール中に`patch-package`のエラーが表示される場合がありますが、
これは無視しても問題ありません。依存関係は正常にインストールされています。

### 3. 開発サーバーの起動

```bash
npm run dev
```

ブラウザで `http://localhost:3000` を開いてください。

## 🎨 カスタマイズ

### カラーテーマの変更

`tailwind.config.ts` でカスタムカラーを定義できます:

```typescript
theme: {
  extend: {
    colors: {
      primary: {
        // お好みの色に変更
      }
    }
  }
}
```

### レイアウトの変更

`layouts/default.vue` でアプリケーション全体のレイアウトを調整できます。

## 🏗️ ビルドとデプロイ

### 本番ビルド

```bash
npm run build
```

ビルド成果物は `.output/public` に生成されます。

### プレビュー

本番ビルドをローカルでプレビュー:

```bash
npm run preview
```

### 静的サイト生成

```bash
npm run generate
```

生成された静的ファイルは `.output/public` に出力されます。
これらのファイルを任意の静的ホスティングサービス（Netlify、Vercel、GitHub Pagesなど）にデプロイできます。

## 🔧 トラブルシューティング

### ポート3000が使用中の場合

別のポートで起動:

```bash
PORT=3001 npm run dev
```

### node_modulesの再インストール

問題が発生した場合:

```bash
rm -rf node_modules package-lock.json
npm install
```

### Tailwind CSSが反映されない

Nuxtの準備を再実行:

```bash
npm run postinstall
```

## 📚 次のステップ

1. `pages/` にページを追加してルーティングを拡張
2. `components/` に再利用可能なコンポーネントを作成
3. `composables/` にビジネスロジックを追加
4. `types/index.ts` で型定義を拡張

## 💬 サポート

質問や問題がある場合は、README.mdの開発ガイドラインを参照してください。
