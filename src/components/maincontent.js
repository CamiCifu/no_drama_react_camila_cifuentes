import React from "react";

export const MainContent = ({ titulo }) => {
  //estoy aprovechando desestructuracion dentro de () en lugar de hacer luego --> const titulo} = props
  console.log({ titulo });
  return (
    <section>
      <h2 style={{ margin: "3rem" }}>{titulo}</h2>
    </section>
  );
};
