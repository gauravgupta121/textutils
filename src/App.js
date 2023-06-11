import './App.css';
import Alert from './components/Alert';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";



function App() {

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type1) => {
      setAlert({
        msg: message,
        type: type1
      });

      setTimeout(() =>{
        setAlert(null);
      }, 3000
      );
  }

  const toggleMode = () => {
    if(mode ==='dark') {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light Mode is enabled', 'success');
      document.title = 'TextUtil - Light Mode'
    } else {
      setMode('dark');
      document.body.style.backgroundColor = '#193959';
      showAlert('Dark Mode is enabled', 'success');
      document.title = 'TextUtil - Dark Mode'
    }
  }

  return (
    <>
    {/* <Router> */}
    <Navbar title='TextUtils' aboutText='About TextUtil' mode={mode} toggleModeFunction={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3" >
        {/* <Routes> */}
          {/* <Route exact path="/about" element={<About />} /> */}
          {/* <Route exact path="/" element={<TextForm heading="Enter the text to analyze below" onShowAlert={showAlert}/>} /> */}
          <TextForm showAlert={showAlert} heading= 'Enter the Text to Analyze below' mode={mode}/>
        {/* </Routes> */}
    </div>
    {/* </Router> */}
    </>
  );
}

export default App;
