




// import React from 'react';
// import "./css/immersive.css"
// const Immersive = () => {
//   return (
//     <div>
//       <h1>Visit the custom page</h1>
      
//       <a href="immersive.html"  rel="noopener noreferrer">
//         Go to the HTML page
//       </a>
//     </div>
//   );
// };

// export default Immersive;
import React from 'react';
import "./css/immersive.css";

const Immersive = () => {
  return (
    <div className="container">
      {/* Header */}
      <center>
      <header>
        <h1>Start Working Smarter</h1>
      </header>

      </center>
      
      {/* Navigation */}
      

      {/* Main Section */}
      <main>
        
        <p>
          Discover how we can help you work smarter with our custom solutions tailored for your needs.
        </p>
        
        {/* Link Button */}
        <a href="immersive.html" rel="noopener noreferrer">
          <button>Go to the HTML page</button>
        </a>
      </main>

      {/* Footer */}
      <footer>
        <p>© 2024 Your Company. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Immersive;
