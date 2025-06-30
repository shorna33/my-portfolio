import React from "react";
import Header from "@/Components/Header";
import ScrollUpButton from "@/Components/ScrollToTopButton";

const MainContainer = ({ children }) => {
  return (
    <div>
      <Header />
      <ScrollUpButton />
      <div>{children}</div>
    </div>
  );
};

export default MainContainer;
