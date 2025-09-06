// table-body 부분 실제로 데이터가 나오는 부분
// 1. 한자(한글)
// 2. 네모박스 안 한글 한자 한자(label)
// 3. (없음) - 정보가 없을 때

import { SajuDataCell } from "@/types";

interface TableCellProps {
  cellData: SajuDataCell;
}

export default function TableCell({ cellData }: TableCellProps) {
  const { hanja, hanjaKo, hanjaLabel, color } = cellData;

  //2. 네모박스 안 한글 한자 한자(label)
  if (hanja && hanjaKo && hanjaLabel && color) {
    console.log(color);
    return (
      <div className={`border-1 rounded-lg p-1`} 
      style={{ borderColor: color, color: color === "white" ? "black" : "white", backgroundColor: color }}>
        <div>{hanjaKo}</div>
        <div>{hanja}</div>
        <div>{hanjaLabel}</div>
      </div>
    );
  }

  // 1. 한자(한글)
  if (hanja && hanjaKo) {
    return (
      <div>
        <div>{hanja}</div>
        <div>({hanjaKo})</div>
      </div>
    );
  }

  // 3. (없음) - 정보가 없을 때
  return <div>(없음)</div>;
}
