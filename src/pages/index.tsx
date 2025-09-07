import Table from "@/components/table";
import { sajuInfo } from "@/data/sajuInfo";
import Image from "next/image";
import backgroundImg from "../../public/background.png";
import { bubbleMessage } from "@/data/bubble";
import BubbleMessage from "@/components/bubble-message";

export default function Home() {
  return (
    <div>
      <main
        className={`flex flex-col gap-8 items-center justify-center max-w-md mx-auto min-h-screen p-4 relative `}
      >
        <div className="relative w-full max-w-md ">
          <Image
            src={backgroundImg}
            alt="배경 이미지"
            className="w-full h-full"
          />

          {/* 말풍선 메시지 */}
          <BubbleMessage message={bubbleMessage[0]} top={36.5} left={16.5} width={39} height={7.5}/>
          <BubbleMessage message={bubbleMessage[1]} top={68} left={17} width={42} height={7.5}/>

        </div>
        <div className="text-center border-3 w-full bg-orange-50">
          <Table sajuInfo={sajuInfo} />
        </div>
      </main>
    </div>
  );
}
