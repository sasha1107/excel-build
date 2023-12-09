import XLSX from 'xlsx-js-style';

export class FileBuilder {
  private workbook: XLSX.WorkBook;
  private fileName: string;

  constructor(fileName: string) {
    this.workbook = XLSX.utils.book_new();
    this.fileName = fileName;
  }

  addSheet(worksheet: XLSX.WorkSheet) {
    XLSX.utils.book_append_sheet(
      this.workbook,
      worksheet.getWorkSheet(),
      worksheet.getSheetName()
    );
    return this;
  }
  download() {
    if (this.workbook.SheetNames.length === 0) {
      throw new Error('Sheet is empty');
    }
    XLSX.writeFile(this.workbook, `${this.fileName}.xlsx`);
  }
}
