import { Code } from 'bright';
import Download from './_components/Download';
import { useTranslation } from '@/app/i18n';
const Example = async ({
  params: { lng },
}: {
  params: {
    lng: 'ko' | 'en';
  };
}) => {
  const { t } = await useTranslation(lng);
  const code1 = `
  import { FileBuilder, SheetBuilder, CellBuilder } from 'excel-build';
  
  function App() {
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
    }
    
    return (
      <button onClick={makeExcel}>
        ${lng === 'ko' ? '다운로드' : 'Download'}
      </button>
    );
  }
  `.trim();
  return (
    <div className='mt-20 mx-40 mb-10'>
      <div className='flex gap-4 items-center'>
        <div className='font-light'>
          {t('다운로드 버튼을 클릭하여 다운로드된 엑셀 파일을 확인해보세요.')}
        </div>
        <Download lang={lng} />
      </div>
      <div>
        <Code lang='jsx' className='text-sm'>
          {code1}
        </Code>
      </div>
    </div>
  );
};

export default Example;
