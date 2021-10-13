import React from "react";
import { Cards } from "../components/Cards";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";

export const MainContainer = () => {
  return (
    <div>
      <Navbar />
      <p>Hola Mundo</p>
      <Cards />
      <Footer />
    </div>
  );
};
