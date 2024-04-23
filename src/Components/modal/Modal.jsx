import { useState } from "react";

function Modal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    isOpen && (
      <div>
        <button className="text-sm" onClick={() => setIsOpen((is) => !is)}>
          &times;
        </button>
      </div>
    )
  );
}

export default Modal;
