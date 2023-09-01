import React,{useContext} from 'react'
import { ThemeContext } from '../App';
const DataTypes = () => {
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
    <div className='article' id="data-types" style={style}>
        <h2 style={h2border}>Data types</h2>
        <p>The latest ECMAScript standard defines seven data types:</p>
        <br/>
        <ul>
            <li>Six data types that are primitives:</li>
            <ul className='inner-list'>
                <li>Boolean. true and false.</li>
                <li>null. A special keyword denoting a null value. Because JavaScript is case-sensitive, null is not the same as Null, NULL, or any other variant.</li>
                <li>undefined. A top-level property whose value is undefined.</li>
                <li>Number. 42 or 3.14159.</li>
                <li>String. "Howdy"</li>
                <li>Symbol (new in ECMAScript 2015). A data type whose instances are unique and immutable.</li>
            </ul>
            <li>and Object</li>
        </ul>
        <br/>
        <p>Although these data types are a relatively small amount, they enable you to perform useful functions with your applications. Objects and functions are the other fundamental elements in the language. You can think of objects as named containers for values, and functions as procedures that your application can perform.</p>
    </div>
  )
}

export default DataTypes;