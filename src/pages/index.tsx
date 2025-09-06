import Table from "@/components/table";
import { sajuInfo } from "@/data/sajuInfo";

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

