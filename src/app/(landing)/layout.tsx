import React from "react";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
interface ILandingLayoutProps {
  children: React.ReactNode;
}

const LandingLayout: React.FC<ILandingLayoutProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      <div>{children}</div>
      <Footer />
    </>
  );
};

export default LandingLayout;
