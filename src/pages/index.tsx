import Table from "@/components/table";
import { sajuInfo } from "@/data/sajuInfo";
import Image from "next/image";
import backgroundImg from "../../public/background.png";
import { bubbleMessage } from "@/data/bubble";

export default function Home() {
  return (
    <div>
      <main className="flex flex-col gap-8 items-center justify-center max-w-md sm-items-center mx-auto min-h-screen p-4 relative">
        <div className="relative w-full max-w-md ">
          <Image
            src={backgroundImg}
            alt="배경 이미지"
            className="w-full h-full"
          />
          <div
            className="absolute top-[36.5%] left-[16.5%] h-[7.5%] w-[40%] flex items-center justify-center p-1.5 text-center text-sm md:text-lg tracking-[-0.025em] break-words"
          >
            {bubbleMessage[0]}
          </div>
          <div
            className="absolute top-[68%] left-[17%] h-[7.5%] w-[42%] flex items-center justify-center p-1.5 text-center text-sm md:text-lg tracking-[-0.025em] break-words">
            {bubbleMessage[1]}
          </div>
        </div>
        <div className="text-center border-3 w-full bg-orange-50">
          <Table sajuInfo={sajuInfo} />
        </div>
      </main>
    </div>
  );
}
