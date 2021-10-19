import React from "react";

export const Favoritos = () => {

    let favoritos = JSON.parse(localStorage.getItem("Favoritos"));
    
    return (
        
        (!favoritos)
        ?(<>
        <div id="favContainer">
        <div id="favHeader">
          <img
            src="./assets/images/btn-favourites-primary.png"
            alt="favorites logo"
          />
          My favourites
        </div>
      </div>
        </>):(
          <>
        <div id="favContainer">
        <div id="favHeader">
          <img
            src="./assets/images/btn-favourites-primary.png"
            alt="favorites logo"
          />
          My favourites
        </div>
      </div>
      <div>
        <img src={`${favoritos[0].images}/portrait_xlarge.jpg`} alt="comic - logo" />
        <h4>
          <b>{favoritos[0].title}</b>
        </h4>
      </div>
      </>)

    )
        }