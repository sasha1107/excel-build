import React from 'react';
import Link from 'next/link';
import NpmIcon from '@/assets/npm.svg';
const Footer = () => {
  const text = `
     ____       __   __      ____       ____       __         ____       __  __      ______      __         ____      
    /\\  _\`\\    /\\ \\ /\\ \\    /\\  _\`\\    /\\  _\`\\    /\\ \\       /\\  _\`\\    /\\ \\/\\ \\    /\\__  _\\    /\\ \\       /\\  _\`\\    
    \\ \\ \\L\\_\\  \\ \`\\ /'/'\\   \\ \\ \\/\\_\\  \\ \\ \\L\\_\\  \\ \\ \\      \\ \\ \\L\\ \\  \\ \\ \\ \\ \\   \\/_/\\ \\/    \\ \\ \\      \\ \\ \\/\\ \\  
     \\ \\  _\\L   \`\\  > <      \\ \\ \\/_/_  \\ \\  _\\L   \\ \\ \\  __  \\ \\  _ <'  \\ \\ \\ \\ \\     \\ \\ \\     \\ \\ \\  __  \\ \\ \\ \\ \\ 
      \\ \\ \\L\\ \\    \\/'\\/\`\\    \\ \\ \\L\\ \\  \\ \\ \\L\\ \\  \\ \\ \\L\\ \\  \\ \\ \\L\\ \\  \\ \\ \\_\\ \\     \\_\\ \\__   \\ \\ \\L\\ \\  \\ \\ \\_\\ \\
       \\ \\____/    /\\_\\\\ \\_\\   \\ \\____/   \\ \\____/   \\ \\____/   \\ \\____/   \\ \\_____\\    /\\_____\\   \\ \\____/   \\ \\____/
        \\/___/     \\/_/ \\/_/    \\/___/     \\/___/     \\/___/     \\/___/     \\/_____/    \\/_____/    \\/___/     \\/___/ 
    `;

  return (
    <footer className='p-4 px-40 border-t border-[#334155] mb-10 flex flex-col gap-2'>
      <pre className='text-[7px] hover:text-primary-300 text-center'>
        {text}
      </pre>
      <div className='flex font-light text-xs justify-aroun'>
        <Link
          className='flex gap-2 items-center hover:text-primary-300'
          href={'https://www.npmjs.com/package/excel-build'}
          target='_blank'
        >
          <NpmIcon className='w-5 h-5' />
          NPM
        </Link>
        <Link
          href={''}
          className='flex gap-2 items-center hover:text-primary-300'
        >
          CONTACT
        </Link>
        <Link
          href={''}
          className='flex gap-2 items-center hover:text-primary-300'
        >
          LICENCE
        </Link>
        <Link
          href={''}
          className='flex gap-2 items-center hover:text-primary-300'
        >
          STORY
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
