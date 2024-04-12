import React, { useRef, useEffect } from "react";
import { UseModal } from "../hooks/use-modal";

const Modal = ({
  children,
  closeModal,
}: {
  children: React.ReactNode;
  closeModal: UseModal["operations"]["closeModal"];
}) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        closeModal();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [closeModal]);

  return (
    <div className="absolute inset-0 z-[10000] flex items-center justify-center bg-[#11111138]">
      <div ref={modalRef} className="p-8 bg-white rounded-lg">
        {children}
      </div>
    </div>
  );
};

export default Modal;
