import React from 'react';
import Link from 'next/link';
import NpmIcon from '@/assets/npm.svg';
import MailIcon from '@/assets/mail.svg';
import CopyrightIcon from '@/assets/copyright.svg';
import HandMetalIcon from '@/assets/hand-metal.svg';

const Footer = () => {
  const text = [
    `     ____       __   __      ____       ____       __         ____       __  __      ______      __         ____      `,
    ,
    `    /\\  _\`\\    /\\ \\ /\\ \\    /\\  _\`\\    /\\  _\`\\    /\\ \\       /\\  _\`\\    /\\ \\/\\ \\    /\\__  _\\    /\\ \\       /\\  _\`\\    `,
    ,
    `    \\ \\ \\L\\_\\  \\ \`\\ /'/'\\   \\ \\ \\/\\_\\  \\ \\ \\L\\_\\  \\ \\ \\      \\ \\ \\L\\ \\  \\ \\ \\ \\ \\   \\/_/\\ \\/    \\ \\ \\      \\ \\ \\/\\ \\  `,
    ,
    `     \\ \\  _\\L   \`\\  > <      \\ \\ \\/_/_  \\ \\  _\\L   \\ \\ \\  __  \\ \\  _ <'  \\ \\ \\ \\ \\     \\ \\ \\     \\ \\ \\  __  \\ \\ \\ \\ \\ `,
    ,
    `      \\ \\ \\L\\ \\    \\/'\\/\`\\    \\ \\ \\L\\ \\  \\ \\ \\L\\ \\  \\ \\ \\L\\ \\  \\ \\ \\L\\ \\  \\ \\ \\_\\ \\     \\_\\ \\__   \\ \\ \\L\\ \\  \\ \\ \\_\\ \\`,
    ,
    `       \\ \\____/    /\\_\\\\ \\_\\   \\ \\____/   \\ \\____/   \\ \\____/   \\ \\____/   \\ \\_____\\    /\\_____\\   \\ \\____/   \\ \\____/`,
    ,
    `        \\/___/     \\/_/ \\/_/    \\/___/     \\/___/     \\/___/     \\/___/     \\/_____/    \\/_____/    \\/___/     \\/___/ `,
    ,
  ];
  const links = [
    {
      name: 'NPM',
      icon: <NpmIcon className='w-6 h-4' />,
      url: 'https://www.npmjs.com/package/excel-build',
      target: '_blank',
    },
    {
      name: 'CONTACT',
      icon: <MailIcon className='w-4 h-4 stroke-1' />,
      url: 'mailto:sasha1107@naver.com',
    },
    {
      name: 'LICENSE',
      icon: <CopyrightIcon className='w-4 h-4 stroke-1' />,
      url: './license',
      target: '',
    },
    {
      name: 'STORY',
      icon: <HandMetalIcon className='w-4 h-4 stroke-1' />,
      url: 'https://velog.io/@sasha1107/series/%EC%97%91%EC%85%80%EB%A7%88%EC%8A%A4%ED%84%B0-%EC%8B%9C%EB%A6%AC%EC%A6%88',
      target: '_blank',
    },
  ];
  return (
    <footer className='p-4 px-40 border-t border-[#334155] mb-10 flex flex-col gap-6'>
      <div className='hover:animate-[rainbow_3s_ease-in-out_infinite]'>
        {text.map((line, i) => (
          <pre className='text-[7px] text-center leading-none' key={i}>
            {line!.split('').map((c, idx) => (
              <pre
                className='text-[7px] text-center leading-none inline cursor-default'
                key={idx}
              >
                {c}
              </pre>
            ))}
          </pre>
        ))}
      </div>
      <div className='flex font-light text-xs justify-around'>
        {links.map(({ name, icon, target, url }, i) => (
          <Link
            key={i}
            className='flex gap-2 items-center justify-center hover:text-primary-300 hover:underline'
            href={url}
            target={target}
          >
            {icon}
            {name}
          </Link>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
