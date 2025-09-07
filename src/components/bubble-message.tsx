interface BubbleMessageProps {
    message: string;
    top: number;
    left: number;   
    width: number;
    height: number;
}

export default function BubbleMessage({message, top, left, width, height}: BubbleMessageProps) {
  return (
    <div className="absolute flex items-center justify-center p-2 text-center text-sm md:text-lg tracking-[-0.025em] "
      style={{
        top: `${top}%`,
        left: `${left}%`,
        width: `${width}%`,
        height: `${height}%`
      }}
    >
      {message}
        
    </div>
  );
}

