interface TableHeaderProps {
  name: string;
  birth: string;
}

export default function TableHeader({ name, birth }: TableHeaderProps) {
  return (
    <div>
      <div className="font-normal text-base mb-1 font-[myfont]">{name}님의 사주</div>
      <div className="font-bold text-xl"> {birth}</div>
    </div>
  );
}
