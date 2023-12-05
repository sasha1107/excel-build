# excel-build


# Installation

```sh
npm install excel-build
```

# Usage

## FileBuilder

```jsx
import { FileBuilder } from 'excel-build';

const excelFile = new FileBuilder('FILE_NAME');
```

### API

|Method|Description|Type|Parameter|
|:-:|:-:|:-:|:-:|
|`addSheet`|시트를 추가하는 메서드|`function`|`SheetBuilder`|
|`download`|생성한 엑셀 파일을 다운로드 합니다.|`function`|-|

## SheetBuilder

```jsx
import { SheetBuilder } from 'excel-build';

const sheet1 = new SheetBuilder('sheet_1');
const sheet2 = new SheetBuilder('sheet_2');
```

### API

|Method|Description|Type|Parameter|
|:-:|:-:|:-:|:-:|
|`appendThead`|dsfdsf|`function`|`(theadArr: string[], option: any)`|
|`appendRow`|sdfdsfs|`function`|``|
|`appendTbody`|sdfdsfs|`function`|``|


## CellBuilder

```jsx
const excel = new FileBuilder('파일명.xlsx');

const sheet1 = new SheetBuilder('시트 1')
  .appendThead(['인덱스', '이름', '이메일', '연락처', '부서'])
  .appendCustomRow(
    // 스타일 커스텀
    data.map((item) =>
      new CellBuilder(item).setFontSize(20).setFontItalic().build()
    )
  )
  .mergeCell([0, 48], [10, 48]); // 셀 병합 [x0, y0], [x1, y1]

const sheet2 = new SheetBuilder('시트 2')
  .appendThead(['인덱스', '이름', '이메일', '연락처', '부서'])
  .appendTbody(data.map((item) => item));

excel.append(sheet1).append(sheet2).download(); // 원하는 만큼 시트 추가
```
