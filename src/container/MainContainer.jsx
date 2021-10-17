import React, { useState, useEffect } from "react";
import { Cards } from "../components/Cards";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";

const url =
  "https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=59d547cd60f833c646ae63799d9ef4fd&hash=4cd4dd7f43e711c4ef22198dfb01916a";

export const MainContainer = () => {
  const [dataHeroe, setDataHeroe] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [error, setError] = useState(false);

  const getHeroes = async () => {
    const res = await fetch(url);
    const data = await res.json();
    setDataHeroe(data.data.results);
  };

  console.log(dataHeroe);

  useEffect(() => {
    getHeroes();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (searchTerm === "") {
      const res = await fetch(url);
      const data = await res.json();
      setDataHeroe(data.data.results);
      setError(false);
    } else {
      const res = await fetch(`https://gateway.marvel.com:443/v1/public/characters?name=${searchTerm}&ts=1&apikey=59d547cd60f833c646ae63799d9ef4fd&hash=4cd4dd7f43e711c4ef22198dfb01916a`);
      const data = await res.json();
      console.log(data.data.results);
      setDataHeroe(data.data.results);
      setError(false);
      if (!dataHeroe.length) {
        setError(true);
        return;
      }
    }
  };

  const buscar = (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="searchTerm"
        placeholder="Search Character"
        onChange={(e) => setSearchTerm(e.target.value)}
        value={searchTerm}
      />
      <button>
        <img src="./assets/images/search.png" alt="search button" />
      </button>
    </form>
  );

  return (
    <div>
      <Navbar form={buscar} />
      <div>
        <img src="./assets/images/characters.png" alt="Characters - logo" />
        <p>Characters</p>
      </div>
      <div>
        <div>
        {error && (
          <div>
            <img
              src="https://res.cloudinary.com/biggiegun/image/upload/v1631536135/APISprint2/noResults_kuvjqy.png"
              alt="Héroe no Encontrado !!"
            />
            <h3>No se encontraron resultados para: {searchTerm}</h3>
          </div>
        )}
      </div>
      
        {dataHeroe.map((item, index) => {
          return <Cards key={index} datos={item} comic={item.comics.items} />;
        })}
      </div>
      <Footer />
    </div>
  );
};
