import React from "react";
import "../styles/modal.css";

export const Modal = (props) => {
  if (!props.ver) {
    return null;
  }
  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <button className="button" onClick={props.onClose}>X</button>
        </div>
        <div className="modal-body">
          <div className="modal-title">
              <h3>{props.nombre}</h3>
          </div>
          <img
            src={`${props.imagen.path}/portrait_xlarge.jpg`}
            alt="Heroe - logo"
          />
          <p>{props.descripcion}</p>
        </div>
      </div>
    </div>
  );
};
