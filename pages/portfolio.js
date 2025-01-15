import Head from 'next/head';
import Navbar from '../components/layout/Navbar';
import { Calendar, Clock } from 'lucide-react';
import { formatDate } from '../utils/formatDate';
import { getPortfolioItems } from '../utils/portfolioData';

export default function Portfolio() {
  const portfolioItems = getPortfolioItems();

  return (
    <>
      <Head>
        <title>포트폴리오 | 이희창 강사</title>
        <meta name="description" content="입시 컨설팅 및 강연 활동 포트폴리오입니다. 학생부 컨설팅, 입시 전략 강연 등의 활동을 소개합니다." />
        <meta name="keywords" content="입시컨설팅,포트폴리오,강연,학생부컨설팅" />
      </Head>

      <div className="min-h-screen bg-gray-50">
        <Navbar />
        
        {/* 포트폴리오 헤더 */}
        <div className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 mt-16">
            <h1 className="text-3xl font-bold text-gray-900">포트폴리오</h1>
            <p className="mt-2 text-lg text-gray-600">입시 컨설팅 및 강연 활동 기록</p>
          </div>
        </div>

        {/* 포트폴리오 그리드 */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item) => (
              <article key={item.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-2">
                    {item.title}
                  </h2>
                  <p className="text-gray-600 mb-4">
                    {item.description}
                  </p>
                  <div className="flex items-center text-sm text-gray-500 space-x-4">
                    <div className="flex items-center">
                      <Calendar size={16} className="mr-1" />
                      {formatDate(item.date)}
                    </div>
                    <div className="flex items-center">
                      <Clock size={16} className="mr-1" />
                      {item.readingTime}
                    </div>
                  </div>
                </div>
                <div className="px-6 pb-6">
                  <button className="text-gray-900 hover:text-gray-600 font-medium">
                    자세히 보기 →
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* 페이지네이션 */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex justify-center space-x-2">
            <button className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50">
              이전
            </button>
            <button className="px-4 py-2 bg-gray-900 text-white rounded-md hover:bg-gray-800">
              1
            </button>
            <button className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50">
              2
            </button>
            <button className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50">
              다음
            </button>
          </div>
        </div>
      </div>
    </>
  );
}