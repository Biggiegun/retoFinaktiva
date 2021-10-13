import React, { useState, useEffect } from "react";
import { Cards } from "../components/Cards";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";

const url = "https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=59d547cd60f833c646ae63799d9ef4fd&hash=4cd4dd7f43e711c4ef22198dfb01916a";

export const MainContainer = () => {
  
    const [dataHeroe, setDataHeroe] = useState([])

    const getHeroes = async () =>{
        const res = await fetch(url);
        const data = await res.json();
        setDataHeroe(data.data.results)        
    }

    console.log(dataHeroe)

    useEffect(() => {
        getHeroes()
    }, [])
  

    return (
    <div>
      <Navbar />
        <div>
           <img src="./assets/images/characters.png" alt="Characters - logo" /><p>Characters</p> 
        </div>
      <div>{dataHeroe.map((item, index)=>{
          return  <Cards key={index} datos={item}/>
      })}
    </div>
      <Footer />
    </div>
  );
};
