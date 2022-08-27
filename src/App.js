import React from 'react';
import { useState } from 'react';
import Meme from './Components/Meme'; 
import Header from './Components/Header'; 
import "bootstrap/dist/css/bootstrap.min.css"

// import "bootstrap/dist/css/bootstrap.min.css" 

export default function App() {
  const [darkMode,setDrakMode] = useState({
    dark : false
  })

  function Toggle(e){

    const {name,value} = e.target
    console.log(e.target.value)

    setDrakMode(prevState =>({
      ...prevState,
      [name] : value === "true" ? false : true
    }))

  }
      return (
            <div> 
              <Header darkMode = {darkMode.dark} Dark={Toggle} />
              <Meme darkMode = {darkMode.dark} />
            </div> 
          ) 

} 