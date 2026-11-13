import { useState } from "react";
import Board from "./components/board";
import Modal from "./components/Modal";
import Header from "./components/Header";
import "./index.css";
import { juniorsData, seniorsData } from "./components/board/data";

function App() {
  const [selectedLevel, setSelectedLevel] = useState<"Juniors" | "Seniors" | null>(null);

  if (!selectedLevel) {
    return (
      <div className="w-dvw h-dvh bg-black-100 flex flex-col justify-center items-center gap-10 text-white font-anton">
        <h1 className="text-5xl">Choose Your Level</h1>

        <div className="flex gap-10">
          <button
            onClick={() => setSelectedLevel("Juniors")}
            className="px-10 py-5 bg-blue-600 rounded-2xl text-3xl hover:bg-blue-700 transition"
          >
            Juniors
          </button>

          <button
            onClick={() => setSelectedLevel("Seniors")}
            className="px-10 py-5 bg-green-600 rounded-2xl text-3xl hover:bg-green-700 transition"
          >
            Seniors
          </button>
        </div>
      </div>
    );
  }

  const data = selectedLevel === "Juniors" ? juniorsData : seniorsData;

  return (
    <>
      <Modal />
      <main
        className="w-dvw h-dvh font-anton py-6 bg-black-100 overflow-hidden flex flex-col gap-6 text-center"
      >
        <Header />
        <Board categories={data.categories} questions={data.questions} />
      </main>
    </>
  );
}

export default App;
