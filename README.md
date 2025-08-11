# Todo App

## 概要
このプロジェクトは、Next.js と React (TypeScript) を使用して構築されたシンプルなTODOアプリケーションです。主にこれらの技術の学習と実践を目的としています。

## 特徴
-   TODOの追加、完了、削除
-   TODOのフィルタリング（全て、完了済み、未完了）
-   TODOの期日設定と期日順ソート
-   Zustand を使用した状態管理
-   Tailwind CSS を使用したスタイリング

## 技術スタック
-   **フレームワーク:** Next.js
-   **UIライブラリ:** React
-   **言語:** TypeScript
-   **状態管理:** Zustand
-   **CSSフレームワーク:** Tailwind CSS
-   **日付操作:** date-fns

## セットアップと実行

### 1. リポジトリのクローン
```bash
git clone https://github.com/ryuari0424/nextjs_todoapp_test.git
cd todo-app
```

### 2. 依存関係のインストール
```bash
npm install
# または
yarn install
```

### 3. 開発サーバーの起動
```bash
npm run dev
# または
yarn dev
```
ブラウザで `http://localhost:3000` にアクセスしてください。

### 4. プロジェクトのビルド
```bash
npm run build
# または
yarn build
```

### 5. 本番サーバーの起動
```bash
npm run start
# または
yarn start
```

## 学習ポイント
-   Next.js のルーティングとページ構造の理解
-   React コンポーネントの作成と管理
-   TypeScript を用いた型安全な開発の実践
-   Zustand を用いたシンプルで効率的な状態管理
-   Tailwind CSS を用いたユーティリティファーストなスタイリング
-   日付操作ライブラリ `date-fns` の利用方法

## 今後の改善点
-   永続化の強化（例: ローカルストレージ以外のバックエンド連携）
-   ユーザー認証機能の追加
-   よりリッチなUI/UXの実現
-   テストの追加
