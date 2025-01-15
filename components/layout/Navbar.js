import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="fixed w-full top-0 bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-xl font-bold">
              이희창 강사
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-900 hover:text-gray-600">
              홈
            </Link>
            <Link href="/portfolio" className="text-gray-900 hover:text-gray-600">
              포트폴리오
            </Link>
            <Link href="#contact" className="text-gray-900 hover:text-gray-600">
              연락처
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;