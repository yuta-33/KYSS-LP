import "./globals.css";

export const metadata = {
  title: "KYSS 2026",
  description:
    "アイデアのその先へ。プレゼンで終わらない挑戦を、高知から。KYSS 2026 のエントリー受付ページです。",
  openGraph: {
    title: "KYSS 2026",
    description:
      "若者のアイデアや事業を実装と継続につなげる、KYSS 2026 のエントリー受付ページです。",
    type: "website",
    locale: "ja_JP"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
