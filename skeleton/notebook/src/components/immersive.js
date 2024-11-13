// import React, { useEffect } from 'react';

// const Immersive = () => {
//   useEffect(() => {
//     // Function to fetch a random quote from the Quotable API
//     const getRandomQuote = () => {
//       fetch('http://api.quotable.io/random')
//         .then((response) => response.json())
//         .then((data) => {
//           // Update the quote text on the text entity in A-Frame
//           const quoteTextEntity = document.getElementById('quote-text');
//           quoteTextEntity.setAttribute('text', 'value', data.content);
//         })
//         .catch((error) => {
//           console.error('Error fetching quote:', error);
//           // Handle errors here
//         });
//     };

//     // Initial load of a random quote
//     getRandomQuote();
//   }, []);

//   return (
//     <a-scene
//       raycaster="far: 100; objects: [link];"
//       cursor="rayOrigin: mouse"
//       camera-position
//       environment
//       info-message="htmlSrc: #messageText"
//     >
//       <a-assets>
//         <img id="sky" src="assets/milky.jpg" />
//         <img id="front" src="assets/milky.jpg" />
//         <img id="ground" src="assets/grassimage.PNG" />

//         {/* for the check-ins part */}
//         <img id="q1" src="assets/q1.png" />
//         <img id="q2" src="assets/q2.png" />
//         <img id="q3" src="assets/q3.png" />

//         {/* portals */}
//         <img id="portal1" src="assets/portal1.jpg" />
//         <img id="portal2" src="assets/portal2.jpg" />
//         <img id="portal3" src="assets/portal3.jpg" />

//         <img id="cosmic1" src="assets/cosmic1.jpg" />
//         <img id="wood_curly" src="assets/woodcurly.avif" />
//         <img id="roof" src="assets/bedcolour.PNG" />
//         <img id="brick" src="assets/brick.PNG" />
//         <img id="front1" src="assets/front1.jpg" />
//         <img id="front2" src="assets/front2.jpg" />
//         <img id="grid" src="assets/maij.PNG" />
//       </a-assets>

//       <a-camera position="0 1.6 14" rotation="0 0 0" />

//       <a-entity light="type: hemisphere; color: #FFF; intensity: 1" position="-0.5 1 1" />

//       {/* Check-in flags */}
//       <a-image
//         src="#q1"
//         rotation="0 20 0"
//         position="-2 1 9"
//         scale="1.5 2 1"
//       />
//       <a-image
//         src="#q2"
//         rotation="0 -20 0"
//         position="2 1 6"
//         scale="1.5 2 1"
//       />
//       <a-image
//         src="#q3"
//         rotation="0 20 0"
//         position="-1.5 1 3"
//         scale="1.5 2 1"
//       />

//       {/* Front pictures */}
//       <a-image
//         src="#front2"
//         position="1.9653 2.13893 -6.28064"
//         scale="1.5 1.5 1"
//       />
//       <a-image
//         src="#front1"
//         position="-2.531 2.192 -6.28064"
//         scale="1.5 2 1"
//       />

//       <a-sky src="#sky" position="0 200 0" />

//       <a-plane
//         src="#ground"
//         height="100"
//         width="100"
//         rotation="-90 0 0"
//         repeat="30 30"
//       />

//       <a-box
//         src="#grid"
//         position="-0.352 2.1653 -13.55404"
//         scale="7 4 0.1"
//         color="#FFF"
//       />
//       <a-box
//         src="#brick"
//         position="-2.53073 2.192 -6.46141"
//         scale="2.5 4 0.1"
//         color="#FFF"
//       />
//       <a-box
//         src="#brick"
//         position="1.9653 2.13893 -6.55848"
//         scale="2.5 4 0.1"
//         color="#FFF"
//       />
//       <a-box
//         src="#wood_curly"
//         position="-3.77169 2.17956 -9.95057"
//         scale="7 4 0.1"
//         color="#4CC3D9"
//         rotation="0 90 0"
//       />
//       <a-box
//         src="#cosmic1"
//         position="3.1866 2.14038 -9.982"
//         scale="7 4 0.1"
//         color="#4CC3D9"
//         rotation="0 90 0"
//       />
//       <a-box
//         src="#roof"
//         position="-0.32937 4.16961 -9.982"
//         scale="8 10 0.1"
//         color="#FFF"
//         rotation="90 0 0"
//       />

