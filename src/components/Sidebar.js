import React, { useEffect, useState,useContext } from 'react'
import "./components.css";
import { ThemeContext } from '../App';

const Sidebar = ({ isDisplay, change }) => {

    const [newStyle, changeStyle] = useState("none");
   

    const newTheme = useContext(ThemeContext)
    let style = {
        backgroundColor: "",
        color: "",
        border:""
    }

    let linkStyle={
        borderBottom:"",
        textDecoration:"none",
        color:"",
    }

    if (newTheme === "#34312D") {  //dark
        style.backgroundColor = "#34312D"
        style.color = "#F3F3F4"
        style.border="1px solid #F3F3F4"
        linkStyle.borderBottom="1px solid #F3F3F4"
        linkStyle.color="#F3F3F4"
    }
    else {  //light
        style.backgroundColor = "#F3F3F4"
        style.color = "#34312D"
        style.border="1px solid #34312D"
        linkStyle.borderBottom="1px solid #34312D"
        linkStyle.color="#34312D"
    }

    function hide() {
        if (newStyle === "flex") {
            changeStyle("none")
            change("hide")
        }
        else {
            changeStyle("flex")
            change("show")
        }
    }
    useEffect(() => {
        if (isDisplay === "show") {

            changeStyle("flex")

            change("show")

        }
        else {

            changeStyle("none")

            change("hide")

        }

    }, [isDisplay])


    return (
        <div className="side-bar" style={{...style,display:newStyle}}>
            <div className="close"  >
                <span onClick={hide}>x</span>
            </div>
            <div className="links" >
                <a style={linkStyle} href="#introduction">introduction</a>
                <a style={linkStyle} href="#pre">pre-requisite</a>
                <a style={linkStyle} href="#js-and-java">javascript and java</a>
                <a style={linkStyle} href="#hello-world">hello world</a>
                <a style={linkStyle} href="#variables">variables</a>
                <a style={linkStyle} href="#dec-variables">declaring variables</a>
                
                <a style={linkStyle} href="#global-variables">global variables</a>
                <a style={linkStyle} href="#constants">constants</a>
                <a style={linkStyle} href="#data-types">data types</a>
                <a style={linkStyle} href="#if-else">if...else</a>
                <a style={linkStyle} href="#while">while</a>
                <a style={linkStyle} href="#function">functions</a>
                <a style={linkStyle} href="#reference">reference</a>
            </div>
        </div>
    )
}

export default Sidebar;