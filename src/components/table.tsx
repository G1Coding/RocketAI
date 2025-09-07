import { SajuInfo } from "@/types";
import TableBody from "./table-body";
import TableHeader from "./table-header";
import { columnHeaders, rowHeaders } from "@/data/tableHeader";
import { zenAntique } from "@/styles/fonts";

interface TableProps {
  sajuInfo: SajuInfo;
}

export default function Table({ sajuInfo }: TableProps) {
  return (
    <div className="flex flex-col gap-4 w-full p-2 md:p-4 my-4">
      <TableHeader name={sajuInfo.name} birth={sajuInfo.birth} />

      {/* 표 작성 */}
        <table className=" border-r-2 border-b-2 text-center border-collapse">
          <thead className=" border-b-2">
            <tr className=" ">
              <th className="border-r-2 px-3 min-w-[40px] md:min-w-[70px]"></th> {/* 첫 번째 빈 칸 */}
              {columnHeaders.map((header, index) => (
                <th key={index} className={`${zenAntique.className} border-r-1 border-gray-400 p-1 md:p-3 font-normal sm-text-lg md:text-xl`}>
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          {/* 표 본문 */}

          <TableBody bodyData={sajuInfo.bodyData} rowHeaders={rowHeaders} />
        </table>
    </div>
  );
}
