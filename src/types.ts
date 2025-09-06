// 모든 타입 정의
export interface SajuInfo {
  name: string;
  birth: string;
  bodyData: SajuData[];
}

export interface SajuData {
  one: SajuDataCell;
  two: SajuDataCell;
  three: SajuDataCell;
  four: SajuDataCell;
  five: SajuDataCell;
  six: SajuDataCell;
  seven: SajuDataCell;
}


export interface SajuDataCell {
  // 한자, 한글 모두 X -> 없음으로 표기
  hanja?: string;
  hanjaKo?: string;
  color?: string; // 박스 색상
  hanjaLabel?: string; // 박스 안 한자
}

export interface RowHeader {
  text: string;
  hanja: string;
}
