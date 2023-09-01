import React, { useState,useContext } from 'react'
import "./components.css";
import Sidebar from './Sidebar';
import { ThemeContext } from '../App';
const HamBurger = () => {
    
  const [visible,update]=useState("hide");
  const newTheme = useContext(ThemeContext)
  let style={
    backgroundColor:"",
    border:""
  }
  let spanStyle={backgroundColor:""}
  // console.log(newTheme)
  if(newTheme==="#34312D")  //dark
  {
    style.backgroundColor="#34312D"
    style.border="1px solid #F3F3F4"
    spanStyle.backgroundColor="#F3F3F4"
  }
  else{
    style.backgroundColor="#F3F3F4"
    style.border="1px solid #34312D"
    spanStyle.backgroundColor="#34312D"
  }
  function show(){
    if(visible==="hide")
    {
      update("show")
    }
    else{
      update("hide")
    }
  }
  return (
    <>
    <div className="hamburger" onClick={show} style={style}>
        <span id="one" style={spanStyle}></span>
        <span id="two" style={spanStyle}></span>
        <span id="three" style={spanStyle}></span>
    </div>
    <Sidebar isDisplay={visible} change={update}/>
    </>
  )
}

export default HamBurger;