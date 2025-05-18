

const Modal = ({content, close}:) => {
  const isopen = false;
  return (
    <>
      {isopen && (
        <div className="bg-slate-950 h-dvh w-dvw fixed opacity-30">Modal</div>
      )}
    </>
  );
};

export default Modal;
