import React,{useContext} from 'react'
import "./components.css";
import { ThemeContext } from '../App';
const VarDeclare = () => {
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
    <div className="article" id="var-declare" style={style}>
        <h2 style={h2border}>Declaring Variables</h2>
        <p>You can declare a variable in three ways:</p>
        <br/>
        <p>With the keyword var. For example,</p>
        <br/>
        <code>
            <pre style={codestyle}>
            var x = 42;
            </pre>
        </code>
        <br/>
        <p>This syntax can be used to declare both local and global variables.</p>
        <br/>
        <p>By simply assigning it a value. For example,</p>
        <br/>
        <code>
            <pre style={codestyle}>
            x = 42;
            </pre>
        </code>
        <br/>
        <p>This always declares a global variable. It generates a strict JavaScript warning. You shouldn't use this variant.</p>
        <br/>
        <p>With the keyword let. For example,</p>
        <br/>
        <code>
            <pre style={codestyle}>
            let y = 13;
            </pre>
        </code>
        <br/>
        <p>This syntax can be used to declare a block scope local variable. See Variable scope below.</p>
    </div>
  )
}

export default VarDeclare;