import React from 'react';
import { redirect } from 'next/navigation';
export default async function Page({
  params: { lng },
}: {
  params: {
    lng: 'ko' | 'en';
  };
}) {
  redirect(`${lng}/docs`);
  return <div>page</div>;
}
