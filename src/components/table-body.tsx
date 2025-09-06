import { RowHeader, SajuData } from "@/types";
import TableCell from "./table-cell";

interface TableBodyProps {
  bodyData: SajuData[];

  // 행 제목(십성, 천간, 지지, 십성, 십이운성, 십이신살, 귀인)
  rowHeaders: RowHeader[];
}

export default function TableBody({ bodyData, rowHeaders }: TableBodyProps) {
  const matchingKeys = ["one", "two", "three", "four", "five", "six", "seven"];

  return (
    <tbody>
      {rowHeaders.map((rowTitle, rowIndex) => {
        const key = matchingKeys[rowIndex];

        return (
          <tr key={rowIndex} className="border-b-2 ">
            {/* 각 행의 제목 */}
            <th className=" border-r-2 p-1.5">
              <div className="font-normal text-[10px] md:text-[12px] leading-none">{rowTitle.hanja}</div>
              <div className="font-bold text-[8px]">({rowTitle.text})</div>
            </th>

            {/* 데이터들 */}
            {bodyData.map((data, colIndex) => {
              const cell = data[key as keyof SajuData];
              return (
                <td key={colIndex} className="px-1 md:px-2 py-2 border border-r-1 border-gray-400 bg-white">
                  <div className="flex items-center justify-center mt-1">
                    <TableCell cellData={cell} />
                  </div>
                </td>
              );
            })}
          </tr>
        );
      })}
    </tbody>
  );
}
