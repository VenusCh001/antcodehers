import React from 'react'
import { Link, useLocation, useNavigate } from "react-router-dom";
export default function Navbar() {
    const location = useLocation()
    let navigate = useNavigate()
    const handleLogout = () => {
        localStorage.removeItem('token')
        navigate("/frontpage")
    }
    const handleImmersiveClick = () => {
        window.location.href = "../immersive/index.html";
    };

    return (

        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">MIND MATES</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        {/* <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === "/frontpage" ? "active" : ""}`} aria-current="page" to="/frontpage">Frontpage</Link>
                        </li> */}
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === "/login" ? "active" : ""}`} aria-current="page" to="/login">Home</Link>
                        </li>
                        {/* <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === "/about" ? "active" : ""}`} to="/about">About</Link>
                        </li> */}
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === "/chatbot" ? "active" : ""}`} to="/chatbot">Chatbot</Link>
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
            </div>
        </nav>
    )
}



