'use client';

import React from 'react';
import TopIcon from '@/assets/top.svg';

const FloatButton = () => {
  return (
    <button
      className='fixed right-8 bottom-8 bg-primary-300 p-3 rounded-full text-lg text-primary-800 border border-priamry-100 font-lg w-11 h-11'
      onClick={() => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      }}
    >
      <TopIcon />
    </button>
  );
};

export default FloatButton;
