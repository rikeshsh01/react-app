import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import React,{useState} from 'react';
import Alert from './Components/Alert';

import {
  BrowserRouter as Router,
  // Switch,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [mode,setMode] = useState("light");
  const [alert,setAlert] = useState(null);
  const togleMOde = ()=> {
    // console.log(document.body.style.backgroundColor)
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
      document.body.style.color = "white";
      if (document.location.pathname === "/") {
        console.log("Test")
        document.querySelector("[type='textarea']").style.backgroundColor = "darkgray";
        document.querySelector("[type='textarea']").style.color = "white";
      }

      alertMessage("Dark Mode Enabled","success");
    }
    else
    {
      setMode("light");
      
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      if (document.location.pathname === "/") {
        console.log("Test");
        document.querySelector("[type='textarea']").style.backgroundColor = "white";
        document.querySelector("[type='textarea']").style.color = "black";
      }

      alertMessage("Light mode enabled","success");

    }
  }

  const alertMessage =(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
      
    }, 2000);

  }
  return (
    <>
    <div className="container my-1">
    <Router>
    <div className="navBarClass my-3">
    <Navbar title="Rikesh Test Store" about="About Us" home="Home" mode={mode} togleMOde={togleMOde}/>
    </div>
    <div className="alertClass my-2">
    <Alert alert = {alert}/>
    </div>
    <Routes className="componentClass">
      <Route exact path="/about" element={<About mode={mode}/>}/>
      <Route exact path="/" element={<TextForm alertMessage={alertMessage} mode={mode} heading="Please enter text here for analysis"/>}/>
    </Routes> 
    {/* exact keyword needs to be use because react uses partial matching unless */}
    </Router>
    </div>
    </>
  );
}

export default App;
