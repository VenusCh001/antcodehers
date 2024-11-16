// // import React from 'react'
// // import './ct.css'

// // export default function Contact() {
// //     return (
// //         <div>
// //             <div className="overlay">
// //                 <div className="slider">
// //                     <div className="slider-header">
// //                         <div className="sticky-header">
// //                             <h2>"Need Support? Let’s Take the First Step Together - GET HELP NOW!"</h2>
// //                         </div>
// //                         <span className="close-btn">&times;</span>
// //                     </div>
// //                     <div className="slider-content">
// //                         <p>"If you're feeling overwhelmed by emotional challenges, remember that you don't have to navigate this journey alone. Opening up about your feelings is a powerful first step towards healing".</p>
// //                         <ul>
// //                             <li> ◉ Whether it's confiding in a trusted friend.</li>
// //                             <li> ◉ Seeking guidance from a mental health professional.</li>
// //                             <li> ◉ Tapping into one of the free and confidential resources listed below.</li>
// //                         </ul>


// //                         <h3>More resources</h3>
// //                         <p>All resources are free, confidential and most are available 24/7.</p>
// //                         <table>
// //                             <tr>
// //                                 <th>Resource</th>
// //                                 <th>Type</th>
// //                                 <th>Contact</th>
// //                             </tr>
// //                             <tr>
// //                                 <td>KIRAN</td>
// //                                 <td>Call Line</td>
// //                                 <td><a href="tel:1800-599-0019">1800-599-0019</a></td>
// //                             </tr>
// //                             <tr>
// //                                 <td>Aasra</td>
// //                                 <td>Call Line/Website</td>
// //                                 <td><a href="tel:09820466726">09820466726</a><br />Visit: Aasra.info</td>
// //                             </tr>
// //                             <tr>
// //                                 <td>Mpower 1-on-1</td>
// //                                 <td>Call Line/Webiste</td>
// //                                 <td><a href="tel:1800-1208-20050">1800-1208-20050</a><br />Visit : Mpowerminds.com/oneonone</td>
// //                             </tr>
// //                             <tr>
// //                                 <td>Mitram Foundation</td>
// //                                 <td>Call Line/Website</td>
// //                                 <td><a href="tel:080-25722573">080-25722573</a><br />Visit : www.mitramfoundation.org</td>
// //                             </tr>
// //                             <tr>
// //                                 <td>Connecting Trust</td>
// //                                 <td>Call Line/Website</td>
// //                                 <td><a href="tel:91-9922001122">91-9922001122</a> , <a href="tel:+91-9922004305">+91-9922004305</a>  , <br/>Visit : https://connectingngo.org</td>
// //                             </tr>
// //                             <tr>
// //                                 <td>Mann Talks</td>
// //                                 <td>Call Line/Website</td>
// //                                 <td><a href="tel:+91-8686139139">+91-8686139139</a><br />Visit : http://www.manntalks.org</td>
// //                             </tr>
// //                         </table>
// //                     </div>

// //                 </div>
// //             </div>
// //         </div>
// //     )
// // }



// import React from 'react';

// const Contact = () => {
//   return (
//     <div style={{ backgroundColor: '#2d7a8b', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
//       <div
//         style={{
//           backgroundColor: '#fff',
//           borderRadius: '8px',
//           padding: '20px',
//           maxWidth: '600px',
//           margin: '0 auto',
//           boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
//         }}
//       >
//         <div
//           style={{
//             backgroundColor: '#333',
//             color: '#fff',
//             padding: '10px',
//             fontSize: '18px',
//             fontWeight: 'bold',
//             borderTopLeftRadius: '8px',
//             borderTopRightRadius: '8px',
//           }}
//         >
//           Need Support? Let's Take the First Step Together - GET HELP NOW!
//         </div>
//         <div style={{ padding: '15px', lineHeight: '1.6', color: '#333' }}>
//           <p>
//             If you're feeling overwhelmed by emotional challenges, remember that you don't have to
//             navigate this journey alone. Opening up about your feelings is a powerful first step
//             towards healing.
//           </p>
//           <ul>
//             <li>Whether it's confiding in a trusted friend.</li>
//             <li>Seeking guidance from a mental health professional.</li>
//             <li>
//               Tapping into one of the free and confidential resources listed below.
//             </li>
//           </ul>
//           <h2 style={{ color: '#4a148c' }}>More resources</h2>
//           <p>
//             All resources are free, confidential and most are available 24/7.
//           </p>
//           <table
//             style={{
//               width: '100%',
//               borderCollapse: 'collapse',
//               marginTop: '15px',
//             }}
//           >
//             <thead>
//               <tr>
//                 <th style={{ borderBottom: '2px solid #ccc', padding: '10px', textAlign: 'left' }}>
//                   RESOURCE
//                 </th>
//                 <th style={{ borderBottom: '2px solid #ccc', padding: '10px', textAlign: 'left' }}>
//                   TYPE
//                 </th>
//                 <th style={{ borderBottom: '2px solid #ccc', padding: '10px', textAlign: 'left' }}>
//                   CONTACT
//                 </th>
//               </tr>
//             </thead>
//             <tbody>
//               {/* Example row, repeat as needed */}
//               <tr>
//                 <td style={{ borderBottom: '1px solid #ccc', padding: '10px' }}>Resource 1</td>
//                 <td style={{ borderBottom: '1px solid #ccc', padding: '10px' }}>Type</td>
//                 <td style={{ borderBottom: '1px solid #ccc', padding: '10px' }}>Contact Info</td>
//               </tr>
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SupportPage;






