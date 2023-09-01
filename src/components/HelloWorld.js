

import React ,{useContext} from 'react'
import { ThemeContext } from '../App';

const HelloWorld = () => {
    const newColor = useContext(ThemeContext);
    let style = {
        backgroundColor: "",
        color: "",

    }
    let h2border = {
        borderBottom: ""
    }
    let codestyle={
        backgroundColor:""
    }
    if (newColor === "#34312D") {
        style.backgroundColor = "#34312D"
        style.color = "#F3F3F4"
        h2border.borderBottom = "2px solid #F3F3F4"
        codestyle.backgroundColor="#030301"
    }
    else {
        style.backgroundColor = "#F3F3F4"
        style.color = "#34312D"
        h2border.borderBottom = "2px solid #34312D"
        codestyle.backgroundColor="#D8DCE9" 
    }
    return (
        <div className='article' id="hello-world" style={style}>
            <h2 style={h2border} >Hello world</h2>
            <p>To get started with writing JavaScript, open the Scratchpad and write your first "Hello world" JavaScript code:</p>
            <br />
            <code>
                <pre style={codestyle}> 
                    {
     `function greetMe(yourName) 
    {
        alert("Hello " + yourName); 
    }
    greetMe("World");`
                }
                </pre>
            </code>
            <p>Select the code in the pad and hit Ctrl+R to watch it unfold in your browser!</p>
        </div>
    )
}

export default HelloWorld;