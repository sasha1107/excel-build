'use client';

import React, { useEffect, useState } from 'react';
import { languages } from '../i18n/settings';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import GitHubIcon from '@/assets/mark-github.svg';
import TranslateIcon from '@/assets/translate.svg';
import { useTranslation } from '../i18n';
import Logo from '@/assets/logo.svg';
import SunIcon from '@/assets/sun.svg';
import MoonIcon from '@/assets/moon.svg';

const Header = ({ lng }: { lng: string }) => {
  const pathName = usePathname();
  const matchPath = (path: string) => {
    return pathName?.endsWith(path) ? 'text-primary-300' : '';
  };
  const otherLang = languages.filter((l) => lng !== l)[0];
  const router = useRouter();
  const currPath = pathName.split('/').slice(2).join('/');
  return (
    <header className='h-[60px] px-8 flex justify-between items-center sticky top-0 z-10 backdrop-blur border-b border-[#334155]'>
      <div className='flex gap-20'>
        <h1>
          <button
            className='flex items-center'
            onClick={() => router.replace(`/${lng}/docs`)}
          >
            <Logo className='hover:text-primary-200 ' />
          </button>
        </h1>
        {/* <nav className='flex gap-6 text-sm'>
          <Link
            href={`docs`}
            className={`hover:text-primary-200 ${matchPath(`docs`)}`}
          >
            {lng === 'ko' ? '문서' : 'Docs'}
          </Link>
          <Link
            href={`examples`}
            className={`hover:text-primary-200 ${matchPath(`examples`)}`}
          >
            {lng === 'ko' ? '예제' : 'Examples'}
          </Link>
        </nav> */}
      </div>
      <div className='flex gap-4 items-center'>
        {/* <button
          className='dark:text-primary-200'
          onClick={() => {
            document.documentElement.classList.toggle('dark');
          }}
        >
          {localStorage.getItem('thmee') === 'dark' ? (
            <SunIcon width={18} height={18} />
          ) : (
            <MoonIcon width={18} height={18} />
          )}
        </button> */}
        <button
          onClick={() => router.replace(`/${otherLang}/${currPath || ''}`)}
          className='flex gap-1 items-center border-[0.5px] rounded-full px-2 hover:text-primary-200 border-current font-light'
        >
          <TranslateIcon width={18} height={18} />
          {otherLang}
        </button>
        <Link
          href='https://github.com/sasha1107/excel-build'
          className='hover:text-primary-200'
        >
          <GitHubIcon width={20} height={20} />
        </Link>
      </div>
    </header>
  );
};

export default Header;
