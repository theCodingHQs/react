import React, { useState } from "react";

const Modal = ({ children }) => {
  const [open, setOpen] = useState(false);
  const toggleModal = () => setOpen(!open);

  return (
    <>
      <button
        onClick={toggleModal}
        className="bg-white/10 text-white rounded border border-white/40 h-7 w-7 p-0 flex items-center justify-center text-2xl hover:bg-white hover:text-blue-600 transition-all shadow cursor-pointer"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-plus-icon lucide-plus"
        >
          <path d="M5 12h14" />
          <path d="M12 5v14" />
        </svg>
      </button>
      <div
        className={`fixed top-0 left-0 h-screen w-full bg-black/40  items-center justify-center  ${
          open ? "flex" : "hidden"
        } `}
        onClick={toggleModal}
      >
        <div
          onClick={(event) => {
            event.stopPropagation();
          }}
          className="bg-white rounded"
        >
          {children}
        </div>
      </div>
    </>
  );
};

export default Modal;
