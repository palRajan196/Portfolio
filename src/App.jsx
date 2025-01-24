import React from "react";
import "./App.css";
import Header from "./Components/Header";
import About from "./Components/About";
import { Services } from "./Components/Services";
import { Works } from "./Components/Works";
import { Contacts } from "./Components/Contacts";
import { Bottom } from "./Components/Bottom";

export function App(){
  return(
    <>
    <Header/>
    <About/>
    <Services/>
    <Works/>
    <Contacts/>
    <Bottom/>
    </>
  )
}
//export default App;