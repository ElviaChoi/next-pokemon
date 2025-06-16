"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 text-center p-8">
      <h1 className="text-4xl font-bold text-red-600 mb-4">
        404 - 페이지를 찾을 수 없습니다
      </h1>
      <p className="text-lg text-gray-700 mb-6">
        요청하신 페이지가 존재하지 않아요...
      </p>
      <Link
        href="/"
        className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-md transition"
      >
        홈으로 돌아가기
      </Link>
    </div>
  );
}
