import React /* , { useState, useEffect }  */ from "react";
import GifGridItem from "./GifGridItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

const GifGrid = ({ category }) => {
  const { data: images, loading } = useFetchGifs(category);

  return (
    <>
      <h3 className="animate__animated animate__fadeIn">{category}</h3>

      {loading && <p className="animate__animated flash">Loading</p>}

      <div className="card-grid">
        {images.map((img) => (
          <GifGridItem
            key={img.id}
            // Hago esto en lugar de lo de abajo
            // Se envia cada una de las propiedades de img como propiedades independientes
            {...img}
            /* img={img}  */
          />
        ))}
      </div>
    </>
  );
};

export default GifGrid;
