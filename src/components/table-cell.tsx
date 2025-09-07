// table-body 부분 실제로 데이터가 나오는 부분
// 1. 한자(한글)
// 2. 네모박스 안 한글 한자 한자(label)
// 3. (없음) - 정보가 없을 때

import { zenAntique } from "@/styles/fonts";
import { SajuDataCell } from "@/types";

interface TableCellProps {
  cellData: SajuDataCell;
}

export default function TableCell({ cellData }: TableCellProps) {
  const { hanja, hanjaKo, hanjaLabel, color } = cellData;

  //2. 네모박스 안 한글 한자 한자(label)
  if (hanja && hanjaKo && hanjaLabel && color) {
    return (
      <div
        className={`border-2 rounded-xl flex flex-col items-center justify-center w-12 h-12 md:w-14 md:h-14 gap-0 `}
        style={{
          borderColor: color === "white" ? "black" : color,
          color: color === "white" ? "black" : "white",
          backgroundColor: color,
        }}
      >
        <div className="font-normal text-[7px]">{hanjaKo}</div>
        <div className={`${zenAntique.className} font-normal text-lg md:text-2xl leading-none`}>{hanja}</div>
        <div className="font-normal text-[8px]">{hanjaLabel}</div>
      </div>
    );
  }

  // 1. 한자(한글)
  if (hanja && hanjaKo) {
    return (
      <div className=" w-7 h-8 ">
        <div className={`${zenAntique.className} font-normal text-[15px] leading-none text-nowrap`}>{hanja}</div>
        <div className="text-[10px]">({hanjaKo})</div>
      </div>
    );
  }

  // 3. (없음) - 정보가 없을 때
  return <div className="text-[10px]">(없음)</div>;
}
