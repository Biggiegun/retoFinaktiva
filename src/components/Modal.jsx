import React, {useState, useEffect} from "react";
import "../styles/modal.css";

export const Modal = (props) => {
  
  const [state, setState] = useState([]);
  const {comicAdress} = props.datos

  const root = `${comicAdress}?ts=1&apikey=59d547cd60f833c646ae63799d9ef4fd&hash=4cd4dd7f43e711c4ef22198dfb01916a`;

  const getComics = async () => {
    const res = await fetch(root);
    const data = await res.json();
    setState(data.data.results);
  };

  useEffect(() => {
    getComics();
  }, []);
  
 let imageComic = state[0].images[0];

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
            <img src={`${imageComic.path}/portrait_xlarge.jpg`} alt="Comic - logo" />
            <p>{state[0].title}</p>
            <p>{state[0].description}</p>
          </div>
        </div>
        <div id="modal-footer">
          <div> <button><img src="./assets/images/btn-favourites-default.png" alt="add icon" /> ADD TO FAVOURITES</button></div>
          <div> <button><img src="./assets/images/shopping-cart-primary.png" alt="buy icon" /> BUY FOR $3.99</button></div>
        </div>
      </div>
    </div>
  );
};
