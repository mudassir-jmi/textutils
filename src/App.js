
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm'
import React, { useState } from 'react';
import Alert from './components/Alert';
// import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light'); //dark mode is enabled or not
   const [alert, setAlert] = useState(null)
   const showAlert = (message,type) =>{
         setAlert({
           msg: message,
           type: type
         })
         //to destroy alert function
         setTimeout(()=>{
           setAlert(null);
         }, 1500);
   }
  const toggleMode = () =>{
    if(mode ==='light'){
      setMode('dark');
      document.body.style.background = "#042743";
      showAlert("Dark mode has been enabled","success");
      document.title = 'TextUtils - Dark Mode';

      // setInterval(() => {
      //   document.title = "TextUtils is Amazing";
      // },2000);
      // setInterval(() => {
      //   document.title = "Install TextUtils";
      // },1000);
    }
    else{
       setMode('light');
       document.body.style.background = "white";
       showAlert("Light mode has been enabled","success");
       document.title = 'TextUtils - Light Mode';
    }
     
  }
  return (
     <>
   <Router>
      <Navbar title = "TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert = {alert} />
      <div className="container my-3">
      <Switch>
          <Route path="/about">
            <About/>
          </Route>
          <Route path="/">
            <TextForm showAlert={showAlert}heading = "Try TextUtils - Word Counter, Character Counter, Remove extra Spaces" mode={mode} />
             </Route>
        </Switch>
         </div>
      </Router>
      
       </>
  );
}

export default App;
