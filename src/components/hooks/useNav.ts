import { useState } from "react";
interface NavbarProps {
  isOpen: boolean;
  toggleSlide: () => void;
}

export const useNavbar = (): NavbarProps => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSlide = (): void => {
    setIsOpen(!isOpen);
  };

  return {
    isOpen,
    toggleSlide,
  };
};
