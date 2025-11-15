import { atom, useAtomValue, useSetAtom } from "jotai";

type ModalState = {
  question: string;
  answer: string;
} | null;

const ModalAtom = atom<ModalState>(null);

function useModalData() {
  const modalData = useAtomValue(ModalAtom);
  return modalData;
}

function useCloseModal() {
  const setModal = useSetAtom(ModalAtom);
  return () => setModal(null);
}

function useSetModalData() {
  const setModal = useSetAtom(ModalAtom);
  return (question: string, answer: string) => {
    setModal({ question, answer });
  };
}

export { useModalData, useCloseModal, useSetModalData };
