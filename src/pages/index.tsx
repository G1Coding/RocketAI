import Table from "@/components/table";

export default function Home() {
  return (
    <div>
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <div>
          <Table sajuInfo={sajuInfo} />
        </div>
      </main>
    </div>
  );
}

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

const sajuInfo = {
  name: "김로켓",
  birth: "1980년 8월 27일 08:10",
  bodyData: [
    {
      one: { hanja: "象管", text: "상관" },
      two: { hanja: "甲", text: "갑", label: "甲木" },
      three: { hanja: "寅", text: "인", label: "寅木" },
      four: { hanja: "甲寅", text: "갑인" },
      five: { hanja: "甲木", text: "갑목" },
      six: { hanja: "木", text: "목" },
      seven: { hanja: "陽", text: "양" },
    },

    {
      one: { hanja: "象管", text: "상관" },
      two: { hanja: "甲", text: "갑", label: "甲木" },
      three: { hanja: "寅", text: "인", label: "寅木" },
      four: { hanja: "甲寅", text: "갑인" },
      five: { hanja: "甲木", text: "갑목" },
      six: { hanja: "木", text: "목" },
      seven: { hanja: "陽", text: "양" },
    },
    {
      one: { hanja: "象管", text: "상관" },
      two: { hanja: "甲", text: "갑", label: "甲木" },
      three: { hanja: "寅", text: "인", label: "寅木" },
      four: { hanja: "甲寅", text: "갑인" },
      five: { hanja: "甲木", text: "갑목" },
      six: { hanja: "木", text: "목" },
      seven: { hanja: "陽", text: "양" },
    },
    {
      one: { hanja: "象管", text: "상관" },
      two: { hanja: "甲", text: "갑", label: "甲木" },
      three: { hanja: "寅", text: "인", label: "寅木" },
      four: { hanja: "甲寅", text: "갑인" },
      five: { hanja: "甲木", text: "갑목" },
      six: { hanja: "木", text: "목" },
      seven: { hanja: "陽", text: "양" },
    },
  ],
};
