import React from 'react';
import Image from 'next/image';
import { Calendar, Clock } from 'lucide-react';
import { formatDate } from '../../utils/formatDate';

const PortfolioCard = ({ id, title, date, description, image, readingTime }) => {
  return (
    <article className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
      <div className="relative w-full h-48">
        <Image 
          src={image}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-2">
          {title}
        </h2>
        <p className="text-gray-600 mb-4">
          {description}
        </p>
        <div className="flex items-center text-sm text-gray-500 space-x-4">
          <div className="flex items-center">
            <Calendar size={16} className="mr-1" />
            {formatDate(date)}
          </div>
          <div className="flex items-center">
            <Clock size={16} className="mr-1" />
            {readingTime}
          </div>
        </div>
      </div>
      <div className="px-6 pb-6">
        <button className="text-gray-900 hover:text-gray-600 font-medium">
          자세히 보기 →
        </button>
      </div>
    </article>
  );
};

export default PortfolioCard;