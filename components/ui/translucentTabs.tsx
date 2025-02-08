import Image from 'next/image';
import React from 'react';

interface TranslucentTabProps {
  content: string;
  icon: string;
  link: string;
  size: string;
}

const TranslucentTab: React.FC<TranslucentTabProps> = ({ content, icon, link, size }) => {
  const css = size;

  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className={`${css} text-xs sm:text-sm bg-transparent bg-gray-700 hover:bg-gray-600 bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-lg shadow-lg flex justify-center items-center transition-transform duration-300 hover:scale-110`}>
      <Image src={icon} alt={content} width={32} height={32} className="w-8 h-8 mr-2" />
      <p className='text-white'>{content}</p>
    </a>
  );
};

export default TranslucentTab;