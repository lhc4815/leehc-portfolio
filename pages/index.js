import Head from 'next/head';
import Navbar from '../components/layout/Navbar';
import { contactInfo } from '../constants/contactInfo';

export default function Home() {
  return (
    <>
      <Head>
        <title>이희창 강사 | 입시 컨설팅</title>
        <meta name="description" content="10년 이상의 입시 컨설팅 경험을 가진 전문 강사입니다. 학생부 종합전형, 수시 전략 전문." />
        <meta name="keywords" content="입시컨설팅,학생부,수시전형,입시강사,이희창" />
      </Head>

      <div className="min-h-screen bg-white">
        <Navbar />
        
        {/* 메인 프로필 섹션 */}
        <div className="pt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
              <div className="relative flex-shrink-0">
                <img 
                  src="/api/placeholder/300/400"
                  alt="이희창 강사 프로필" 
                  className="rounded-lg shadow-lg object-cover w-72 h-96"
                />
              </div>
              <div className="flex-grow">
                <div className="max-w-2xl">
                  <h1 className="text-4xl font-bold text-gray-900 mb-4">
                    이희창 강사
                  </h1>
                  <p className="text-lg text-gray-600 mb-6">
                    "학생의 잠재력을 발견하고 성장을 이끄는 전문 입시 컨설턴트"
                  </p>
                  <div className="bg-gray-50 rounded-lg p-6">
                    <dl className="space-y-4">
                      <div className="flex border-b border-gray-200 pb-3">
                        <dt className="font-medium text-gray-900 w-24">경력</dt>
                        <dd className="text-gray-600">10년+ 입시 컨설팅</dd>
                      </div>
                      <div className="flex border-b border-gray-200 pb-3">
                        <dt className="font-medium text-gray-900 w-24">전문분야</dt>
                        <dd className="text-gray-600">학생부 종합전형, 수시 전략</dd>
                      </div>
                      <div className="flex border-b border-gray-200 pb-3">
                        <dt className="font-medium text-gray-900 w-24">자격</dt>
                        <dd className="text-gray-600">입시 컨설턴트 1급</dd>
                      </div>
                      <div className="flex border-b border-gray-200 pb-3">
                        <dt className="font-medium text-gray-900 w-24">강의이력</dt>
                        <dd className="text-gray-600">주요 입시학원 10곳 이상 출강</dd>
                      </div>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 연락처 섹션 */}
        <div id="contact" className="bg-gray-50 py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900">상담 문의</h2>
              <p className="mt-4 text-xl text-gray-600">궁금하신 사항이 있으시다면 언제든 연락주세요</p>
            </div>
            
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {contactInfo.map((info, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-8 text-center">
                  <div className="flex justify-center mb-4">
                    <info.icon className="h-8 w-8 text-gray-900" />
                  </div>
                  <h3 className="text-xl font-medium text-gray-900 mb-2">{info.title}</h3>
                  <p className="text-gray-900 font-medium mb-2">{info.content}</p>
                  <p className="text-gray-600 text-sm">{info.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}