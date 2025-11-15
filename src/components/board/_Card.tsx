import { useState, useCallback } from "react";

type CardProps = {
  points: string;
  onClick?: (i: number, j: number) => void;
  i: number;
  j: number;
};

function Card({ points, onClick, i, j }: CardProps) {
  const [isUsed, setIsUsed] = useState(false);

  const handleClick = useCallback(() => {
    setIsUsed(true);
    onClick?.(i, j);
  }, [onClick, i, j]);

  return (
    <button
      className={`text-4xl content-center rounded-md h-full w-full cursor-pointer ${
        isUsed
          ? "bg-black-100 outline outline-2 outline-slate-700"
          : "bg-blue-200 hover:bg-blue-800 hover:scale-110 transition-all duration-300"
      }`}
      onClick={handleClick}
      disabled={isUsed}
    >
      {points}
    </button>
  );
}

export default Card;
