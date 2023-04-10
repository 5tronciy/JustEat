import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Advantages from "../components/Advantages/Advantages";
import About from "../components/About/About";
import Fresh from "../components/Fresh/Fresh";
import Chef from "../components/Chef/Chef";

const Home = () => {
  return (
    <>
      <Header />
      <Advantages />
      <About />
      <Fresh />
      <Chef />
      <Footer />
    </>
  );
};

export default Home;
