import { useState } from "react";
import Board from "./Board";
import Modal from "./components/Modal";
import Header from "./Header";
import "./index.css";

const blur = (isOpen: string) => (isOpen === "" ? "" : "blur-md");
interface Content {
  questImg: string | undefined;
  questText: string | undefined;
  answerOptions: string[];
}

function App() {
  const [content, setContent] = useState<string>("");
  return (
    <>
      <Modal content={content} close={()=> }/>
      <main
        className={`w-dvh h-dvh font-anton py-6 bg-black-100 overflow-hidden flex flex-col gap-6 text-center ${blur(
          content
        )}`}
      >
        <Header />
        <Board />
      </main>
    </>
  );
}

export default App;
