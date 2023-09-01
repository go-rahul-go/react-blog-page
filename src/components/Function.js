import React, { useContext } from 'react'
import { ThemeContext } from '../App';


const Function = () => {
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
        <div className='article' id="function" style={style}>
            <h2 style={h2border}>function declartion</h2>
            <p>A function definition (also called a function declaration, or function statement) consists of the function keyword, followed by:</p>
            <br />
            
            <ul>
                <li>The name of the function.1</li>
                <li>A list of arguments to the function, enclosed in parentheses and separated by commas.</li>
                <li>The JavaScript statements that define the function, enclosed in curly brackets, { }.</li>
            </ul>
            <br/>
            <p>For example, the following code defines a simple function named square:</p>
            <br/>
            <code>
<pre style={codestyle}>
    {`function square(number) 
    { 
        return number * number; 
    }`
    }
</pre>
            </code>
            <br/>
            <p>The function square takes one argument, called number. The function consists of one statement that says to return the argument of the function (that is, number) multiplied by itself. The return statement specifies the value returned by the function.</p>
            <br/>
            <code>
                <pre style={codestyle}>
                    {`return number * number;`}
                </pre>
            </code>
            <br/>
            <p>Primitive parameters (such as a number) are passed to functions by value; the value is passed to the function, but if the function changes the value of the parameter, this change is not reflected globally or in the calling function.</p>
        </div>
    )
}

export default Function;