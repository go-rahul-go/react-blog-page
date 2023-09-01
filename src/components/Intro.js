


import React, { useContext } from 'react'
import { ThemeContext } from '../App';
const Intro = () => {
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
    <div className='article' style={style} id="introduction">
        <h2 style={h2border}>introduction</h2>
        <p>JavaScript is a cross-platform, object-oriented scripting language. It is a small and lightweight language. Inside a host environment (for example, a web browser), JavaScript can be connected to the objects of its environment to provide programmatic control over them.</p>
        <br/>
        <p>JavaScript contains a standard library of objects, such as Array, Date, and Math, and a core set of language elements such as operators, control structures, and statements. Core JavaScript can be extended for a variety of purposes by supplementing it with additional objects; for example:</p>
        <br/>
        <ul>
            <li>Client-side JavaScript extends the core language by supplying objects to control a browser and its Document Object Model (DOM). For example, client-side extensions allow an application to place elements on an HTML form and respond to user events such as mouse clicks, form input, and page navigation.</li>
            <li>Server-side JavaScript extends the core language by supplying objects relevant to running JavaScript on a server. For example, server-side extensions allow an application to communicate with a database, provide continuity of information from one invocation to another of the application, or perform file manipulations on a server.</li>
        </ul>
    </div>
  )
}

export default Intro;