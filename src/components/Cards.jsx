import React, {useState} from "react";
import '../styles/cards.css';
import "../styles/modal.css"
import {Modal} from "./Modal";

export const Cards = (props) => {
  const { thumbnail, description, name } = props.datos;

const [mostrar, setMostrar] = useState(false);

const mostrarModal = () =>{
  setMostrar(!mostrar);
}

  return (
    <>
      <div>
        <img src={`${thumbnail.path}/portrait_xlarge.jpg`} alt="Heroe - logo" />
        <h3>{name}</h3>
        <p>{description}</p>
        <div>
          <button onClick={()=>{mostrarModal()}}>View more</button>
          <h4>Related comics</h4>
        </div>
      </div>
      <Modal ver = {mostrar} 
            imagen = {thumbnail} 
            nombre = {name} 
            descripcion = {description}
            onClose = {()=>setMostrar(false)}/>
    </>
  );
};
