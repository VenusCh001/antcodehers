


// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { Link } from 'react-router-dom';
// export default function Login(props) {
//     const [credentials, setCredentials] = useState({ email: "", password: "" });
//     let navigate = useNavigate();

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         // API call
//         const response = await fetch("http://localhost:5000/api/auth/login", {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({ email: credentials.email, password: credentials.password }),
//         });

//         const json = await response.json();
//         console.log(json);

//         if (json.success) {
//             // Save the auth-token and redirect
//             localStorage.setItem('token', json.authtoken);
//             toast.success("Login Successful!", { position: "top-center" });
//             navigate("/");

//         } else {
//             toast.error("Invalid Details!", { position: "top-center" });
//         }
//     };

//     const onChange = (e) => {
//         setCredentials({ ...credentials, [e.target.name]: e.target.value });
//     };

//     return (

//         <div className="container ">

//             <div className="row login-container">
//                 {/* Left side (Image or graphic) */}
//                 <div className="col-md-6 p-0">
//                     <div className="login-image">
//                         <img src="login-img.png" className="img-fluid img-responsive" alt="Surfing Image" />
//                     </div>
//                 </div>

//                 {/* Right side (Login form) */}
//                 <div className="col-md-6">
//                     <div className="login-form mt-4">
//                         <form onSubmit={handleSubmit}>
//                             <div className="mb-3">
//                                 <label htmlFor="email" className="form-label ">Email address</label>
//                                 <input
//                                     type="email"
//                                     className="form-control"
//                                     name="email"
//                                     id="email"
//                                     value={credentials.email}
//                                     onChange={onChange}
//                                     aria-describedby="emailHelp"
//                                     required
//                                 />
//                             </div>
//                             <div className="mb-3">
//                                 <label htmlFor="password" className="form-label">Password</label>
//                                 <input
//                                     type="password"
//                                     className="form-control"
//                                     name="password"
//                                     value={credentials.password}
//                                     onChange={onChange}
//                                     id="password"
//                                     required
//                                 />
//                             </div>
                            
//                             <button
//                                 disabled={credentials.password.length < 4}
//                                 type="submit"
//                                 className="btn btn-primary bg-success"
//                             >
//                                 Login
//                             </button>
//                         </form>
//                         <div className="d-flex justify-content-between mt-3">
//                             <a href="#" className="text-decoration-none text-small">Forgot Password?</a>
//                             <Link to="/signup" className="text-decoration-none text-small">Sign Up</Link>
//                         </div>
//                     </div>
//                 </div>
                
//             </div>
//             <ToastContainer />
//         </div>
//     );
// }




import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';

export default function Login(props) {
    const [credentials, setCredentials] = useState({ email: "", password: "" });
    let navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        // API call
        const response = await fetch("http://localhost:5000/api/auth/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email: credentials.email, password: credentials.password }),
        });

        const json = await response.json();
        console.log(json);

        if (json.success) {
            // Save the auth-token and redirect
            localStorage.setItem('token', json.authtoken);
            toast.success("Login Successful!", { position: "top-center" });
            navigate("/");
        } else {
            toast.error("Invalid Details!", { position: "top-center" });
        }
    };

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    return (
        <div className="d-flex justify-content-center align-items-center vh-80" style={{ backgroundColor: 'rgb(86 125 164 / 0%)' }}>
            <div className="col-md-6 p-0">
          <div className="login-image" style={{ backgroundImage: "url('signup.png')", backgroundSize: "cover", backgroundPosition: "center", height: "70vh" }}>
          </div>
        </div>
            <div className="card shadow p-4" style={{ maxWidth: '400px', width: '100%' }}>
                <h2 className="text-center mb-4">Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email Address</label>
                        <input
                            type="email"
                            className="form-control"
                            name="email"
                            id="email"
                            value={credentials.email}
                            onChange={onChange}
                            aria-describedby="emailHelp"
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input
                            type="password"
                            className="form-control w-30px"
                            name="password"
                            id="password"
                            value={credentials.password}
                            onChange={onChange}
                            required
                        />
                    </div>
                    <button
                        disabled={credentials.password.length < 4}
                        type="submit"
                        className="btn btn-primary w-50"
                        style={{ backgroundColor: '#007bff', border: 'none' }}
                    >
                        Login
                    </button>
                </form>
                <div className="text-center mt-3">
                    <Link to="#" className="text-decoration-none">Forgot Password?</Link>
                    <span> | </span>
                    <Link to="/signup" className="text-decoration-none">Sign Up</Link>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
}



