// import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom'
// export default function SignUp(props) {
//   const [credentials, setcredentials] = useState({ name: "", email: "", password: "", cpassword: "" })
//   let navigate = useNavigate()
//   const handlesubmit = async (e) => {
//     e.preventDefault()
//     //Api call
//     const { name, email, password } = credentials
//     const response = await fetch("http://localhost:4000/api/auth/createUser", {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',

//       },
//       body: JSON.stringify({ name, email, password })

//     })
//     const json = await response.json()
//     console.log(json)

//     //save the auth -token and reidirect 
//     if (json.success) {
//       localStorage.setItem('token', json.authtoken)
//       navigate("/")
//       props.showAlert("Account Created Successsfully", "success")
//     } else {
//       props.showAlert("Invalid Credentials", "danger")
//     }



//   }
//   const onchange = (e) => {
//     setcredentials({ ...credentials, [e.target.name]: e.target.value })
//   }
//   return (
//     // <div>
//     //   <form onSubmit={handlesubmit}>
//     //     <div className="mb-3">
//     //       <label htmlFor="name" className="form-label">Name</label>
//     //       <input type="text" className="form-control" id="name" name="name" aria-describedby="emailHelp" onChange={onchange} />

//     //     </div>
//     //     <div className="mb-3">
//     //       <label htmlFor="email" className="form-label">Email address</label>
//     //       <input type="email" className="form-control" id="email" name="email" aria-describedby="emailHelp" onChange={onchange} />

//     //     </div>
//     //     <div className="mb-3">
//     //       <label htmlFor="password" className="form-label">Password</label>
//     //       <input type="password" className="form-control" id="password" name="password" onChange={onchange} minLength={2} required/>
//     //     </div>
//     //     <div className="mb-3">
//     //       <label htmlFor="cpassword" className="form-label">Confirm Password</label>
//     //       <input type="password" className="form-control" id="cpassword" name="cpassword" onChange={onchange} minLength={2} required/>
//     //     </div>

//     //     <button type="submit" className="btn btn-primary">Submit</button>
//     //   </form>
//     // </div>

//     <div className="container">
//       <div className="row login-container">

//         {/*Left side (Image or graphic)*/}
//         <div className="col-md-6 p-0">
//           <div className="login-image">
//             {/* You can place the surfing image here */}
//             <img src="signup.png" className="img-fluid width-100%" alt="Surfing Image" />
//           </div>
//         </div>

//         {/*Right side (Login form)*/}
//         <div className="col-md-6">
//           <div className="login-form mt-4">

//             <form onSubmit={handlesubmit}>
//               <div className="mb-3">
//                 <label htmlFor="name" className="form-label">Name</label>
//                 <input type="text" className="form-control" id="name" name="name" aria-describedby="emailHelp" onChange={onchange} />

//               </div>
//               <div className="mb-3">
//                 <label htmlFor="email" className="form-label">Email address</label>
//                 <input type="email" className="form-control" id="email" name="email" aria-describedby="emailHelp" onChange={onchange} required/>

//               </div>
//               <div className="mb-3">
//                 <label htmlFor="password" className="form-label">Password</label>
//                 <input type="password" className="form-control" id="password" name="password" onChange={onchange} minLength={2} required />
//                 <h10>please enter 4 characters of password</h10>
//               </div>
              
//               <div className="mb-3">
//                 <label htmlFor="cpassword" className="form-label">Confirm Password</label>
//                 <input type="password" className="form-control" id="cpassword" name="cpassword" onChange={onchange} minLength={2} required />
//               </div>
//               <button disabled={credentials.name.length < 3 || credentials.password.length < 4} type="submit" className="btn btn-primary " >SignUp</button>
//             </form>
//             <div className="d-flex justify-content-between mt-3">
//               <a href="#" className="text-decoration-none text-small">Forgot Password?</a>
//               <a href="#" className="text-decoration-none text-small">Sign Up</a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// } 
 

import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function SignUp(props) {
  const [credentials, setcredentials] = useState({ name: "", email: "", password: "", cpassword: "" })
  let navigate = useNavigate()

  const handlesubmit = async (e) => {
    e.preventDefault()
    // API call
    const { name, email, password } = credentials
    const response = await fetch("http://localhost:4000/api/auth/createUser", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, password })
    })
    const json = await response.json()
    console.log(json)

    // Save the auth token and redirect
    if (json.success) {
      localStorage.setItem('token', json.authtoken)
      navigate("/")
      props.showAlert("Account Created Successfully", "success")
    } else {
      props.showAlert("Invalid Credentials", "danger")
    }
  }

  const onchange = (e) => {
    setcredentials({ ...credentials, [e.target.name]: e.target.value })
  }

  return (
    <div className="container " style={{ marginTop: "15px" }}>
      <div className="row login-container">

        {/* Left side (Image or graphic) */}
        <div className="col-md-6 p-0">
          <div className="login-image" style={{ backgroundImage: "url('signup.png')", backgroundSize: "cover", backgroundPosition: "center", height: "70vh" }}>
          </div>
        </div>

        {/* Right side (SignUp form) */}
        <div className="col-md-6 d-flex justify-content-center align-items-center " style={{ padding: "20px", backgroundColor: "#99959500", height: "70vh" }}>
          <div className="login-form w-100 " style={{ maxWidth: "400px", borderRadius: "10px", backgroundColor: "#fff", padding: "30px", boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)" }}>
            <h2 className="text-center" style={{ color: "#2980b9", fontFamily: "'Poppins', sans-serif" }}>Sign Up</h2>
            <form onSubmit={handlesubmit}>
              <div className="mb-1">
                <label htmlFor="name" className="form-label" style={{ fontWeight: "400" }}>Name</label>
                <input type="text" className="form-control" id="name" name="name" onChange={onchange} style={{ borderRadius: "8px", borderColor: "#2980b9", padding: "2px" }} />
              </div>

              <div className="mb-1">
                <label htmlFor="email" className="form-label" style={{ fontWeight: "400" }}>Email Address</label>
                <input type="email" className="form-control" id="email" name="email" onChange={onchange} required style={{ borderRadius: "8px", borderColor: "#2980b9", padding: "2px" }} />
              </div>

              <div className="mb-1">
                <label htmlFor="password" className="form-label" style={{ fontWeight: "500" }}>Password</label>
                <input type="password" className="form-control" id="password" name="password" onChange={onchange} minLength={4} required style={{ borderRadius: "8px", borderColor: "#2980b9", padding: "2px" }} />
                <small style={{ color: "#888" }}>Please enter at least 4 characters for password</small>
              </div>

              <div className="mb-3">
                <label htmlFor="cpassword" className="form-label" style={{ fontWeight: "400" }}>Confirm Password</label>
                <input type="password" className="form-control" id="cpassword" name="cpassword" onChange={onchange} minLength={4} required style={{ borderRadius: "8px", borderColor: "#2980b9", padding: "2px" }} />
              </div>

              <button 
                disabled={credentials.name.length < 3 || credentials.password.length < 4 || credentials.password !== credentials.cpassword} 
                type="submit" 
                className="btn btn-primary w-50" 
                style={{ padding: "10px", borderRadius: "8px", backgroundColor: "#3498db", border: "none", fontSize: "16px", fontWeight: "400",  }}>
                Sign Up
              </button>
            </form>

            <div className="d-flex justify-content-between mt-3">
            <small style={{ color: "#888" }}>Already have an account ? <Link to="/login" className="text-decoration-none text-small" style={{ color: "#3498db" }}>Sign In</Link></small>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
