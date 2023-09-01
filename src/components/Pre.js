

import React, { useContext } from 'react'
import "./components.css";
import {ThemeContext} from "../App";

const Pre = () => {

    const newColor=useContext(ThemeContext);
    let style={
        backgroundColor:"",
        color:"",
    
    }
    let h2border={
        borderBottom:""
    }
    if(newColor==="#34312D")
    {
        style.backgroundColor="#34312D"
        style.color="#F3F3F4"
        h2border.borderBottom="2px solid #F3F3F4"
    }
    else{
        style.backgroundColor="#F3F3F4"
        style.color="#34312D"
        h2border.borderBottom="2px solid #34312D"
    }
    
  return (
    <div className="article" id="pre" style={style}>
        <h2 style={h2border}>What you should already Know ?</h2>
        <p>This guide assumes you have the following basic background:</p>
        <ul>
            <li>A general understanding of the Internet and the World Wide Web (WWW).</li>
            <li>Good working knowledge of HyperText Markup Language (HTML).</li>
            <li>Some programming experience. If you are new to programming, try one of the tutorials linked on the main page about JavaScript.</li>
        </ul>
    </div>
  )
}

export default Pre;