import Table from "@/components/table";
import { sajuInfo } from "@/data/sajuInfo";

export default function Home() {
  return (
    <div>
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <div className="text-center border border-1 p-4">
          <Table sajuInfo={sajuInfo} />
        </div> 
      </main>
    </div>
  );
}

