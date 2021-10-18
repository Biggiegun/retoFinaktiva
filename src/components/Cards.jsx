import React, { useState } from "react";
import "../styles/cards.css";
import "../styles/modal.css";
import { Modal } from "./Modal";

export const Cards = (props) => {
  const { thumbnail, description, name } = props.datos;

  let comicHeroes = [];
  let comicHeroes2 = [];
  //console.log("comics heroe");
  //console.log(props.comic);

  if (props.comic.length === 0) {
    comicHeroes = ["No hay comics para el héroe"];
  } else {
    for (let i = 0; i < props.comic.length; i++) {
      let element = { value: props.comic[i].name };
      let element2 = { comicAdress: props.comic[i].resourceURI };
      comicHeroes.push(element);
      comicHeroes2.push(element2);
      //console.log(comicHeroes[i].value);
    }
    //console.log(comicHeroes);
    //console.log(comicHeroes2);
  }
  let mostrarComic = comicHeroes.slice(0, 4);
  let mostrarComic2 = comicHeroes2.slice(0, 4);

  let titles = mostrarComic.map((e, index) => {
    return e.value;
  });
  let root = mostrarComic2.map((e, index) => {
    return `${e.comicAdress}?ts=1&apikey=59d547cd60f833c646ae63799d9ef4fd&hash=4cd4dd7f43e711c4ef22198dfb01916a`;
  });

  const [mostrar, setMostrar] = useState(false);

  const mostrarModal = () => {
    setMostrar(!mostrar);
  };

  return (
    <>
      <div id="cardContainer">
        <img src={`${thumbnail.path}/portrait_xlarge.jpg`} alt="Heroe - logo" />
        <h3>{name}</h3>
        <p>{description}</p>
        <div>
          <h4>Related comics</h4>
          <div
            onClick={() => {
              mostrarModal();
            }}
          >
            {mostrarComic2.map((datos, index) => {
              return <Modal
                  key={index}
                  ver={mostrar}
                  datos={datos}
                  onClose={() => setMostrar(false)}
                />
            })}
            <button>VIEW MORE</button>
          </div>
          {mostrarComic.map((e, index) => {
              return <p key={index}>{e.value}</p>
          })}
        </div>
      </div>
    </>
  );
};
