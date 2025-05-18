// type Props = {}

import { ReactNode, useState } from "react";

function Board() {
  return (
    <div className="grid grid-cols-6 gap-4 bg-black-200 rounded-lg overflow-hidden flex-grow p-5 text-2xl text-white mx-52">
      <BoardHeading>Physics</BoardHeading>
      <BoardHeading>Biology</BoardHeading>
      <BoardHeading>Maths</BoardHeading>
      <BoardHeading>Chemistry</BoardHeading>
      <BoardHeading>Tech</BoardHeading>
      <BoardHeading>Mystery</BoardHeading>
      {Array(36)
        .fill(0)
        .map(() => (
          <Card points={10} />
        ))}
    </div>
  );
}

function BoardHeading({ children }: { children: string }) {
  return (
    <h2 className="text-yellow-200 text-xl md:text-2xl h-0 m-0 p-0">
      {children}
    </h2>
  );
}

function Card({ points }: { points: ReactNode }) {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div
      className={` content-center rounded-md h-full w-full cursor-pointer hover:bg-blue-800 hover:scale-110 transition-all duration-300 ${
        isOpen
          ? "bg-blue-200"
          : "bg-black-100 outline outline-2 outline-slate-700"
      }`}
      onClick={() => setIsOpen(false)}
    >
      {points}
    </div>
  );
}

export default Board;
