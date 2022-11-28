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
  const togleMOde = ()=> {
    // console.log(document.body.style.backgroundColor)
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
      document.getElementById("main").style.color = "white";
      document.querySelector("#main textarea").style.backgroundColor = "darkgray"
      document.querySelector("#main textarea").style.color = "white"
    }
    else
    {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.getElementById("main").style.color = "black";
      document.querySelector("#main textarea").style.backgroundColor = "white"
      document.querySelector("#main textarea").style.color = "black"

    }
  }
  const [alert,setAlert] = useState(null);
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
    <Router>
    <div className="container my-3">
    <Navbar title="Rikesh Test Store" about="About Us" home="Home" mode={mode} togleMOde={togleMOde}/>
    </div>
    <Alert alert = {alert}/>
    <div className="container">
    <Routes>
      <Route exact path="/about" element={<About />}/>
      <Route exact path="/" element={<TextForm alertMessage={alertMessage} heading="Please enter text here for analysis"/>}/>
    </Routes> 
    {/* exact keyword needs to be use because react uses partial matching unless */}
    </div>
    <div className="container">
    </div>
    </Router>
    </>
  );
}

export default App;
