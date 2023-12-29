// "use client"

import Link from 'next/link';
import { Code } from 'bright';
import { useTranslation } from '../i18n';
import { HashLink, Sider } from './_components';
export default async function Home({ params: { lng } }: any) {
  const text = `
   ____   ____   ____   ____   ____   ____   ____ 
  ||S || ||O || ||O || ||H || ||Y || ||U || ||N ||
  ||__|| ||__|| ||__|| ||__|| ||__|| ||__|| ||__||
  |/__\\| |/__\\| |/__\\| |/__\\| |/__\\| |/__\\| |/__\\|
    `;
  var css =
    'text-shadow: 1px 1px 2px black, 0 0 1em blue, 0 0 0.2em blue; color: pink;';
  // console.log(`%c${text}`, css);
  const { t } = await useTranslation(lng);
  const code1 = `
import { FileBuilder } from 'excel-build';

const excelFile = new FileBuilder('FILE_NAME');

excelFile.addSheet(sheet1).addSheet(sheet2).download();
`.trim();
  const codeSheetBuilder = `
import { SheetBuilder } from 'excel-build';

const data = [
  ['1', 'soohyun', 'sasha1107@naver.com', '01012345678', 'FE'],
  ['2', 'sasha', 'sasha981107@gmail.com', '01087654321', 'BE'],
];

const sheet1 = new SheetBuilder('sheet_1');
const sheet2 = new SheetBuilder('sheet_2')
  .appendThead(['id', 'name', 'email', 'phone', 'department'])
  .addTBody(data)
  .mergeCell([0, 3], [4, 3]);
  `.trim();
  const codeCellBuilder = `
const data = ['1', 'soohyun', 'sasha1107@naver.com', '01012345678', 'FE'];

sheet1.appendCustomRow(
  data.map((item) =>
    new CellBuilder(item)
      .setFontSize(20)
      .setFontColor('#FFFFFF')
      .setBackgroundColor('#555555')
      .setFontItalic()
      .build()
  )
);
`.trim();
  Code.lineNumbers = true;
  Code.theme = 'github-dark';
  return (
    <div className='p-4 flex sticky top-[60px] gap-8'>
      <Sider lng={lng} />
      <section className='flex-grow divide-y divide-slate-700 flex flex-col mt-20 gap-10'>
        <div className=''>
          <HashLink lng={lng} id='installation' level={2} text='설치' />
          <div className='ml-2'>
            <Code lang='bash' className='text-sm'>
              npm install excel-build
            </Code>
          </div>
        </div>
        <HashLink lng={lng} id='usage' level={2} text='사용' />
        <div className='ml-2'>
          <HashLink lng={lng} id='FileBuilder' level={3} text='FileBuilder' />
          <div className='ml-2'>
            <Code lang='jsx' className='text-sm'>
              {code1}
            </Code>
          </div>
          <div>
            <HashLink lng={lng} id='FileBuilder_API' level={4} text='API' />
            <table className='table-auto ml-2'>
              <thead>
                <tr>
                  <th>{t('메서드')}</th>
                  <th>{t('설명')}</th>
                  <th>{t('타입')}</th>
                  <th>{t('인자')}</th>
                  <th>{t('반환')}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <code className='inline'>addSheet</code>
                  </td>
                  <td>{t('엑셀 파일에 시트를 추가합니다.')}</td>
                  <td>
                    <code className='inline'>function</code>
                  </td>
                  <td>
                    <code className='inline'>SheetBuilder</code>
                  </td>
                  <td>
                    <code className='inline'>FileBuilder</code>
                  </td>
                </tr>
                <tr>
                  <td>
                    <code className='inline'>download</code>
                  </td>
                  <td>{t('생성한 엑셀 파일을 다운로드합니다.')}</td>
                  <td>
                    <code className='inline'>function</code>
                  </td>
                  <td>-</td>
                  <td>
                    <code className='inline'>void</code>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <HashLink lng={lng} id='SheetBuilder' level={3} text='SheetBuilder' />
          <Code lang='jsx' className='text-sm'>
            {codeSheetBuilder}
          </Code>
          <div>
            <HashLink lng={lng} id='SheetBuilder_API' level={4} text='API' />
            <table className='table-auto'>
              <thead>
                <tr>
                  <th>{t('메서드')}</th>
                  <th>{t('설명')}</th>
                  <th>{t('타입')}</th>
                  <th>{t('인자')}</th>
                  <th>{t('반환')}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <code className='inline'>appendThead</code>
                  </td>
                  <td>{t('테이블에 헤더 행을 추가합니다.')}</td>
                  <td>
                    <code className='inline'>function</code>
                  </td>
                  <td>
                    <code className='inline'>
                      (theadArr: string[], option: any)
                    </code>
                  </td>
                  <td>
                    <code className='inline'>SheetBuilder</code>
                  </td>
                </tr>

                <tr>
                  <td>
                    <code className='inline'>appendRow</code>
                  </td>
                  <td>{t('테이블에 행을 추가합니다.')}</td>
                  <td>
                    <code className='inline'>function</code>
                  </td>
                  <td>
                    <code className='inline'>
                      (tRowArr: string|number|boolean|Date[], option: any)
                    </code>
                  </td>
                  <td>
                    <code className='inline'>SheetBuilder</code>
                  </td>
                </tr>
                <tr>
                  <td>
                    <code className='inline'>addTBody</code>
                  </td>
                  <td>{t('테이블에 배열의 행을 추가합니다.')}</td>
                  <td>
                    <code className='inline'>function</code>
                  </td>
                  <td>
                    <code className='inline'>
                      (tbodyArr: string|number|boolean|Date[][], option: any)
                    </code>
                  </td>
                  <td>
                    <code className='inline'>SheetBuilder</code>
                  </td>
                </tr>
                <tr>
                  <td>
                    <code className='inline'>appendCustomRow</code>
                  </td>
                  <td>{t('테이블에 사용자 정의 스타일 행을 추가합니다.')}</td>
                  <td>
                    <code className='inline'>function</code>
                  </td>
                  <td>
                    <code className='inline'>
                      (row: string|number|boolean|Date[], option: any)
                    </code>
                  </td>
                  <td>
                    <code className='inline'>SheetBuilder</code>
                  </td>
                </tr>
                <tr>
                  <td>
                    <code className='inline'>mergeCell</code>
                  </td>
                  <td>
                    {t(
                      '시작 셀 [x0, y0]과 끝 셀 [x1, y1]을 인수로 사용하여 셀을 병합합니다.'
                    )}
                  </td>
                  <td>
                    <code className='inline'>function</code>
                  </td>
                  <td>
                    <code className='inline'>
                      (start: [number, number], end: [number, number])
                    </code>
                  </td>
                  <td>
                    <code className='inline'>SheetBuilder</code>
                  </td>
                </tr>
                <tr>
                  <td>
                    <code className='inline'>getWorkSheet</code>
                  </td>
                  <td>{t('생성한 시트를 반환합니다.')}</td>
                  <td>
                    <code className='inline'>function</code>
                  </td>
                  <td>-</td>
                  <td>
                    <code className='inline'>SheetBuilder</code>
                  </td>
                </tr>
                <tr>
                  <td>
                    <code className='inline'>getSheetName</code>
                  </td>
                  <td>{t('생성한 시트의 이름을 반환합니다.')}</td>
                  <td>
                    <code className='inline'>function</code>
                  </td>
                  <td>-</td>
                  <td>
                    <code className='inline'>string</code>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <HashLink lng={lng} id='CellBuilder' level={3} text='CellBuilder' />
          <Code lang='jsx' className='text-sm'>
            {codeCellBuilder}
          </Code>
          <div>
            <HashLink lng={lng} id='CellBuilder_API' level={4} text='API' />
            <table className='table-auto'>
              <thead>
                <tr>
                  <th>{t('메서드')}</th>
                  <th>{t('설명')}</th>
                  <th>{t('타입')}</th>
                  <th>{t('인자')}</th>
                  <th>{t('반환')}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <code className='inline'>setAlignMentVertical</code>
                  </td>
                  <td>{t('셀의 수직 정렬을 설정합니다.')}</td>
                  <td>
                    <code className='inline'>function</code>
                  </td>
                  <td>
                    <code className='inline'>center | top | bottom</code>
                  </td>
                  <td>
                    <code className='inline'>CellBuilder</code>
                  </td>
                </tr>

                <tr>
                  <td>
                    <code className='inline'>setAlignMentHorizontal</code>
                  </td>
                  <td>{t('셀의 수평 정렬을 설정합니다.')}</td>
                  <td>
                    <code className='inline'>function</code>
                  </td>
                  <td>
                    <code className='inline'>center | left | right</code>
                  </td>
                  <td>
                    <code className='inline'>CellBuilder</code>
                  </td>
                </tr>
                <tr>
                  <td>
                    <code className='inline'>setAlignMentWrapText</code>
                  </td>
                  <td>{t('텍스트 줄 바꿈을 허용합니다.')}</td>
                  <td>
                    <code className='inline'>function</code>
                  </td>
                  <td>
                    <code className='inline'>-</code>
                  </td>
                  <td>
                    <code className='inline'>CellBuilder</code>
                  </td>
                </tr>
                <tr>
                  <td>
                    <code className='inline'>setAlignMentTextRotation</code>
                  </td>
                  <td>
                    {t(
                      '텍스트 회전 각도를 설정합니다. 180은 180도 아래로 회전, 255는 세로로 정렬합니다.'
                    )}
                  </td>
                  <td>
                    <code className='inline'>function</code>
                  </td>
                  <td>
                    <code className='inline'>0 to 180, or 255</code>
                  </td>
                  <td>
                    <code className='inline'>CellBuilder</code>
                  </td>
                </tr>
                <tr>
                  <td>
                    <code className='inline'>setBorder</code>
                  </td>
                  <td>{t('셀의 테두리 스타일을 설정합니다.')}</td>
                  <td>
                    <code className='inline'>function</code>
                  </td>
                  <td>
                    <code className='inline'>null | BorderStyleType</code>
                  </td>
                  <td>
                    <code className='inline'>CellBuilder</code>
                  </td>
                </tr>
                <tr>
                  <td>
                    <code className='inline'>setBackgroundColor</code>
                  </td>
                  <td>{t('셀의 배경색을 설정합니다.')}</td>
                  <td>
                    <code className='inline'>function</code>
                  </td>
                  <td>
                    <code className='inline'>string(ex.#000000)</code>
                  </td>
                  <td>
                    <code className='inline'>CellBuilder</code>
                  </td>
                </tr>
                <tr>
                  <td>
                    <code className='inline'>setFontColor</code>
                  </td>
                  <td>{t('글꼴 색상을 설정합니다.')}</td>
                  <td>
                    <code className='inline'>function</code>
                  </td>
                  <td>
                    <code className='inline'>string(ex.#000000)</code>
                  </td>
                  <td>
                    <code className='inline'>CellBuilder</code>
                  </td>
                </tr>
                <tr>
                  <td>
                    <code className='inline'>setFontSize</code>
                  </td>
                  <td>{t('글꼴 크기를 설정합니다.')}</td>
                  <td>
                    <code className='inline'>function</code>
                  </td>
                  <td>
                    <code className='inline'>number</code>
                  </td>
                  <td>
                    <code className='inline'>CellBuilder</code>
                  </td>
                </tr>
                <tr>
                  <td>
                    <code className='inline'>setFontBold</code>
                  </td>
                  <td>{t('글꼴을 굵게 설정합니다.')}</td>
                  <td>
                    <code className='inline'>function</code>
                  </td>
                  <td>
                    <code className='inline'>-</code>
                  </td>
                  <td>
                    <code className='inline'>CellBuilder</code>
                  </td>
                </tr>
                <tr>
                  <td>
                    <code className='inline'>setFontItalic</code>
                  </td>
                  <td>{t('글꼴을 이탤릭체로 설정합니다.')}</td>
                  <td>
                    <code className='inline'>function</code>
                  </td>
                  <td>
                    <code className='inline'>-</code>
                  </td>
                  <td>
                    <code className='inline'>CellBuilder</code>
                  </td>
                </tr>
                <tr>
                  <td>
                    <code className='inline'>setFontStrike</code>
                  </td>
                  <td>{t('글꼴에 취소선을 설정합니다.')}</td>
                  <td>
                    <code className='inline'>function</code>
                  </td>
                  <td>
                    <code className='inline'>-</code>
                  </td>
                  <td>
                    <code className='inline'>CellBuilder</code>
                  </td>
                </tr>
                <tr>
                  <td>
                    <code className='inline'>setFontUnderline</code>
                  </td>
                  <td>{t('글꼴에 밑줄을 긋습니다.')}</td>
                  <td>
                    <code className='inline'>function</code>
                  </td>
                  <td>
                    <code className='inline'>-</code>
                  </td>
                  <td>
                    <code className='inline'>CellBuilder</code>
                  </td>
                </tr>
                <tr>
                  <td>
                    <code className='inline'>build</code>
                  </td>
                  <td>{t('셀을 빌드합니다.')}</td>
                  <td>
                    <code className='inline'>function</code>
                  </td>
                  <td>
                    <code className='inline'>-</code>
                  </td>
                  <td>
                    <code className='inline'>CellBuilder</code>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}
