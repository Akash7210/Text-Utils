import React from 'react';
import { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
import About from './Components/About';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  const[mode,setMode]=useState('light');

  const [alert,setAlert]=useState(null);

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },2000);

  }


  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='grey';
      showAlert("Dark Mode has been Enabled","success");
      document.title='TextUtils=DarkMode';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light Mode has been Enabled","success");
      document.title='TextUtils=LightMode';
    }
  }
  return (
 <>
 <BrowserRouter>
    <Navbar mode={mode} toggleMode={toggleMode}/> 
    <Alert alert={alert}/>
   
   {/*<TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>*/}

   <div className="container">
          <Routes>
            <Route exact path="/about" element={<About />}>
            </Route>
            <Route exact path="/" element={<TextForm heading="Enter text to analyze"  mode={mode} showAlert={showAlert} />}>
            </Route>
          </Routes>
        </div>
        </BrowserRouter>
  
    
   
    </>
  );
}

export default App;
   