//import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import FormText from './components/FormText';
import About from './components/About';
import React, { useState } from 'react';
import Alert from './components/Alert';
import {
   BrowserRouter,
   Route,
   Routes 
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)

  
  
  const showAlert = (messege,type) =>{
       setAlert({
        msg: messege,
        type: type
       })
       setTimeout(() => {
        setAlert(null)
       }, 1500);
  }
  const toggleMode=()=>{
    if(mode==='light')
    {
      setMode('dark')
      document.body.style.backgroundColor='#270c53';
      showAlert('Dark Mode has been enabled','success');
    }
    else
    {
      setMode('light')
      document.body.style.backgroundColor='white';
      showAlert('Light Mode has been enabled','success');
    }
  }
    const radioToggle=(value)=>{
      
      switch(value)
        {
          
          case 'option1':
            setMode('primary')
            document.body.style.backgroundColor='#3f71bb';
            showAlert('Selected Mode has been enabled','success'); 
            break;
          case 'option2':
            setMode('secondary')
            document.body.style.backgroundColor='#8b949b';
            showAlert('Selected Mode has been enabled','success');
            break;
          case 'option3':
            setMode('success')
            document.body.style.backgroundColor='#20c997';
            showAlert('Selected Mode has been enabled','success');
            break;
          case 'option4':
            setMode('danger')
              document.body.style.backgroundColor='#986469';
              showAlert('Selected Mode has been enabled','success');
              break; 
          case 'option5':
            setMode('warning')
              document.body.style.backgroundColor='#ab985f';
              showAlert('Selected Mode has been enabled','success');
              break; 
          case 'option6':
            setMode('info')
            document.body.style.backgroundColor='#19859b';
            showAlert('Selected Mode has been enabled','success');
            break;  
          case 'option7':
            setMode('light')
            document.body.style.backgroundColor='white';
            showAlert('Light Mode has been enabled','success');
            break;
          case 'option8':
            setMode('dark')
            document.body.style.backgroundColor='#270c53';
            showAlert('Dark Mode has been enabled','success'); 
            break;
          default:
            setMode('light')
            document.body.style.backgroundColor='white';
            showAlert('Light Mode has been enabled','success');
            break;                       
        }
     
    }
    
  

  return (
    <>
          <BrowserRouter>
          {/* <Navbar title="TextUtils" aboutText="About Us"/> */}
          {/* <Navbar/> */}
          
          <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} radioToggle={radioToggle}/>
          <Alert Alert={alert}/>
          
          <div className="container my-3" >
          <Routes>
            <Route path="/" element={<FormText showAlert={showAlert} heading="Try TextUtils - Word Counter, Character Counter,Remove Extra Spaces" mode={mode}/>}></Route>
            <Route path="/about" element={<About mode={mode} />}></Route>

            {/* <FormText showAlert={showAlert} heading="Enter Text To Analyse" mode={mode}/> */}
            {/* <About/> */}
            </Routes>
          
          </div>
          </BrowserRouter>
    </>
  );
}

export default App;
