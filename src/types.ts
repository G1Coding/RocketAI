// 모든 타입 정의
export interface SajuInfo {
  name: string;
  birth: string;
  bodyData: SajuData[];
}

export interface SajuData {
  one: SajuDataCell;
  two: SajuDataBox;
  three: SajuDataBox;
  four: SajuDataCell;
  five: SajuDataCell;
  six: SajuDataCell;
  seven: SajuDataCell;
}

export interface SajuDataBox {
  hanja: string;
  hanjaKo: string;
  color?: string;
  hanjaLabel: string;
}

export interface SajuDataCell {
  // 한자, 한글 모두 X -> 없음으로 표기
  hanja?: string;
  hanjaKo?: string;
}

export interface RowHeader {
  text: string;
  hanja: string;
}
