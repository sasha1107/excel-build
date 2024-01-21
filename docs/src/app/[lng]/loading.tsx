import React from 'react';

const loading = () => {
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
  return (
    <section className='flex justify-center items-center h-screen'>
      <div className='animate-[rainbow_3s_ease-in-out_infinite] flex-grow'>
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
    </section>
  );
};

export default loading;
