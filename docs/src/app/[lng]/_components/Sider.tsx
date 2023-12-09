import Link from 'next/link';
import React from 'react';
import { useTranslation } from '@/app/i18n';

const Sider = async ({ lng }: { lng: string }) => {
    const { t } = await useTranslation(lng);
    return (
        <aside className='w-48 sticky top-[76px] h-fit my-20 border rounded px-4 py-8'>
            <div className='flex flex-col gap-4'>
                <Link href='#installation'>{t('설치')}</Link>
                <Link href='#usage'>{t('사용')}</Link>
            </div>
        </aside>
    );
};

export default Sider;
