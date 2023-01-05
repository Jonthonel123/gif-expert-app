import React, { useState } from "react";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch"]);

  const onAddCategory = () => {
    setCategories([...categories, "Valorant"]);
    // setCategories((cat) => [...cat, "Valorant"]);
  };
  return (
    <>
      <h1>GifExpertApp</h1>

      <button onClick={onAddCategory}>Agregar</button>
      <ol>
        {categories.map((categorie) => {
          return <li key={categorie}>{categorie}</li>;
        })}
      </ol>
    </>
  );
};
