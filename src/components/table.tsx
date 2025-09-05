import { SajuInfo } from "@/pages";
import TableBody from "./table-body";
import TableHeader from "./table-header";

interface TableProps {
  sajuInfo: SajuInfo;
}
  export interface RowHeader {
    text: string;
    hanja: string;
  }
export default function Table({ sajuInfo }: TableProps) {
  // 열 제목(시, 일, 월, 년)
  const columnHeaders = ["時", "日", "月", "年"];
  // 행 제목(십성, 천간, 지지, 십성, 십이운성, 십이신살, 귀인)

  const rowHeaders = [
    {text: "십성" , hanja:  "十星"},
    {text: "천간" , hanja:  "天干"},
    {text: "지지" , hanja:  "地支"},
    {text: "십성" , hanja:  "十星"},
    {text: "십이운성", hanja : "十二運星"},
    {text: "십이신살", hanja : "十二神煞"},
    {text: "귀인", hanja : "貴人"}
  ];

  return (
    <div>
      <TableHeader name={sajuInfo.name} birth={sajuInfo.birth} />

      {/* 표 작성 */}
      <table className="table-auto border-gray-400 border-r-2 border-b-2">
        <thead className="bg-orange-100 border-gray-400 border-b-2">
          <tr>
            <th></th> {/* 첫 번째 빈 칸 */}
            {columnHeaders.map((header, index) => (
              <th key={index}>{header}</th>
            ))}
          </tr>
        </thead>
        {/* 표 본문 */}

        <TableBody bodyData={sajuInfo.bodyData} rowHeaders={rowHeaders} />
      </table>
    </div>
  );
}
