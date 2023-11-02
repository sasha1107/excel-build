import type { CellObject } from 'xlsx-js-style';

interface CellObjectType extends CellObject {
  v: CellObject['v'];
  t: CellObject['t'];
  s: CellStyleType;
}

type BorderStyleType =
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

type ColorType = {
  rgb?: string;
  theme?: number;
  tint?: number;
};

type CellStyleType = {
  alignment: {
    vertical?: 'center' | 'top' | 'bottom'; // 수직 정렬
    horizontal?: 'center' | 'left' | 'right'; // 수평 정렬
    wrapText?: boolean; // - 줄바꿈
    textRotation?: number; // - 텍스트 회전 0 to 180, or 255 --180 is rotated down 180 degrees, 255 is special, aligned vertically
  };
  border: {
    top?: { style: BorderStyleType; color: ColorType };
    bottom?: { style: BorderStyleType; color: ColorType };
    left?: { style: BorderStyleType; color: ColorType };
    right?: { style: BorderStyleType; color: ColorType };
    diagonal?: {
      style: BorderStyleType;
      color: ColorType;
      diagonalUp: boolean;
      diagonalDown: boolean;
    };
  };
  fill?: {
    patternType?: 'none' | 'solid';
    fgColor?: ColorType; // foreground color 전경색
    bgColor?: ColorType; // background color 배경색
  };
  font: {
    bold?: boolean;
    color?: ColorType;
    italic?: boolean;
    name?: string;
    strike?: boolean; // 취소선
    outline?: boolean;
    sz?: string;
    underline?: boolean;
    vertAlign?: 'subscript' | 'superscript';
  };
  numFmt?: string;
};

export type { CellObjectType, CellStyleType, ColorType };
