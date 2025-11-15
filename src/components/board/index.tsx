import { useCallback } from "react";
import BoardHeading from "./_BoardHeading";
import Card from "./_Card";
import { QuestionType } from "./data";
import { useSetModalData } from "../../modalUtils";

function Board({
  categories,
  questions,
}: {
  categories: string[];
  questions: QuestionType[][];
}) {
  const setModalQuestion = useSetModalData();

  const handleClick = useCallback(
    (i: number, j: number) => {
      console.log(`Card at row ${i}, column ${j} clicked`);
      console.log(questions[i][j]);
      const questionData = questions[i][j];
      if (questionData) {
        setModalQuestion(questionData.question, questionData.answer);
      }
    },
    [questions, setModalQuestion]
  );

  return (
    <div className="grid grid-cols-7 gap-4 bg-black-200 rounded-lg overflow-hidden flex-grow p-5 text-2xl text-white mx-52">
      {categories.map((cat) => (
        <BoardHeading>{cat}</BoardHeading>
      ))}
      {questions.map((row, i) =>
        row.map((q, j) => (
          <Card
            key={`${i}-${j}`}
            points={q ? `${q.points}` : ""}
            i={i}
            j={j}
            onClick={handleClick}
          />
        ))
      )}
    </div>
  );
}

export default Board;
