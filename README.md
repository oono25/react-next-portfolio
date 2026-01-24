## react-next-portfolio

Next.js 14 + TypeScript + microCMS で構築したポートフォリオサイト。藍色ベースの落ち着いた UI に、スキル・ブログ・資格・プロフィール・お問い合わせをまとめています。

### 技術スタック
- Next.js 14 (App Router) / TypeScript / ESLint
- microCMS (コンテンツ配信)
- Nodemailer (Gmail 経由のお問い合わせ送信)
- dayjs, classnames ほか

### 主な機能
- ホーム: ヒーローとナビゲーション、モーションを効かせたビジュアル
- ブログ: microCMS からの一覧・詳細表示、再検証付きフェッチ
- スキル・資格: CMS に登録したデータを動的表示
- メンバー / プロフィール: 画像付きプロフィール表示
- お問い合わせ: Gmail 経由で管理者メールへ送信

### セットアップ
1) 依存関係をインストール
```bash
npm install
```

2) 環境変数を `.env.local` に設定
```env
MICROCMS_SERVICE_DOMAIN=your-service-id
MICROCMS_API_KEY=your-api-key
GMAIL_USER=your-gmail-address
GMAIL_APP_PASSWORD=your-gmail-app-password
CONTACT_EMAIL=recipient-address
```
- microCMS の各エンドポイント: `members`, `news`, `categories`, `skills`, `profile`, `blogs`, `certifications`
- `profile` は固定 ID を想定して取得しています。

3) 開発サーバー起動
```bash
npm run dev
```

### スクリプト
- `npm run dev` : 開発サーバー
- `npm run lint` : ESLint チェック
- `npm run build` : 本番ビルド
- `npm start` : ビルド済みアプリの起動
- `npm run deploy` : `out` ディレクトリを GitHub Pages にデプロイ（`next export` で静的出力を用意してから実行してください）

### ディレクトリ概要
- `app/` : App Router ベースのページと UI コンポーネント
- `app/_libs/` : microCMS クライアントやユーティリティ
- `app/api/contact/` : Nodemailer を使ったお問い合わせ API Route
- `public/` : 画像や静的アセット

### 開発メモ
- 画像は microCMS のアセットドメイン `images.microcms-assets.io` を許可
- Gmail を使うため、アプリパスワードを利用してください
