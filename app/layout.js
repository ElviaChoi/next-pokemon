import "./globals.css";
import Link from "next/link";
import { Providers } from "../store/provider";

export const metadata = {
  title: "포켓몬 도감",
  description: "Next.js 기반 포켓몬 도감",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body className="bg-gray-200 min-h-screen text-black">
        <Providers>
          <header className="bg-black text-white text-center text-3xl py-4 border-t-[18px] border-red-600">
            포켓몬 도감
          </header>
          <nav className="bg-white border-b-2 border-gray-700 py-2 flex gap-4 justify-center text-lg">
            <Link href="/">메인</Link>
            <Link href="/favorite">찜목록</Link>
          </nav>
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  );
}
