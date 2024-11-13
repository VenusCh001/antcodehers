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
import LandingPage from './components/LandingPage';
import Mood_tracker from './components/Mood_tracker';
import Immersive from './components/immersive';


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
          
          {/* <Alert alert={alert}/> */}
          <div className='container'>
            <Routes>
              <Route exact path="/Home" element={<Home showAlert={showAlert} />} />
              <Route exact path="/" element={<LandingPage showAlert={showAlert} />} />
              {/* <Route exact path="/LandingPage" element={<LandingPage/>} /> */}
              <Route exact path="/about" element={<About />} />
              <Route exact path="/chatbot" element={<Chatbot/>} />
              <Route exact path="/contact" element={<Contact/>} />
              <Route exact path="/mood-tracker" element={<Mood_tracker/>} />
              <Route exact path="/immersive" element={<Immersive/>} />

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
