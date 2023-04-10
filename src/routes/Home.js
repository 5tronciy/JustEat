import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Advantages from "../components/Advantages/Advantages";
import About from "../components/About/About";
import Fresh from "../components/Fresh/Fresh";

const Home = () => {
  return (
    <>
      <Header />
      <Advantages />
      <About />
      <Fresh />
      <Footer />
    </>
  );
};

export default Home;
