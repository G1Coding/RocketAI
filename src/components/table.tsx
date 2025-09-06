import { SajuInfo } from "@/types";
import TableBody from "./table-body";
import TableHeader from "./table-header";
import { columnHeaders, rowHeaders } from "@/data/tableHeader";

interface TableProps {
  sajuInfo: SajuInfo;
}
  export interface RowHeader {
    text: string;
    hanja: string;
  }
export default function Table({ sajuInfo }: TableProps) {

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
