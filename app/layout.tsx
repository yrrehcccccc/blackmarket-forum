import type { Metadata, Viewport } from "next";
import "@fontsource/dotgothic16/400.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "日行一善 · M-TOWN 黑市论坛",
  description: "日行一善 · M-TOWN 匿名论坛互动演示",
  other: {
    "codex-preview": "development",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#241b2f",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
