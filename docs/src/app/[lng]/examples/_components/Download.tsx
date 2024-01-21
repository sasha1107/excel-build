'use client';
import { FileBuilder, SheetBuilder, CellBuilder } from 'excel-build';
import React from 'react';
const Download = ({ lang }: { lang: 'ko' | 'en' }) => {
  const makeExcel = () => {
    const excelFile = new FileBuilder('Example');
    const data = [
      ['1', 'soohyun', 'sasha1107@naver.com', '01012345678', 'FE'],
      ['2', 'sasha', 'sasha981107@gmail.com', '01087654321', 'BE'],
    ];

    const sheet1 = new SheetBuilder('sheet_1').appendCustomRow(
      data[0].map((item) =>
        new CellBuilder(item)
          .setFontSize(20)
          .setFontColor('#FFFFFF')
          .setBackgroundColor('#555555')
          .setFontItalic()
          .build()
      )
    );
    const sheet2 = new SheetBuilder('sheet_2')
      .appendThead(['id', 'name', 'email', 'phone', 'department'])
      .appendTbody(data)
      .mergeCell([0, 3], [4, 3]);

    excelFile.addSheet(sheet1).addSheet(sheet2).download();
  };
  return (
    <button
      onClick={makeExcel}
      className='px-8 py-2 bg-slate-600 rounded hover:bg-primary-400 hover:text-slate-800'
    >
      {lang === 'ko' ? '다운로드' : 'Download'}
    </button>
  );
};

export default Download;
