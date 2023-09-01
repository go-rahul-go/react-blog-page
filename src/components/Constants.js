import React,{useContext} from 'react'
import { ThemeContext } from '../App';
const Constants = () => {
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
    <div className='article' id="constants" style={style}>
        <h2 style={h2border}>Constants</h2>
        <p>You can create a read-only, named constant with the const keyword. The syntax of a constant identifier is the same as for a variable identifier: it must start with a letter, underscore or dollar sign and can contain alphabetic, numeric, or underscore characters.</p>
        <br/>
        <code>
            <pre style={codestyle}>
            const PI = 3.14;
            </pre>
        </code>
        <br/>
        <p>A constant cannot change value through assignment or be re-declared while the script is running. It has to be initialized to a value.</p>
        <br/>
        <p>The scope rules for constants are the same as those for let block scope variables. If the const keyword is omitted, the identifier is assumed to represent a variable.</p>
        <br/>
        <p>You cannot declare a constant with the same name as a function or variable in the same scope. For example:</p>
        <br/>
        <code>
            <pre style={codestyle}>
           {
            `// THIS WILL CAUSE AN ERROR 
    function f() {}; const f = 5; // error 
    function f() { 
        const g = 5; 
        var g;
    //statements 
}`
           }
            </pre>
        </code>
        <br/>
        <p>However, object attributes are not protected, so the following statement is executed without problems.</p>
        <br/>
        <code>
            <pre style={codestyle}>
                {
    `const MY_OBJECT = {"key": "value"}; 
    MY_OBJECT.key = "otherValue";`
                }
            </pre>
        </code>
    </div>
  )
}

export default Constants;