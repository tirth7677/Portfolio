import React from "react";
import Fotter from "../Component/Fotter";
import Navbar from "../Component/Navbar";
import "../index.css";
import Mainaboutme from "./Mainaboutme";
function Aboutme() {
  return (
    <>
      <Navbar />
      <br/>
      <Mainaboutme/>
      <Fotter />
    </>
  );
}
export default Aboutme;