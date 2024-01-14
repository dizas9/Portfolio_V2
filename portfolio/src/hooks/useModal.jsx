import { useState } from "react";

export const useModal = (state) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function modalOpen() {
    setIsModalOpen(true);
  }
  function modalClose() {
    setIsModalOpen(false);
  }
  return { modalOpen, modalClose , isModalOpen };
};
