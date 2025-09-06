import { SajuData } from "@/types";
import { RowHeader } from "./table";

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
          <tr key={rowIndex} className="border-b-2">
            {/* 각 행의 제목 */}
            <th className="bg-orange-100 border-r-2 ">
              <div>{rowTitle.hanja}</div>
              <div>({rowTitle.text})</div>
            </th>

            {/* 데이터들 */}
            {bodyData.map((data, colIndex) => {
              const cell = data[key as keyof SajuData];

              return (
                <td key={colIndex}>
                  <div>
                    {cell.hanja && <div>{cell.hanja}</div>}
                    {cell.text && <div>{cell.text}</div>}
                    {cell.label && <div>{cell.label}</div>}
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
