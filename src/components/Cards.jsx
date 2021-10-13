import React from "react";

export const Cards = (props) => {
  const { thumbnail, description, name } = props.datos;
  return (
    <>
      <div>
        <img src={`${thumbnail.path}/portrait_xlarge.jpg`} alt="Heroe - logo" />
        <h3>{name}</h3>
        <p>{description}</p>
        <div>
          <button>View more</button>
          <h4>Related comics</h4>
        </div>
      </div>
    </>
  );
};