//       {/* Magic portals */}
//       <a-link
//         href="https://www.bookswagon.com/#"
//         target="_blank"
//         title="smell the pages"
//         rotation="0 90 0"
//         position="-3 1.93886 -12.45811"
//         image="#portal1"
//         scale="0.5 0.5 0.5"
//       />
//       <a-link
//         href="https://theootychocolates.com/"
//         title="choco bliss"
//         rotation="0 90 0"
//         position="-3 1.93886 -10.5.45811"
//         image="#portal2"
//         scale="0.5 0.5 0.5"
//       />
//       <a-link
//         href="https://www.ugaoo.com/collections/buy-plants-online-in-delhi"
//         title="fragrant flowers"
//         rotation="0 90 0"
//         position="-3 1.93886 -8.5.45811"
//         image="#portal3"
//         scale="0.5 0.5 0.5"
//       />

//       {/* Right side magic portals */}
//       <a-link
//         href="https://www.netflix.com/in/"
//         target="_blank"
//         title="movies"
//         rotation="0 90 0"
//         position="2.9 1.93886 -12.45811"
//         image="#portal1"
//         scale="0.5 0.5 0.5"
//       />
//       <a-link
//         href="https://poki.com/en/online"
//         title="games"
//         rotation="0 90 0"
//         position="2.9 1.93886 -10.5.45811"
//         image="#portal2"
//         scale="0.5 0.5 0.5"
//       />
//       <a-link
//         href="https://open.spotify.com/"
//         title="music"
//         rotation="0 90 0"
//         position="2.9 1.93886 -8.5.45811"
//         image="#portal3"
//         scale="0.5 0.5 0.5"
//       />

//       {/* API quotes */}
//       <a-plane
//         position="0 2.17956 -13"
//         rotation="-90 0 0"
//         width="4"
//         height="2"
//         color="#333"
//       />
//       <a-entity
//         id="quote-text"
//         position="0 2.17956 -13"
//         text="color: black; align: center; width: 3.5"
//       />
//     </a-scene>
//   );
// };

// export default Immersive;





// // import React, { useEffect } from 'react';

// // const Immersive = () => {
// //   useEffect(() => {
// //     // Function to fetch a random quote from the Quotable API
// //     const getRandomQuote = () => {
// //       fetch('http://api.quotable.io/random')
// //         .then((response) => response.json())
// //         .then((data) => {
// //           // Update the quote text on the text entity in A-Frame
// //           const quoteTextEntity = document.getElementById('quote-text');
// //           quoteTextEntity.setAttribute('text', 'value', data.content);
// //         })
// //         .catch((error) => {
// //           console.error('Error fetching quote:', error);
// //           // Handle errors here
// //         });
// //     };

// //     // Initial load of a random quote
// //     getRandomQuote();
// //   }, []);

// //   return (
// //     <a-scene
// //       raycaster="far: 100; objects: [link];"
// //       cursor="rayOrigin: mouse"
// //       vr-mode-ui="enabled: true"
// //       camera="position: 0 1.6 14"
// //       environment
// //       info-message="htmlSrc: #messageText"
// //       style={{ width: '100vw', height: '100vh', margin: 0 }}
// //     >
// //       <a-assets>
// //         <img id="sky" src="assets/milky.jpg" />
// //         <img id="front" src="assets/milky.jpg" />
// //         <img id="ground" src="assets/grassimage.PNG" />

// //         {/* Check-in flags */}
// //         <img id="q1" src="assets/q1.png" />
// //         <img id="q2" src="assets/q2.png" />
// //         <img id="q3" src="assets/q3.png" />

// //         {/* Portals */}
// //         <img id="portal1" src="assets/portal1.jpg" />
// //         <img id="portal2" src="assets/portal2.jpg" />
// //         <img id="portal3" src="assets/portal3.jpg" />

// //         <img id="cosmic1" src="assets/cosmic1.jpg" />
// //         <img id="wood_curly" src="assets/woodcurly.avif" />
// //         <img id="roof" src="assets/bedcolour.PNG" />
// //         <img id="brick" src="assets/brick.PNG" />
// //         <img id="front1" src="assets/front1.jpg" />
// //         <img id="front2" src="assets/front2.jpg" />
// //         <img id="grid" src="assets/maij.PNG" />
// //       </a-assets>

// //       <a-camera position="0 1.6 14" rotation="0 0 0" />

// //       <a-entity light="type: hemisphere; color: #FFF; intensity: 1" position="-0.5 1 1" />

// //       {/* Check-in flags */}
// //       <a-image
// //         src="#q1"
// //         rotation="0 20 0"
// //         position="-2 1 9"
// //         scale="1.5 2 1"
// //       />
// //       <a-image
// //         src="#q2"
// //         rotation="0 -20 0"
// //         position="2 1 6"
// //         scale="1.5 2 1"
// //       />
// //       <a-image
// //         src="#q3"
// //         rotation="0 20 0"
// //         position="-1.5 1 3"
// //         scale="1.5 2 1"
// //       />

