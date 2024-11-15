// import React from 'react';
// import "./css/immersive.css";

// const Immersive = () => {
//   return (
//     <div>
//       <div className="centered-container">
//         <h1 className="heading">INSTRUCTION</h1>
//       </div>
//       <center>
//         <p className="subheading">
//           <ul>
//             <li>1.use arrow keys to falana dhimakanananflfsf </li>
//             <li>2.use arrow keys to falana dhimakanananflfsf </li>
//             <li>3.use arrow keys to falana dhimakanananflfsf </li>

//           </ul>

//         </p>
//       </center>
//       <center>
//         <div className="buttons">
//           <a href="immersive.html">
//             <button className="btn-tour">Virtual Room   </button>
//           </a>
//           <a href="/meditationroom/index.html">
//             <button className="btn-tour">Meditation room  </button>
//           </a>
//         </div>

        
//       </center>

//     </div>
//   );
// };

// export default Immersive;



import React from 'react';
import "./css/immersive.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import the styles
const Immersive = () => {
  const handleClick = () => {
    toast('Hello, world!');
  };
  return (
    <div>
      <div className="centered-container">
        <h1 className="heading">INSTRUCTION</h1>
      </div>
      <center>
        <p className="subheading">
          <ul>
            <li>1. Use arrow keys to falana dhimakanananflfsf</li>
            <li>2. Use arrow keys to falana dhimakanananflfsf</li>
            <li>3. Use arrow keys to falana dhimakanananflfsf</li>
          </ul>
        </p>
      </center>
      <center>
        <div className="buttons">
          <a href="immersive.html">
            <button className="btn-tour">Virtual Room</button>
          </a>
          <a href="/meditationroom/index.html">
            <button className="btn-tour">Meditation Room</button>
          </a>
          <button className="btn-tour" onClick={handleClick}>Meditation Room</button>
          <ToastContainer />
        </div>
      </center>
    </div>
  );
};

export default Immersive;

