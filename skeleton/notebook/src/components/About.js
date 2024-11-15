// import React, { useContext, useEffect } from 'react'
// import noteContext from './context/Notecontext'
// import './css/about.css';
// export default function About() {

//   return (

   
//     <div>
//       <center>
//         <h1>ABOUT</h1>
//       </center>

//       <section className="card-container">
//         <div className="card">
//           <img
//             src="https://cdn.pixabay.com/photo/2023/02/04/17/28/chat-7767693_1280.jpg"
//             alt="Chat Support"
//           />
//           <div className="card-content">
//             <h3 class="card-heading">Chat Support</h3>
//             <p>
//               Our chatbot offers a safe space for mental health support, providing
//               mindfulness techniques. 
//             </p>
//           </div>
//         </div>

//         <div className="card">
//           <img
//             src="https://static.vecteezy.com/system/resources/previews/031/400/087/large_2x/immersive-simulation-icon-design-vector.jpg"
//             alt="Immersive Meditation Space 1234"
//           />
//           <div className="card-content">
//             <h5 class="card-heading">Immersive Space</h5>
//             <p>
//               An immersive space promotes mental well-being by creating a
//               tranquil environment that enhances relaxation.
//             </p>
//           </div>
//         </div>

//         <div className="card">
//         <img
//             src="https://i.pinimg.com/originals/3f/43/65/3f436522b06c3d8be18e2a0948167597.jpg"
//             alt="NoteBook"
//           />
          
//           <div className="card-content">
//             <h3 class="card-heading">INote Book</h3>
//             <p>
//               A mental health notebook is a dedicated space for individuals . It encourages
//               users to document their journey.
//             </p>
//           </div>
//         </div>

//         <div className="card">
//           <img
//             src="https://thumbs.dreamstime.com/b/mood-monitoring-gradient-linear-vector-icon-mobile-app-health-tracking-internet-things-smart-gadget-thin-line-color-symbol-240375368.jpg"
//             alt="Mood Tracker"
//           />
//           <div className="card-content">
//             <h3 class="card-heading">Mood Tracker</h3>
//             <p>
//               A mood tracker is a valuable tool. By regularly recording moods, users recognizing both positive and negative
//               trends.
//             </p>
//           </div>
//         </div>

//         <div className="card">
//           <img
//             src="https://img1.cgtrader.com/items/3911581/f99883fbb0/large/3d-phone-icon-3d-model-obj-fbx-blend.jpg"
//             alt="HelpLine Support"
//           />
//           <div className="card-content">
//             <h5 class="card-heading">HelpLine Support</h5>
//             <p>
//               Helpline support for mental health offers immediate assistance,
//               space for individuals to share their concerns. 
//             </p>
//           </div>
//         </div>
//       </section>
//     </div>
//   )
// }
import React from 'react';
import noteContext from './context/Notecontext';
import './css/about.css';

export default function About() {
  return (
    <div>
      <center>
        <h1>ABOUT</h1>
      </center>

      <section className="card-container">
        {/* Chat Support Card */}
        <div className="card">
          <img
            src="https://cdn.pixabay.com/photo/2023/02/04/17/28/chat-7767693_1280.jpg"
            alt="Chat Support"
          />
          <div className="card-content">
            <h3 className="card-heading">Chat Support</h3>
            <p>
              Our chatbot offers a safe space for mental health support, providing mindfulness techniques.
            </p>
          </div>
        </div>

        {/* Immersive Space Card */}
        <div className="card">
          <img
            src="https://static.vecteezy.com/system/resources/previews/031/400/087/large_2x/immersive-simulation-icon-design-vector.jpg"
            alt="Immersive Meditation Space"
          />
          <div className="card-content">
            <h5 className="card-heading">Immersive Space</h5>
            <p>
              An immersive space promotes mental well-being by creating a tranquil environment that enhances relaxation.
            </p>
          </div>
        </div>

        {/* INote Book Card */}
        <div className="card">
          <img
            src="https://i.pinimg.com/originals/3f/43/65/3f436522b06c3d8be18e2a0948167597.jpg"
            alt="NoteBook"
          />
          <div className="card-content">
            <h3 className="card-heading">INote Book</h3>
            <p>
              A mental health notebook is a dedicated space for individuals. It encourages users to document their journey.
            </p>
          </div>
        </div>

        {/* Mood Tracker Card */}
        <div className="card">
          <img
            src="https://thumbs.dreamstime.com/b/mood-monitoring-gradient-linear-vector-icon-mobile-app-health-tracking-internet-things-smart-gadget-thin-line-color-symbol-240375368.jpg"
            alt="Mood Tracker"
          />
          <div className="card-content">
            <h3 className="card-heading">Mood Tracker</h3>
            <p>
              A mood tracker is a valuable tool. By regularly recording moods, users recognize both positive and negative trends.
            </p>
          </div>
        </div>

        {/* Helpline Support Card */}
        <div className="card">
          <img
            src="https://img1.cgtrader.com/items/3911581/f99883fbb0/large/3d-phone-icon-3d-model-obj-fbx-blend.jpg"
            alt="HelpLine Support"
          />
          <div className="card-content">
            <h5 className="card-heading">HelpLine Support</h5>
            <p>
              Helpline support for mental health offers immediate assistance, providing space for individuals to share their concerns.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}



