import XLSX from 'xlsx-js-style';
import { CellBuilder } from './CellBuilder';

import type { SheetAOAOpts } from 'xlsx-js-style';
import type { CellObjectType } from 'types';

export class SheetBuilder {
  private worksheet: XLSX.WorkSheet;
  private sheetName: string;

  constructor(sheetName: string) {
    this.worksheet = XLSX.utils.aoa_to_sheet([]);
    this.sheetName = sheetName;
  }
  appendThead(
    theadArr: string[],
    option: SheetAOAOpts = { origin: this.worksheet['A1'] ? -1 : 'A1' }
  ) {
    const thead = theadArr.map((item) =>
      new CellBuilder(item)
        .setFontBold()
        .setFontSize(12)
        .setBackgroundColor('ffcbcbcb')
        .setAlignMentWrapText()
        .build()
    );
    XLSX.utils.sheet_add_aoa(this.worksheet, [thead], option);
    return this;
  }
  appendRow(
    tRowArr: CellObjectType['v'][],
    option: SheetAOAOpts = { origin: this.worksheet['A1'] ? -1 : 'A1' }
  ) {
    const tRow = tRowArr.map((item) =>
      new CellBuilder(item).setAlignMentWrapText().build()
    );
    XLSX.utils.sheet_add_aoa(this.worksheet, [tRow], option);
    return this;
  }
  appendTbody(
    tbodyArr: CellObjectType['v'][][],
    option: SheetAOAOpts = { origin: this.worksheet['A1'] ? -1 : 'A1' }
  ) {
    const tbody = tbodyArr.map((item) => {
      return item.map((value: string | number | boolean | Date | undefined) => {
        return new CellBuilder(value).setAlignMentWrapText().build();
      });
    });
    XLSX.utils.sheet_add_aoa(this.worksheet, [...tbody], option);
    return this;
  }

  appendCustomRow(
    row: CellObjectType[],
    option: SheetAOAOpts = { origin: this.worksheet['A1'] ? -1 : 'A1' }
  ) {
    XLSX.utils.sheet_add_aoa(this.worksheet, [row], option);
    return this;
  }
  mergeCell(start: number[], end: number[]) {
    const EXCEL_COLUMN: string[] = Array(26)
      .fill(0)
      .map((_, index) => String.fromCharCode(index + 65))
      .concat(
        Array(26)
          .fill(0)
          .map((_, index) => 'A' + String.fromCharCode(index + 65))
      );

    this.worksheet['!merges'] = [
      XLSX.utils.decode_range(
        `${EXCEL_COLUMN[start[0]]}${start[1]}:${EXCEL_COLUMN[end[0]]}${end[1]}`
      ),
    ];
    return this;
  }
  getWorkSheet(): XLSX.WorkSheet {
    return this.worksheet;
  }
  getSheetName(): string {
    return this.sheetName;
  }
}
