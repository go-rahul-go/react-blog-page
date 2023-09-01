import React,{useContext} from 'react'
import { ThemeContext } from '../App';

const Variables = () => {
    const newColor = useContext(ThemeContext);
    let style = {
        backgroundColor: "",
        color: "",

    }
    let h2border = {
        borderBottom: ""
    }

    if (newColor === "#34312D") {
        style.backgroundColor = "#34312D"
        style.color = "#F3F3F4"
        h2border.borderBottom = "2px solid #F3F3F4"
       
    }
    else {
        style.backgroundColor = "#F3F3F4"
        style.color = "#34312D"
        h2border.borderBottom = "2px solid #34312D"
    }
  return (
    <div className='article' id="variables" style={style}>
        <h2 style={h2border}>Variables</h2>
        <p>You use variables as symbolic names for values in your application. The names of variables, called identifiers, conform to certain rules.</p>
        <br/>
        <p>A JavaScript identifier must start with a letter, underscore (_), or dollar sign ($); subsequent characters can also be digits (0-9). Because JavaScript is case sensitive, letters include the characters "A" through "Z" (uppercase) and the characters "a" through "z" (lowercase).</p>
        <br/>
        <p>You can use ISO 8859-1 or Unicode letters such as å and ü in identifiers. You can also use the Unicode escape sequences as characters in identifiers. Some examples of legal names are Number_hits, temp99, and _name.</p>
    </div>
  )
}

export default Variables;