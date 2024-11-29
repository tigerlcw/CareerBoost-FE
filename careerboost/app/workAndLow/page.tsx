import Link from "next/link";

export default function workAndLowPage() {
  return (
    <div className="min-h-screen bg-[#F5F5F4] flex flex-col p-6 relative">
      {/* 헤더 - Career Boost */}
      <header className="flex items-center mb-8 relative">
        <h1 className="text-5xl font-bold text-burgundy">Career Boost</h1>

        {/* 오른쪽 상단 배치 */}
        <div className="absolute top-0 right-0 flex space-x-2">
          <span className="bg-gray-200 text-gray-800 px-4 py-1 rounded-full text-sm">
            AI 플랫폼 개발자
          </span>
          <span className="bg-gray-200 text-gray-800 px-4 py-1 rounded-full text-sm">
            장그래 사원
          </span>
        </div>
      </header>

      <div className="flex flex-col md:flex-row w-full max-w-6xl mx-auto">
        {/* 왼쪽 - 아이콘 및 텍스트 */}
        <div className="flex flex-col w-full md:w-1/3 pr-6 mb-8 md:mb-0">
          <img
            src="/workandlow_logo.png"
            alt="노동·금융 법률 아이콘"
            className="w-16 h-16 mb-4"
          />
          <h2 className="text-4xl font-bold text-burgundy mb-4">노동·금융 법률</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            업무에 적합한 보고서 문장<br />
            종결어미 통일 ‘~하였다’, ‘했다’<br />
            보고서 핵심 내용이 담긴 요약과 결론
          </p>
        </div>

        {/* 오른쪽 - 버튼 영역 */}
        <div className="w-full md:w-2/3 bg-white rounded-lg shadow-md p-12 grid grid-cols-2 sm:grid-cols-3 gap-6">
          {/* 버튼들 */}
          <Link href="/chat">
            <div className="bg-white border border-gray-300 rounded-lg flex items-center justify-center h-48 shadow hover:bg-mint cursor-pointer transition">
              <h2 className="text-4xl font-bold text-burgundy">보고서</h2>
            </div>
          </Link>
          <Link href="/chat">
            <div className="bg-white border border-gray-300 rounded-lg flex items-center justify-center h-48 shadow hover:bg-mint cursor-pointer transition">
              <h2 className="text-4xl font-bold text-burgundy">이메일</h2>
            </div>
          </Link>
          <Link href="/chat">
            <div className="bg-white border border-gray-300 rounded-lg flex items-center justify-center h-48 shadow hover:bg-mint cursor-pointer transition">
              <h2 className="text-4xl font-bold text-burgundy">경조사</h2>
            </div>
          </Link>
          <Link href="/chat">
            <div className="bg-white border border-gray-300 rounded-lg flex items-center justify-center h-48 shadow hover:bg-mint cursor-pointer transition">
              <h2 className="text-3xl font-bold text-burgundy">브리핑 대본</h2>
            </div>
          </Link>
          <Link href="/chat">
            <div className="bg-white border border-gray-300 rounded-lg flex items-center justify-center h-48 shadow hover:bg-mint cursor-pointer transition">
              <h2 className="text-4xl font-bold text-burgundy">PPT</h2>
            </div>
          </Link>
          <Link href="/chat">
            <div className="bg-white border border-gray-300 rounded-lg flex items-center justify-center h-48 shadow hover:bg-mint cursor-pointer transition">
              <h2 className="text-4xl font-bold text-burgundy">그 외</h2>
            </div>
          </Link>
        </div>
      </div>

      {/* 하단 - 그리드 아이콘 */}
      <footer className="flex justify-start mt-auto">
        <Link href="/">
          <div className="cursor-pointer">
            <img
              src="/grid_icon.png"
              alt="메인페이지로 이동"
              className="w-10 h-10"
            />
          </div>
        </Link>
      </footer>
    </div>
  );
}