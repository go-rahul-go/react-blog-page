
import HamBurger from "./components/HamBurger";
import Header from "./components/Header";
import DarkTheme from "./components/DarkTheme";
import Intro from "./components/Intro";
import Pre from "./components/Pre";
import { createContext, useState } from "react";
import JsandJava from "./components/JsandJava";
import HelloWorld from "./components/HelloWorld";
import Variables from "./components/Variables";
import VarDeclare from "./components/VarDeclare";
import GlobalVar from "./components/GlobalVar";
import Constants from "./components/Constants";
import DataTypes from "./components/DataTypes";
import IfElse from "./components/IfElse";
import While from "./components/While";
import Function from "./components/Function";
import Reference from "./components/Reference";
import "./style.css"
export const ThemeContext = createContext();
function App() {
  const [theme,setTheme] = useState("#F3F3F4");

  function getColor(value){
    setTheme(value)
  }
  return(
    <div className="container">
    <DarkTheme getColor={getColor}/>
    <ThemeContext.Provider value={theme}>
      <HamBurger/>
      <Header/>
      <Intro/>
      <Pre/>
      <JsandJava/>
      <HelloWorld/>
      <Variables/>
      <VarDeclare/>
      <GlobalVar/>
      <Constants/>
      <DataTypes/>
      <IfElse/>
      <While/>
      <Function/>
      <Reference/>
    </ThemeContext.Provider>
    </div>
  )
}

export default App;
