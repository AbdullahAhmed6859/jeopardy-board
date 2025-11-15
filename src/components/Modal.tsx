import { useState, useEffect } from "react";
import { useCloseModal, useModalData } from "../modalUtils";

const Modal = () => {
  const closeModal = useCloseModal();
  const modalData = useModalData();
  const isOpen = modalData !== null;

  const [showAnswer, setShowAnswer] = useState(false);

  // Reset answer whenever modal opens
  useEffect(() => {
    if (isOpen) {
      setShowAnswer(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="Z-50 fixed inset-0 bg-black bg-opacity-90 flex justify-center items-center z-1000 p-5 box-border">
      <div className="bg-black-100 p-10 rounded-3xl relative text-center w-11/12 max-w-6xl max-h-90vh overflow-y-auto shadow-2xl">
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 w-9 h-9 bg-red-600 text-white rounded-full flex justify-center items-center cursor-pointer text-2xl font-bold hover:bg-red-700 transition-colors"
        >
          &times;
        </button>

        {!showAnswer && (
          <div className="my-5 leading-relaxed text-4xl font-light tracking-wide text-white whitespace-pre-wrap">
            {modalData.question}
          </div>
        )}

        {showAnswer && (
          <div className="my-5 leading-relaxed text-4xl font-light tracking-wide text-white whitespace-pre-wrap">
            {modalData.answer}
          </div>
        )}

        {!showAnswer && (
          <button
            onClick={() => setShowAnswer(true)}
            className="bg-blue-600 text-white rounded-full px-6 py-3 mt-5 border-none cursor-pointer text-base font-medium tracking-widest hover:bg-blue-700 transition-colors"
          >
            Show Answer
          </button>
        )}

        {showAnswer && (
          <button
            onClick={closeModal}
            className="bg-blue-600 text-white rounded-full px-6 py-3 mt-5 border-none cursor-pointer text-base font-medium tracking-widest hover:bg-blue-700 transition-colors"
          >
            Close
          </button>
        )}
      </div>
    </div>
  );
};

export default Modal;
