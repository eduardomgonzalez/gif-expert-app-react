import React, { useState } from "react";
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";

const GifExpertApp = () => {
  const [categories, setcategories] = useState(["One Punch"]);

  return (
    <>
      <div className="title">
        <h2>GifExpertApp</h2>
      </div>
      <AddCategory setcategories={setcategories} />
      <hr />

      <ol style={{ margin: "0 50px 0 50px" }}>
        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </ol>
    </>
  );
};

export default GifExpertApp;
