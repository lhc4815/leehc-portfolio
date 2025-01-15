import React from 'react';
import Navbar from '../components/layout/Navbar';
import { Calendar, Clock } from 'lucide-react';

export default function Portfolio() {
  // 샘플 포트폴리오 데이터
  const portfolioItems = [
    {
      id: 1,
      title: "2024 수시 전형 설명회",
      date: "2024-01-15",
      description: "학부모와 학생을 위한 2024 수시 전형 설명회 현장",
      image: "/api/placeholder/400/300",
      content: "수시 전형의 주요 변경사항과 합격 전략에 대해 설명하는 시간을 가졌습니다...",
      readingTime: "5분"
    },
    {
      id: 2,
      title: "학생부 작성 워크샵",
      date: "2024-01-10",
      description: "효과적인 학생부 작성을 위한 실전 워크샵",
      image: "/api/placeholder/400/300",
      content: "실제 사례를 바탕으로 학생부 작성 노하우를 공유했습니다...",
      readingTime: "3분"
    },
  ];

  return (
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
                    {item.date}
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
  );
}