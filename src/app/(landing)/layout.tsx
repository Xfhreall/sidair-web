import React from "react";

interface ILandingLayoutProps {
  children: React.ReactNode;
}

const LandingLayout: React.FC<ILandingLayoutProps> = ({ children }) => {
  return (
    <>
      <div>{children}</div>
    </>
  );
};

export default LandingLayout;
