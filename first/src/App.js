import Navbar from "./components/Navbar";
import PropTypes from 'prop-types'
import Form from "./components/Form";
import React, { useState } from 'react';
import Alert from "./components/Alert";
// import About from "./components/About";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";





function App() {

  const [mode, setmode] = useState('light');
  const [alert, setalert] = useState(null);

        const showalert=(message,type)=>{
          setalert(
            {
              msg:message,
              type:type
            }
          
          )
          setTimeout(() => {
            setalert(null)
          }, 3000);

        }

        const Togglemode=()=>{
          if(mode==='light'){
            setmode('dark');
            document.body.style.backgroundColor=  '#09326f';
            showalert('Dark mode enabled','success')
          }
          else{
            setmode('light');
            document.body.style.backgroundColor = 'white';
            showalert('Light mode enabled','success')
          }

        }

          
          return (
            <>
            <Navbar title='TextUtils' mode={mode} Togglemode={Togglemode}/>
            <Alert alert={alert}></Alert>
            <div className="container my-4" >
              
            <Form heading="Text Analyzer" mode={mode}/>
           {/* <About/>   */}
            </div>
            
   </>
    
  );
}

export default App;

Navbar.propTypes  ={title: PropTypes.string,
  about: PropTypes.string
}

Navbar.defaultProps={
  title:'Title',about:'write about here'
}

