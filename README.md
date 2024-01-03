# excel-build

![npm](https://img.shields.io/npm/dt/excel-build)
[![npm](https://img.shields.io/npm/v/excel-build)](https://www.npmjs.com/package/excel-build)
<a href="https://excel-build.vercel.app/en" target="_blank">
<img height="20px" src="https://img.shields.io/badge/📚-%20Docs-%23000000"/>
</a>

# Installation

```sh
npm install excel-build
```

# Usage

## FileBuilder

```jsx
import { FileBuilder } from 'excel-build';

const excelFile = new FileBuilder('FILE_NAME');

excelFile.addSheet(sheet1).addSheet(sheet2).download();
```

### API

|   Method   |             Description              |    Type    |   Parameter    |    Returns    |
| :--------: | :----------------------------------: | :--------: | :------------: | :-----------: |
| `addSheet` |    Add a sheet to the Excel file.    | `function` | `SheetBuilder` | `FileBuilder` |
| `download` | Download the Excel file you created. | `function` |       -        |    `void`     |

## SheetBuilder

```jsx
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
```

### API

|      Method       |                                       Description                                        |    Type    |                          Parameter                           |    Returns     |
| :---------------: | :--------------------------------------------------------------------------------------: | :--------: | :----------------------------------------------------------: | :------------: |
|   `appendThead`   |                             Adds a header row to the table.                              | `function` |             `(theadArr: string[], option: any)`              | `SheetBuilder` |
|    `appendRow`    |                                 Adds a row to the table.                                 | `function` |  `(tRowArr: string\|number\|boolean\|Date[], option: any)`   | `SheetBuilder` |
|   `appendTbody`   |                                         sdfdsfs                                          | `function` | `(tbodyArr: string\|number\|boolean\|Date[][], option: any)` | `SheetBuilder` |
| `appendCustomRow` |                           Add custom style rows to the table.                            | `function` |    `(row: string\|number\|boolean\|Date[], option: any)`     | `SheetBuilder` |
|    `mergeCell`    | Merge the cells with the starting cell [x0, y0] and the ending cell [x1, y1] as factors. | `function` |      `(start: [number, number], end: [number, number])`      | `SheetBuilder` |
|  `getWorkSheet`   |                              Returns the sheet you created.                              | `function` |                             `-`                              | `SheetBuilder` |
|  `getSheetName`   |                        Returns the name of the sheet you created.                        | `function` |                             `-`                              |    `string`    |

## CellBuilder

```jsx
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
```

### API

|           Method           |                             Description                             |    Type    |           Parameter           |    Returns    |
| :------------------------: | :-----------------------------------------------------------------: | :--------: | :---------------------------: | :-----------: |
|   `setAlignMentVertical`   |                Sets the vertical alignment of cells.                | `function` | `center` \| `top` \| `bottom` | `CellBuilder` |
|  `setAlignMentHorizontal`  |               Sets the horizontal alignment of cells.               | `function` | `center` \| `left` \| `right` | `CellBuilder` |
|   `setAlignMentWrapText`   |                        Allow text wrapping.                         | `function` |              `-`              | `CellBuilder` |
| `setAlignMentTextRotation` | 180 is rotated down 180 degrees, 255 is special, aligned vertically | `function` |      `0 to 180, or 255`       | `CellBuilder` |
|        `setBorder`         |                  Sets the border style for cells.                   | `function` |  `null` \| `BorderStyleType`  | `CellBuilder` |
|    `setBackgroundColor`    |               Sets the background color of the cell.                | `function` |         `string(HEX)`         | `CellBuilder` |
|       `setFontColor`       |                     Set the color of the font.                      | `function` |         `string(HEX)`         | `CellBuilder` |
|       `setFontSize`        |                         Set the font size.                          | `function` |           `number`            | `CellBuilder` |
|       `setFontBold`        |                        Set the font in bold.                        | `function` |              `-`              | `CellBuilder` |
|      `setFontItalic`       |                       Set the font to italic.                       | `function` |              `-`              | `CellBuilder` |
|      `setFontStrike`       |                   Set strikethrough in the font.                    | `function` |              `-`              | `CellBuilder` |
|     `setFontUnderline`     |                         Underline the font.                         | `function` |              `-`              | `CellBuilder` |
|          `build`           |                            Build a cell.                            | `function` |              `-`              | `CellBuilder` |

<details>
  <summary><code>BorderStyleType</code></summary>

```ts
type BorderType =
  | 'dashDotDot'
  | 'dashDot'
  | 'dashed'
  | 'dotted'
  | 'hair'
  | 'mediumDashDotDot'
  | 'mediumDashDot'
  | 'mediumDashed'
  | 'medium'
  | 'slantDashDot'
  | 'thick'
  | 'thin';

type BorderStyleType = {
  top?: { style: BorderType; color: ColorType };
  bottom?: { style: BorderType; color: ColorType };
  left?: { style: BorderType; color: ColorType };
  right?: { style: BorderType; color: ColorType };
  diagonal?: {
    style: BorderType;
    color: ColorType;
    diagonalUp: boolean;
    diagonalDown: boolean;
  };
};
```

</details>

<details>
  <summary><code>ColorType</code></summary>

```ts
type ColorType = {
  rgb?: string;
  theme?: number;
  tint?: number;
};
```

</details>

## 🙏 Thanks

This project is a fork of [SheetJS/sheetjs](https://github.com/sheetjs/sheetjs) combined with code from
[sheetjs-style](https://www.npmjs.com/package/sheetjs-style) (by [ShanaMaid](https://github.com/ShanaMaid/))
and [sheetjs-style-v2](https://www.npmjs.com/package/sheetjs-style-v2) (by [Raul Gonzalez](https://www.npmjs.com/~armandourbina)) and [xlsx-js-style](https://github.com/gitbrent/xlsx-js-style) (by [gitbrent](https://github.com/gitbrent)).

All projects are under the Apache 2.0 License

- [sheetjs](https://github.com/SheetJS/sheetjs)
- [js-xlsx](https://github.com/protobi/js-xlsx)
- [sheetjs-style](https://www.npmjs.com/package/sheetjs-style)
- [sheetjs-style-v2](https://www.npmjs.com/package/sheetjs-style-v2)
- [xlsx-js-style](https://www.npmjs.com/package/xlsx-js-style)
