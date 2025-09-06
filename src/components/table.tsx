import { SajuInfo } from "@/types";
import TableBody from "./table-body";
import TableHeader from "./table-header";
import { columnHeaders, rowHeaders } from "@/data/tableHeader";

interface TableProps {
  sajuInfo: SajuInfo;
}

export default function Table({ sajuInfo }: TableProps) {
  return (
    <div className="flex flex-col gap-4">
      <TableHeader name={sajuInfo.name} birth={sajuInfo.birth} />

      {/* 표 작성 */}
      <table className=" border-r-2 border-b-2 text-center border-collapse" >
        <thead className="bg-orange-100 border-b-2">
          <tr className="font-normal text-xl ">
            <th className="border-r-2"></th> {/* 첫 번째 빈 칸 */}
            {columnHeaders.map((header, index) => (
              <th key={index} className="border-r-1 border-gray-400 p-3">{header}</th>
            ))}
          </tr>
        </thead>
        {/* 표 본문 */}

        <TableBody bodyData={sajuInfo.bodyData} rowHeaders={rowHeaders} />
      </table>
    </div>
  );
}
