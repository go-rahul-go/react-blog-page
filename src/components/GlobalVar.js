import React,{useContext} from 'react'
import { ThemeContext } from '../App';
const GlobalVar = () => {
    const newColor = useContext(ThemeContext);
    let style = {
        backgroundColor: "",
        color: "",

    }
    let h2border = {
        borderBottom: ""
    }
    // let codestyle={
    //     backgroundColor:""
    // }
    if (newColor === "#34312D") {
        style.backgroundColor = "#34312D"
        style.color = "#F3F3F4"
        h2border.borderBottom = "2px solid #F3F3F4"
        // codestyle.backgroundColor="#030301"
    }
    else {
        style.backgroundColor = "#F3F3F4"
        style.color = "#34312D"
        h2border.borderBottom = "2px solid #34312D"
        // codestyle.backgroundColor="#D8DCE9" 
    }
  return (
    <div className='article' id="global-variables" style={style}>
        <h2 style={h2border}>Global Variables</h2>
        <p>Global variables are in fact properties of the global object. In web pages the global object is window, so you can set and access global variables using the window.variable syntax.</p>
        <br/>
        <p>Consequently, you can access global variables declared in one window or frame from another window or frame by specifying the window or frame name. For example, if a variable called phoneNumber is declared in a document, you can refer to this variable from an iframe as parent.phoneNumber.</p>
    </div>
  )
}

export default GlobalVar