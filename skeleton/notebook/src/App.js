import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Alert from './components/Alert';
import Login from './components/Login';
import SignUp from './components/SignUp';

import NoteSate from './components/context/Notestate';
import { useState } from 'react';
import Chatbot from './components/Chatbot';
import Frontpage from './components/Frontpage';
import Contact from './components/Contact';


function App() {
  const [alert, setAlert] = useState(null)
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }
  return (
    <>
      <NoteSate>
        
        <Router>
          <Navbar />
          <Alert alert={alert}/>
          <div className='container'>
            <Routes>
              <Route exact path="/" element={<Home showAlert={showAlert} />} />
              <Route exact path="/frontpage" element={<Frontpage/>} />
              <Route exact path="/about" element={<About />} />
              <Route exact path="/chatbot" element={<Chatbot/>} />
              <Route exact path="/contact" element={<Contact/>} />

              <Route exact path="/login" element={<Login showAlert={showAlert}/>} />
              <Route exact path="/signup" element={<SignUp showAlert={showAlert}/>} />

            </Routes>
          </div>
        </Router>
      </NoteSate>
    </>
  );
}

export default App;
