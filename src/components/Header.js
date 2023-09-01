


import React, { useContext } from 'react'
import "./components.css";
import { ThemeContext } from '../App';
const Header = () => {
  const newTheme = useContext(ThemeContext)
  let style={
    backgroundColor:"",
    color:""
  }
  
  let h1Style={
    borderBottom:""
  }
  if(newTheme==="#34312D")
  {
    style.backgroundColor="#34312D"
    style.color="#F3F3F4"
    h1Style.borderBottom="1px solid #F3F3F4"
  }
  else{
    style.backgroundColor="#F3F3F4"
    style.color="#34312D"
    h1Style.borderBottom="1px solid #34312D"
  }
  return (
    <header className="heading" id="heading" style={style}>
        <h1 style={h1Style}>Javascript</h1>
    </header>
  );
}

export default Header;