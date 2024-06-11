import React, { ReactNode, MouseEvent } from "react";

interface ModalProps {
  isVisible: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isVisible, onClose, children }) => {
  if (!isVisible) return null;

  const handleClose = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target instanceof HTMLElement && e.target.id === "wrapper") {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-10 backdrop-blur-sm flex justify-center items-center z-[9999]"
      id="wrapper"
      onClick={handleClose}
    >
      <div className="flex flex-col">
        <button
          className="text-white text-lg place-self-end lowercase"
          onClick={() => onClose()}
        >
          x
        </button>
        <div className="p-2 m-3 rounded-[64px]">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
