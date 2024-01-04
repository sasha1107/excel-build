import React from 'react';
import { useTranslation } from '@/app/i18n';
import Link from 'next/link';

const HashLink = async ({
  lng,
  id,
  level,
  text,
}: {
  lng: string;
  id: string;
  level: number;
  text: string;
}) => {
  const { t } = await useTranslation(lng);
  const className = `hover:before:content-['#'] hover:before:mr-2 hover:before:text-primary-300 transition-all mt-4 scroll-mt-[70px]`;
  const heading = React.createElement(`h${level}`, { id, className }, t(text));
  return <Link href={`#${id}`}>{heading}</Link>;
};

export default HashLink;
