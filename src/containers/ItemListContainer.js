import React from "react";
import { useState } from "react";
import { MainContent } from "../components/MainContent.js";

const ItemListContainer = () => {
  const [cont, setCont] = useState(0);
  const handleClick = () => {
    setCont(cont + 1);
  };
  return (
    <>
      <MainContent titulo={"Acá ira el contenido"}></MainContent>
      <div> {cont}</div>
      <button onClick={handleClick}>Click</button>
    </>
  );
};

export default ItemListContainer;