// //       {/* Front pictures */}
// //       <a-image
// //         src="#front2"
// //         position="1.9653 2.13893 -6.28064"
// //         scale="1.5 1.5 1"
// //       />
// //       <a-image
// //         src="#front1"
// //         position="-2.531 2.192 -6.28064"
// //         scale="1.5 2 1"
// //       />

// //       <a-sky src="#sky" position="0 200 0" />

// //       <a-plane
// //         src="#ground"
// //         height="100"
// //         width="100"
// //         rotation="-90 0 0"
// //         repeat="30 30"
// //       />

// //       <a-box
// //         src="#grid"
// //         position="-0.352 2.1653 -13.55404"
// //         scale="7 4 0.1"
// //         color="#FFF"
// //       />
// //       <a-box
// //         src="#brick"
// //         position="-2.53073 2.192 -6.46141"
// //         scale="2.5 4 0.1"
// //         color="#FFF"
// //       />
// //       <a-box
// //         src="#brick"
// //         position="1.9653 2.13893 -6.55848"
// //         scale="2.5 4 0.1"
// //         color="#FFF"
// //       />
// //       <a-box
// //         src="#wood_curly"
// //         position="-3.77169 2.17956 -9.95057"
// //         scale="7 4 0.1"
// //         color="#4CC3D9"
// //         rotation="0 90 0"
// //       />
// //       <a-box
// //         src="#cosmic1"
// //         position="3.1866 2.14038 -9.982"
// //         scale="7 4 0.1"
// //         color="#4CC3D9"
// //         rotation="0 90 0"
// //       />
// //       <a-box
// //         src="#roof"
// //         position="-0.32937 4.16961 -9.982"
// //         scale="8 10 0.1"
// //         color="#FFF"
// //         rotation="90 0 0"
// //       />

// //       {/* Magic portals */}
// //       <a-link
// //         href="https://www.bookswagon.com/#"
// //         target="_blank"
// //         title="smell the pages"
// //         rotation="0 90 0"
// //         position="-3 1.93886 -12.45811"
// //         image="#portal1"
// //         scale="0.5 0.5 0.5"
// //       />
// //       <a-link
// //         href="https://theootychocolates.com/"
// //         title="choco bliss"
// //         rotation="0 90 0"
// //         position="-3 1.93886 -10.5.45811"
// //         image="#portal2"
// //         scale="0.5 0.5 0.5"
// //       />
// //       <a-link
// //         href="https://www.ugaoo.com/collections/buy-plants-online-in-delhi"
// //         title="fragrant flowers"
// //         rotation="0 90 0"
// //         position="-3 1.93886 -8.5.45811"
// //         image="#portal3"
// //         scale="0.5 0.5 0.5"
// //       />

// //       {/* Right side magic portals */}
// //       <a-link
// //         href="https://www.netflix.com/in/"
// //         target="_blank"
// //         title="movies"
// //         rotation="0 90 0"
// //         position="2.9 1.93886 -12.45811"
// //         image="#portal1"
// //         scale="0.5 0.5 0.5"
// //       />
// //       <a-link
// //         href="https://poki.com/en/online"
// //         title="games"
// //         rotation="0 90 0"
// //         position="2.9 1.93886 -10.5.45811"
// //         image="#portal2"
// //         scale="0.5 0.5 0.5"
// //       />
// //       <a-link
// //         href="https://open.spotify.com/"
// //         title="music"
// //         rotation="0 90 0"
// //         position="2.9 1.93886 -8.5.45811"
// //         image="#portal3"
// //         scale="0.5 0.5 0.5"
// //       />

// //       {/* API quotes */}
// //       <a-plane
// //         position="0 2.17956 -13"
// //         rotation="-90 0 0"
// //         width="4"
// //         height="2"
// //         color="#333"
// //       />
// //       <a-entity
// //         id="quote-text"
// //         position="0 2.17956 -13"
// //         text="color: black; align: center; width: 3.5"
// //       />
// //     </a-scene>
// //   );
// // };

// // export default Immersive;




import React from 'react';

const Immersive = () => {
  return (
    <div>
      <h1>Visit the custom page</h1>
      <a href="immersive.html"  rel="noopener noreferrer">
        Go to the HTML page
      </a>
      <br/>
      <a href="/meditationroom/index.html"  rel="noopener noreferrer">
        Go to the HTML page 2
      </a>
    </div>
  );
};

export default Immersive;
