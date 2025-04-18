import { useState } from "react";
import { motion } from "framer-motion";
import './App.css'
import Navbar from "./components/navbar";
import Footer from "./components/Footer";
import FlipCard from "./components/FlipCard";

function App() {
  return (
    <>
      <Navbar />
      <div className="main">
        <FlipCard header="Omkar" desc="He is a Good boy playing Bgmi and chilling around fav song is Raabta"/>
        <FlipCard header="Viraj" desc="He is a Good boy playing Bgmi and chilling around fav song is Raabta"/>
        <FlipCard header="Sinu" desc="He is a Good boy playing Bgmi and chilling around fav song is Raabta"/>
        <FlipCard header="Monty" desc="He is a Good boy playing Bgmi and chilling around fav song is Raabta"/>
        <FlipCard header="Namra" desc="He is a Good boy playing Bgmi and chilling around fav song is Raabta"/>
      </div>
      <Footer />
    </>
  );
}

export default App;
