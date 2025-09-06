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
  hanja?: string;
  text: string;
  color?: string;
  label?: string;
}

export interface SajuDataCell {
  hanja?: string; //없음의 경우
  text: string;
  label?: string;
}

