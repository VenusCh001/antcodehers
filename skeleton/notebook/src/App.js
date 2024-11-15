
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { useState, useRef, useEffect } from 'react';

import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Alert from './components/Alert';
import Login from './components/Login';
import SignUp from './components/SignUp';
import NoteSate from './components/context/Notestate';
import Chatbot from './components/Chatbot';
import Contact from './components/Contact';
import LandingPage from './components/LandingPage';
import Mood_tracker from './components/Mood_tracker';
import Immersive from './components/immersive';
import LoadingBar from 'react-top-loading-bar';

function App() {
  const [alert, setAlert] = useState(null);
  const loadingBarRef = useRef(null); // Reference for Loading Bar

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  
  const handleRouteChange = () => {
    if (loadingBarRef.current) {
      loadingBarRef.current.complete(); // Completes loading bar after the route is loaded
    }
  };
  const LoadingBarHandler = () => {
    const location = useLocation(); // This hook gives us access to location change

    useEffect(() => {
      if (loadingBarRef.current) {
        loadingBarRef.current.continuousStart(); // Starts the loading bar
      }
      handleRouteChange(); // Completes the loading bar after navigating
    }, [location]); // Executes every time the route changes

    return null; // This component doesn't render anything
  };

  return (
    <>
      <NoteSate>
        <Router>
          <Navbar /> {/* Navbar */}
          <LoadingBar color='#4169e1' ref={loadingBarRef} height={3}/>
          <LoadingBarHandler />

          <div className='container'>
            <Routes>
              <Route exact path="/home" element={<Home showAlert={showAlert} />} />
              <Route exact path="/" element={<LandingPage showAlert={showAlert} />} />
              <Route exact path="/about" element={<About />} />
              <Route exact path="/chatbot" element={<Chatbot />} />
              <Route exact path="/contact" element={<Contact />} />
              <Route exact path="/mood-tracker" element={<Mood_tracker />} />
              <Route exact path="/immersive" element={<Immersive />} />
              <Route exact path="/login" element={<Login showAlert={showAlert} />} />
              <Route exact path="/signup" element={<SignUp showAlert={showAlert} />} />
            </Routes>
          </div>
        </Router>
      </NoteSate>
    </>
  );
}

export default App;
