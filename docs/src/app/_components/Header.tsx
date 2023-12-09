import React from 'react';
import { languages } from '../i18n/settings';
import Link from 'next/link';
import GitHubIcon from '@/assets/mark-github.svg';
import TranslateIcon from '@/assets/translate.svg';

import { headers } from 'next/headers';

const Header = ({ lng }: { lng: string }) => {
    const pathname = headers().get('next-url');
    const matchPath = (path: string) => {
        // console.log(pathname);
        return pathname?.endsWith(path) ? 'text-red-300' : '';
    };
    const otherLang = languages.filter((l) => lng !== l)[0];
    return (
        <header
            className='h-[60px] px-8 flex justify-between items-center sticky top-0 z-10 backdrop-blur'
            style={{ borderBottom: '1px solid #334155' }}
        >
            <div className='flex gap-8'>
                <h1>excel-build</h1>
                {/* <nav className='flex gap-2'>
                    <Link
                        href={`docs`}
                        className={`hover:text-red-300 ${matchPath(`docs`)}`}
                    >
                        docs
                    </Link>
                    <Link
                        href={`examples`}
                        className={`hover:text-red-300 ${matchPath(
                            `examples`
                        )}`}
                    >
                        examples
                    </Link>
                </nav> */}
            </div>
            <div className='flex gap-4 items-center'>
                <Link
                    href={`/${otherLang}`}
                    className='flex gap-1 items-center border rounded px-2 hover:text-cyan-500 border-current'
                >
                    <TranslateIcon width={20} height={20} />
                    {otherLang}
                </Link>
                <Link
                    href='https://github.com/sasha1107/excel-build'
                    className='hover:text-cyan-500'
                >
                    <GitHubIcon width={20} height={20} />
                </Link>
            </div>
        </header>
    );
};

export default Header;
