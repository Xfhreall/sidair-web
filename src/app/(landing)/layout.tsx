import React from "react";
import Navbar from "@/components/ui/navbar";
interface ILandingLayoutProps {
  children: React.ReactNode;
}

const LandingLayout: React.FC<ILandingLayoutProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      <div>{children}</div>
    </>
  );
};

export default LandingLayout;
