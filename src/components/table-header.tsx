interface TableHeaderProps {
  name: string;
  birth: string;
}

export default function TableHeader({name, birth}: TableHeaderProps) {
  return (
    <div>
      <div>{name}님의 사주</div>
      <div>{birth}</div>
    </div>
  );
}
