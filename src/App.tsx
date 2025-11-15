import { useState } from "react";
import Board from "./components/board";
import Modal from "./components/Modal";
import Header from "./components/Header";
import "./index.css";
import { aLevelData, oLevelData } from "./components/board/data";

function App() {
  const [selectedLevel, setSelectedLevel] = useState<"O" | "A" | null>(null);

  if (!selectedLevel) {
    return (
      <div className="w-dvw h-dvh bg-black-100 flex flex-col justify-center items-center gap-10 text-white font-anton">
        <h1 className="text-5xl">Choose Your Level</h1>

        <div className="flex gap-10">
          <button
            onClick={() => setSelectedLevel("O")}
            className="px-10 py-5 bg-blue-600 rounded-2xl text-3xl hover:bg-blue-700 transition"
          >
            O Level
          </button>

          <button
            onClick={() => setSelectedLevel("A")}
            className="px-10 py-5 bg-green-600 rounded-2xl text-3xl hover:bg-green-700 transition"
          >
            A Level
          </button>
        </div>
      </div>
    );
  }

  const data = selectedLevel === "O" ? oLevelData : aLevelData;

  return (
    <>
      <Modal />
      <main
        className={`w-dvh h-dvh font-anton py-6 bg-black-100 overflow-hidden flex flex-col gap-6 text-center`}
      >
        <Header />
        <Board categories={data.categories} questions={data.questions} />
      </main>
    </>
  );
}

export default App;
