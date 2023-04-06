import './App.css';
import Navbar from './components/Navbar';
import React, { useState } from 'react'
import TextForm from './components/TextForm';
// import About from './components/About';
// import Contactus from './components/Contactus';
import Alert from './components/Alert';
// import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === 'dark') {
      setMode('light')
      document.body.style.color = "black";
      document.body.style.backgroundColor = "white";
      showAlert("Dark mode enabled", "success");
    } else {
      setMode('dark')
      document.body.style.color = "white";
      document.body.style.backgroundColor = "#133150";
      showAlert("Light mode enabled", "success");
    }
  }

  return (
    <>
      {/* <Router> */}

        <Navbar tittle="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />

        {/* <Routes> */}
          
          {/* <Route exact path="/"> */}
            <TextForm heading="Enter the text to analyze" mode={mode} showAlert={showAlert} />
          {/* </Route> */}
          
          {/* <Route exact path="/About">
            <About mode={mode}/>
          </Route>

          <Route exact path="/Contactus" >
            <Contactus mode={mode}/>
          </Route> */}

        {/* </Routes>
      </Router> */}
    </>
  );
}

export default App;
