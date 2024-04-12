"use client";

import { useState } from "react";

const useModal = () => {
  const [showModal, setShowModal] = useState<boolean>(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);
  const toggleModal = () => setShowModal((prev) => !prev);

  return {
    properties: { showModal },
    operations: { setShowModal, openModal, closeModal, toggleModal },
  };
};

export default useModal;

export type UseModal = ReturnType<typeof useModal>;
