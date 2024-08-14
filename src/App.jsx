import React, { useEffect } from 'react'
import Navbar from './Components/NavBar/Navbar'
import { useState } from 'react'

const App = () => {

  const current_theme = localStorage.getItem('current_theme');

  const [theme,setTheme]=useState(current_theme ? current_theme : 'light');
  useEffect(()=>{
    localStorage.setItem('current_theme', theme)
  },[theme])
  return (
    <div className= {`container  ${theme}`}>
      <Navbar theme={theme} setTheme={setTheme}/>
    </div>
  )
}

export default App