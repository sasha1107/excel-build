import Link from 'next/link';
import React from 'react';
import { useTranslation } from '@/app/i18n';

const Sider = async ({ lng }: { lng: string }) => {
  const { t } = await useTranslation(lng);
  return (
    <aside
      className='w-48 sticky top-[120px] h-fit my-20 px-4
    border-l-4'
    >
      <div className='flex flex-col gap-4'>
        <Link className='hover:text-primary-200' href='#installation'>
          {t('설치')}
        </Link>
        <Link className='hover:text-primary-200' href='#usage'>
          {t('사용')}
        </Link>
        <div className='ml-4 flex flex-col gap-2'>
          <Link className='hover:text-primary-200' href='#FileBuilder'>
            FileBuilder
          </Link>
          <Link className='hover:text-primary-200' href='#SheetBuilder'>
            SheetBuilder
          </Link>
          <Link className='hover:text-primary-200' href='#CellBuilder'>
            CellBuilder
          </Link>
        </div>
      </div>
    </aside>
  );
};

export default Sider;
