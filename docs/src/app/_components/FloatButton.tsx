'use client';

import React from 'react';
import TopIcon from '@/assets/top.svg';

const FloatButton = () => {
  return (
    <button
      className='fixed bg-transparent right-8 bottom-8 bg-primary-400 p-3 rounded-full text-lg text-primary-800 z-50'
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