import React from 'react';

export default function Contact() {
  return (
    <div
      style={{
        // backgroundImage: "url('https://content.thriveglobal.com/wp-content/uploads/2020/01/Mental-Health-1.jpg')", // Replace with your image URL
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        padding: '40px',
        fontFamily: "'Arial', sans-serif",
        minHeight: '100vh',
      }}
    >
      <div
        style={{
          backgroundColor: '#ffffff',
          borderRadius: '8px',
          maxWidth: '800px',
          margin: '0 auto',
          overflow: 'hidden',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        }}
      >
        {/* Header */}
        <div
          style={{
            backgroundColor: '#333',
            color: '#fff',
            padding: '15px',
            fontSize: '20px',
            fontWeight: 'bold',
            textAlign: 'center',
          }}
        >
          "Need Support? Let's Take the First Step Together - GET HELP NOW!"
        </div>

        {/* Content */}
        <div style={{ padding: '20px', lineHeight: '1.6', color: '#333' }}>
          <p>
            If you're feeling overwhelmed by emotional challenges, remember that you don't have to
            navigate this journey alone. Opening up about your feelings is a powerful first step
            towards healing.
          </p>

          <ul style={{ paddingLeft: '20px' }}>
            <li>Whether it's confiding in a trusted friend.</li>
            <li>Seeking guidance from a mental health professional.</li>
            <li>
              Tapping into one of the free and confidential resources listed below.
            </li>
          </ul>

          <h2 style={{ color: '#4a148c', marginTop: '20px' }}>More resources</h2>
          <p>All resources are free, confidential and most are available 24/7.</p>

          {/* Resource Table */}
          <table
            style={{
              width: '100%',
              borderCollapse: 'collapse',
              marginTop: '20px',
            }}
          >
            <thead>
              <tr>
                <th
                  style={{
                    backgroundColor: '#f5f5f5',
                    borderBottom: '2px solid #ccc',
                    padding: '10px',
                    textAlign: 'center',
                  }}
                >
                  RESOURCE
                </th>
                <th
                  style={{
                    backgroundColor: '#f5f5f5',
                    borderBottom: '2px solid #ccc',
                    padding: '10px',
                    textAlign: 'center',
                  }}
                >
                  TYPE
                </th>
                <th
                  style={{
                    backgroundColor: '#f5f5f5',
                    borderBottom: '2px solid #ccc',
                    padding: '10px',
                    textAlign: 'center',
                  }}
                >
                  CONTACT
                </th>
              </tr>
            </thead>
            <tbody>
              {/* Add your resource rows here */}
              <tr>
                <td style={{ borderBottom: '1px solid #ccc', padding: '10px' }}>KIRAN</td>
                <td style={{ borderBottom: '1px solid #ccc', padding: '10px' }}>Call Line</td>
                <td style={{ borderBottom: '1px solid #ccc', padding: '10px' }}><a href="tel:1800-599-0019">1800-599-0019</a></td>
              </tr>
              <tr>
                <td style={{ borderBottom: '1px solid #ccc', padding: '10px' }}>Mpower 1-on-1</td>
                <td style={{ borderBottom: '1px solid #ccc', padding: '10px' }}>Call Line/websiite</td>
                <td style={{ borderBottom: '1px solid #ccc', padding: '10px' }}><a href="tel:1800-1208-20050">1800-1208-20050</a></td>
              </tr>
              <tr>
                <td style={{ borderBottom: '1px solid #ccc', padding: '10px' }}>Aasra</td>
                <td style={{ borderBottom: '1px solid #ccc', padding: '10px' }}>Call Line/website</td>
                <td style={{ borderBottom: '1px solid #ccc', padding: '10px' }}><a href="09820466726">09820466726</a></td>
              </tr>
              <tr>
                <td style={{ borderBottom: '1px solid #ccc', padding: '10px' }}>Mitram Foundation</td>
                <td style={{ borderBottom: '1px solid #ccc', padding: '10px' }}>Call Line/website</td>
                <td style={{ borderBottom: '1px solid #ccc', padding: '10px' }}><a href="tel:080-25722573">080-25722573</a></td>
              </tr>

              <tr>
                <td style={{ borderBottom: '1px solid #ccc', padding: '10px' }}>Connecting Trust</td>
                <td style={{ borderBottom: '1px solid #ccc', padding: '10px' }}>Call Line/website</td>
                <td style={{ borderBottom: '1px solid #ccc', padding: '10px' }}><a href="tel:91-9922001122 ">91-9922001122 </a></td>
              </tr>
              <tr>
                <td style={{ borderBottom: '1px solid #ccc', padding: '10px' }}>Mann Talks</td>
                <td style={{ borderBottom: '1px solid #ccc', padding: '10px' }}>Call Line/website</td>
                <td style={{ borderBottom: '1px solid #ccc', padding: '10px' }}><a href="tel:+91-8686139139 ">+91-8686139139 </a></td>
              </tr>
              
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}




