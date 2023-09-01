

import React, { useState } from 'react'
import "./components.css";
const  DarkTheme= ({getColor}) => {
    const [newstyle,updateStyle]=useState({
        justifyContent:"flex-start",
        backgroundColor:"#94A0B3"
    })
   
    function handleClick(){
       
        if(newstyle.justifyContent==="flex-start"){
            updateStyle({justifyContent:"flex-end",backgroundColor:"blue"})
            getColor("#34312D")
        }
        else{
            updateStyle({justifyContent:"flex-start",backgroundColor:"#94A0B3"})
            getColor("#F3F3F4")
        }
    }
  return (
    <div className="dark-theme" onClick={handleClick} style={newstyle}>
        <div className="button"></div>
    </div>
  )
}

export default DarkTheme;