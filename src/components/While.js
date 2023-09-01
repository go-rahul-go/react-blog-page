import React, { useContext } from 'react'
import { ThemeContext } from '../App';


const While = () => {
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
        <div className='article' id="while" style={style}>
            <h2 style={h2border}>while statement</h2>
            <p>A while statement executes its statements as long as a specified condition evaluates to true. A while statement looks as follows</p>
            <br />
            <code>
                <pre style={codestyle}>
                    {`while (condition) statement`}
                </pre>
            </code>
            <br />
            <p>If the condition becomes false, statement within the loop stops executing and control passes to the statement following the loop.
                The condition test occurs before statement in the loop is executed. If the condition returns true, statement is executed and the condition is tested again. If the condition returns false, execution stops and control is passed to the statement following while.</p>
            <br />
            <p>To execute multiple statements, use a block statement {`({ ... })`} to group those statements.</p>
            <br/>
            <p>example:</p>
            <p>The following while loop iterates as long as n is less than three:</p>
            <br/>
            <code>
                <pre style={codestyle}>
                    {`var n = 0; var x = 0; while (n < 3) { n++; x += n; }`}
                </pre>
            </code>
            <br/>
            <p>With each iteration, the loop increments n and adds that value to x. Therefore, x and n take on the following values:</p>
            <ul>
                <li>After the first pass: n = 1 and x = 1</li>
                <li>After the second pass: n = 2 and x = 3</li>
                <li>After the third pass: n = 3 and x = 6</li>
            </ul>
            <br/>
            <p>After completing the third pass, the condition {`n < 3`} is no longer true, so the loop terminates.</p>
        </div>
    )
}

export default While;