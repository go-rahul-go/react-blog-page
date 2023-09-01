import React, { useContext } from 'react'
import { ThemeContext } from '../App';


const Reference = () => {
    const newColor = useContext(ThemeContext);
    let style = {
        backgroundColor: "",
        color: "",

    }
    let h2border = {
        borderBottom: ""
    }
    let codestyle = {
        backgroundColor: ""
    }
    if (newColor === "#34312D") {
        style.backgroundColor = "#34312D"
        style.color = "#F3F3F4"
        h2border.borderBottom = "2px solid #F3F3F4"
        codestyle.backgroundColor = "#030301"
    }
    else {
        style.backgroundColor = "#F3F3F4"
        style.color = "#34312D"
        h2border.borderBottom = "2px solid #34312D"
        codestyle.backgroundColor = "#D8DCE9"
    }
    return (
        <div className='article' id="reference" style={style}>
            <h2 style={h2border}>refernce</h2>
            <ul>
                <li>All the documentation in this page is taken from <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide" target="_blank" id="mdn" rel="noreferrer">MDN</a></li>
            </ul>
            <a href="#heading" id="go-top" title="go to top">
            <i class="fa-solid fa-angles-up"></i>
               </a>
        </div>
    )
}

export default Reference;