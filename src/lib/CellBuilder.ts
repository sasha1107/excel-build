import type { CellObjectType, CellStyleType, ColorType } from './types';

export class CellBuilder {
  private style: CellObjectType['s'];
  private value: CellObjectType['v'];
  private type: CellObjectType['t'];

  constructor(value: CellObjectType['v']) {
    this.value = value;
    this.type = this.setType(value).type;
    this.style = {
      alignment: {
        horizontal: 'center',
        vertical: 'center',
      },
      border: {
        top: { style: 'thin', color: { rgb: 'FF000000' } },
        bottom: { style: 'thin', color: { rgb: 'FF000000' } },
        left: { style: 'thin', color: { rgb: 'FF000000' } },
        right: { style: 'thin', color: { rgb: 'FF000000' } },
      },
      font: {
        color: { rgb: 'FF000000' },
        sz: '10',
      },
    };
  }
  private setType(value: CellObjectType['v']) {
    if (typeof value === 'boolean') {
      this.type = 'b';
    } else if (value instanceof Error) {
      this.type = 'e';
    } else if (typeof value === 'number') {
      this.type = 'n';
    } else if (value instanceof Date) {
      this.type = 'd';
    } else if (typeof value === 'string') {
      this.type = 's';
    }
    return this;
  }
  setAlignMentVertical(vertical: CellStyleType['alignment']['vertical']) {
    this.style.alignment.vertical = vertical;
    return this;
  }
  setAlignMentHorizontal(horizontal: CellStyleType['alignment']['horizontal']) {
    this.style.alignment.horizontal = horizontal;
    return this;
  }
  setAlignMentWrapText(
    wrapText: CellStyleType['alignment']['wrapText'] = true
  ) {
    this.style.alignment.wrapText = wrapText;
    return this;
  }
  setAlignMentTextRotation(
    textRotation: CellStyleType['alignment']['textRotation']
  ) {
    this.style.alignment.textRotation = textRotation;
    return this;
  }
  setBorder(border: CellStyleType['border'] | null) {
    this.style.border = border === null ? {} : border;
    return this;
  }
  setBackgroundColor(color: ColorType['rgb']) {
    this.style.fill = {
      patternType: 'solid',
      fgColor: { rgb: color?.replace('#', '') },
    };
    return this;
  }
  setFontBold(bold: CellStyleType['font']['bold'] = true) {
    this.style.font.bold = bold;
    return this;
  }
  setFontColor(color: ColorType['rgb']) {
    this.style.font.color = { rgb: color?.replace('#', '') };
    return this;
  }
  setFontItalic(italic: CellStyleType['font']['italic'] = true) {
    this.style.font.italic = italic;
    return this;
  }
  setFontStrike(strike: CellStyleType['font']['strike'] = true) {
    this.style.font.strike = strike;
    return this;
  }
  setFontSize(size: number) {
    this.style.font.sz = size.toString();
    return this;
  }
  setFontUnderline(underline: CellStyleType['font']['underline'] = true) {
    this.style.font.underline = underline;
    return this;
  }
  setNumberFormat(numFmt: CellStyleType['numFmt']) {
    this.style.numFmt = numFmt;
    return this;
  }
  build(): CellObjectType {
    return {
      v: this.value,
      t: this.type,
      s: this.style,
    };
  }
}
