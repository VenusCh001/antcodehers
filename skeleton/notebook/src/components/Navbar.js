import React from 'react'
import { Link, useLocation, useNavigate } from "react-router-dom";
import About from './About';
import './css/nav.css';
export default function Navbar() {
    const location = useLocation()
    let navigate = useNavigate()
    const handleLogout = () => {
        localStorage.removeItem('token')
        navigate("/")
    }
    const handleImmersiveClick = () => {
        window.location.href = "../immersive/index.html";
    };

    return (

        <nav className="navbar fixed-top ">

            <div className="container-fluid">

                <div className="logo">
                    <Link href={"/"} className="logo-part-2">MIND MATES</Link>
                </div>
                {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>  its a hambergur should be present whne screen size is less  */}
                {/* <div className="collapse navbar-collapse" id="navbarSupportedContent"> iske ander ul hona chahie to show in hamverger */}
                <ul className="nav-links">
                    {/* <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === "/frontpage" ? "active" : ""}`} aria-current="page" to="/frontpage">Frontpage</Link>
                        </li> */}
                    <li className="nav-item">
                        <Link className={`nav-link ${location.pathname === "/login" ? "active" : ""}`} aria-current="page" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link  className={`nav-link ${location.pathname === "/about" ? "active" : ""}`} aria-current="page" to="/about">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link className={`nav-link ${location.pathname === "/immersive" ? "active" : ""}`} to="/immersive">Immersive</Link>
                    </li>
                    <li className="nav-item">
                        <Link className={`nav-link ${location.pathname === "/Mroom" ? "active" : ""}`} to="/Mroom">Meditation Room</Link>
                    </li>
                    <li className="nav-item">
                        <Link className={`nav-link ${location.pathname === "/home" ? "active" : ""}`} to="/home">personal</Link>
                    </li>
                    {/* <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === "/about" ? "active" : ""}`} to="/about">About</Link>
                        </li> */}
                    <li className="nav-item">
                        <Link className={`nav-link ${location.pathname === "/chatbot" ? "active" : ""}`} to="/chatbot">Chatbot</Link>
                    </li>
                    <li className="nav-item">
                        <Link className={`nav-link ${location.pathname === "/mood-tracker" ? "active" : ""}`} to="/mood-tracker">Mood-tracker</Link>
                    </li>
                    {/* <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === "/contact" ? "active" : ""}`} to="/contact">Contact</Link>
                        </li> */}



                </ul>
                {!localStorage.getItem('token') ? <form >

                    <Link class="btn  btn-sm mx-3 btn-light" to="/login" role="button">Login</Link>
                    <Link class="btn  btn-sm btn-light" to="/signup" role="button">SignUp</Link>
                </form> : <button onClick={handleLogout} className='btn  btn-sm btn-light'> Logout</button>}
            </div>

        </nav>
    )
}



