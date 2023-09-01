import React,{useContext} from 'react'
import { ThemeContext } from '../App';
const IfElse = () => {
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
    <div className='article' id="if-else" style={style}>
        <h2 style={h2border}>if  ... else statement</h2>
        <p>Use the if statement to execute a statement if a logical condition is true. Use the optional else clause to execute a statement if the condition is false. An if statement looks as follows:</p>
        <br/>
        <code>
            <pre style={codestyle}>
                {
                    `if (condition) { statement_1; } else { statement_2; }`
                }
            </pre>
        </code>
        <br/>
        <p>condition can be any expression that evaluates to true or false. See Boolean for an explanation of what evaluates to true and false. If condition evaluates to true, statement_1 is executed; otherwise, statement_2 is executed. statement_1 and statement_2 can be any statement, including further nested if statements.</p>
        <br/>
        <p>You may also compound the statements using else if to have multiple conditions tested in sequence, as follows:</p>
        <br/>
        <code>
            <pre style={codestyle}>
                {
    `if (condition_1) 
    { 
        statement_1; 
    } 
    else if (condition_2) 
    {
        statement_2; 
    } 
    else if (condition_n) 
    { 
        statement_n; 
    } 
    else {
        statement_last; 
    }`
                }
            </pre>
        </code>
        <br/>
        <p>In the case of multiple conditions only the first logical condition which evaluates to true will be executed. To execute multiple statements, group them within a block statement {`({ ... })`} . In general, it's good practice to always use block statements, especially when nesting if statements:</p>
        <br/>
        <code>
            <pre style={codestyle}>
                {
            `if (condition) 
        { 
            statement_1_runs_if_condition_is_true;
            statement_2_runs_if_condition_is_true; 
        } 
        else 
        {
            statement_3_runs_if_condition_is_false;
            statement_4_runs_if_condition_is_false; 
        }`}
            </pre>
        </code>
        <br/>
    </div>
  )
}

export default IfElse;