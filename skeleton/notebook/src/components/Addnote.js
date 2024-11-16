

// import React, { useContext } from 'react'
// import { Link } from 'react-router-dom'
// import { useState } from 'react'
// import noteContext from './context/Notecontext'

// export default function Addnote(props) {

//   const context = useContext(noteContext)
//   const { addNote } = context
//   const [note, setNote] = useState({ title: "", description: "", tag: "" })

//   const handleclick = (e) => {
//     e.preventDefault()
//     addNote(note.title, note.description, note.tag)
//     setNote({ title: "", description: "", tag: "" })
//     props.showAlert("Added successfully", "success")
//   }

//   const onchange = (e) => {
//     setNote({ ...note, [e.target.name]: e.target.value })
//   }

//   return (
//     <div>
//       <style>{`
//         .container {
//           background-color: #f0f8ff;
//           padding: 30px;
//           border-radius: 15px;
//           box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
//           max-width: 900px;
//           margin: 20px auto;
//         }
//         h2 {
//           text-align: center;
//           color: #004080;
//           margin-bottom: 25px;
//         }
//         .form-label {
//           font-weight: bold;
//           color: #004080;
//         }
//         .form-control {
//           border: 2px solid #80c0ff;
//           border-radius: 8px;
//           padding: 15px;
//           font-size: 16px;
//           width: 100%;
//         }
//         .form-control:focus {
//           outline: none;
//           border-color: #0056b3;
//         }
//         .btn-primary {
//           background-color: #0080ff;
//           border: none;
//           padding: 12px 25px;
//           font-size: 16px;
//           cursor: pointer;
//           color: white;
//           transition: background-color 0.3s ease;
//           border-radius: 8px;
//         }
//         .btn-primary:disabled {
//           background-color: #b3daff;
//         }
//         .btn-primary:hover {
//           background-color: #0056b3;
//         }
//         .mb-3 {
//           margin-bottom: 20px;
//         }
//       `}</style>

//       <div className='container my-3'>
//         <h2>Add Your Feelings</h2>
//         <div className="mb-3">
//           <label htmlFor="exampleFormControlInput1" className="form-label">Title</label>
//           <input type="text" className="form-control" id="title" name="title" placeholder="Enter your title" onChange={onchange} value={note.title} minLength={3} required />
//         </div>
//         <div className="mb-3">
//           <label htmlFor="exampleFormControlTextarea1" className="form-label">Description</label>
//           <textarea className="form-control" id="description" name="description" rows="6" placeholder="Enter your text" onChange={onchange} value={note.description} minLength={4} required></textarea>
//         </div>
//         <button disabled={note.title.length < 3 || note.description.length < 4} type="submit" className="btn btn-primary" onClick={handleclick}>Add Note</button>
//       </div>
//     </div>
//   )
// }












import React, { useContext, useState } from 'react';
import noteContext from './context/Notecontext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function Addnote(props) {
  const context = useContext(noteContext);
  const { addNote } = context;
  const [note, setNote] = useState({ title: '', description: '', tag: '' });
  const [language, setLanguage] = useState('en'); // Default language is English
  const [showKeyboard, setShowKeyboard] = useState(false); // Controls when the keyboard is visible
  const [focusedField, setFocusedField] = useState(''); // Tracks the focused field

  const hindiKeyboard = [
    'क', 'ख', 'ग', 'घ', 'च', 'छ', 'ज', 'झ', 'ट', 'ठ',
    'ड', 'ढ', 'ण', 'त', 'थ', 'द', 'ध', 'न', 'प', 'फ',
    'ब', 'भ', 'म', 'य', 'र', 'ल', 'व', 'श', 'ष', 'स', 'ह',
    'अ', 'आ', 'इ', 'ई', 'उ', 'ऊ', 'ए', 'ऐ', 'ओ', 'औ',
    'ं', 'ः', 'ऋ', 'ळ', 'क्ष', 'ज्ञ', 'त्र', 'श्र', ' ', ' '
  ];

  const changeLanguage = (e) => {
    const selectedLang = e.target.value;
    setLanguage(selectedLang);
    setShowKeyboard(selectedLang === 'hi');
  };

  const handleKeyPress = (key) => {
    setNote((prevNote) => ({
      ...prevNote,
      [focusedField]: prevNote[focusedField] + key,
    }));
  };

  const handleclick = (e) => {
    e.preventDefault();
    addNote(note.title, note.description, note.tag);
    setNote({ title: '', description: '', tag: '' });
    props.showAlert('Added successfully', 'success');
    // toast.success("Login Successful!", { position: "top-center" });

    
  };

  const onchange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  return (
    <div className="addnote-container my-3">
      <style>{`
        .addnote-container {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 20px;
          width: 100%;
        }
        .addnote-box {
          background-color: white;
          padding: 30px;
          border-radius: 20px;
          box-shadow: 0px 15px 30px rgba(0, 0, 0, 0.2);
          max-width: 700px;
          width: 100%;
        }
        h2 {
          text-align: center;
          color: #2980b9;
          margin-bottom: 20px;
          font-family: 'Poppins', sans-serif;
          font-size: 28px;
        }
        .form-label {
          font-weight: 600;
          color: #2c3e50;
          font-family: 'Poppins', sans-serif;
        }
        .form-control {
          border: 2px solid #2980b9;
          border-radius: 10px;
          padding: 15px;
          font-size: 16px;
          margin-bottom: 20px;
          transition: all 0.3s ease;
          width: 100%;
        }
        .form-control:focus {
          border-color: #6dd5fa;
          box-shadow: 0 0 10px rgba(0, 168, 255, 0.2);
        }
        .btn-primary {
          background-color: #3498db;
          border: none;
          padding: 12px 25px;
          font-size: 18px;
          font-weight: 600;
          cursor: pointer;
          color: white;
          transition: background-color 0.3s ease;
          border-radius: 10px;
          width: 40%;
        }
        .btn-primary:disabled {
          background-color: #b3daff;
          cursor: not-allowed;
        }
        .btn-primary:hover {
          background-color: #1abc9c;
        }
        .keyboard {
          display: flex;
          flex-wrap: wrap;
          gap: 5px;
          margin-top: 20px;
        }
        .key {
          padding: 10px;
          background-color: #2980b9;
          color: white;
          border-radius: 5px;
          cursor: pointer;
          font-size: 16px;
        }
        .key:hover {
          background-color: #1abc9c;
        }
        .mb-3 {
          margin-bottom: 25px;
        }
        @media (max-width: 768px) {
          .addnote-box {
            padding: 20px;
          }
          h2 {
            font-size: 24px;
          }
          .form-control {
            padding: 10px;
            font-size: 14px;
          }
          .btn-primary {
            padding: 10px 20px;
            font-size: 16px;
          }
          .key {
            padding: 8px;
            font-size: 14px;
          }
        }
        @media (max-width: 480px) {
          h2 {
            font-size: 20px;
          }
          .form-control {
            padding: 8px;
            font-size: 12px;
          }
          .btn-primary {
            font-size: 14px;
            padding: 10px;
          }
          .key {
            padding: 6px;
            font-size: 12px;
          }
        }
      `}</style>

      <div className="addnote-box ">
        <h2>Add a New Note</h2>
        <label htmlFor="language-select">Select Language:</label>
        <select id="language-select" onChange={changeLanguage} value={language}>
          <option value="en">English</option>
          <option value="hi">Hindi</option>
        </select>

        <div className="mb-3">
          <label htmlFor="title" className="form-label">Title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            placeholder={language === 'hi' ? 'यहां लिखें...' : 'Write here...'}
            lang={language}
            onChange={onchange}
            onFocus={() => setFocusedField('title')}
            value={note.title}
            readOnly={language === 'hi'}
            minLength={3}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="description" className="form-label">Description</label>
          <textarea
            className="form-control"
            id="description"
            name="description"
            rows="6"
            placeholder={language === 'hi' ? 'यहां लिखें...' : 'Write here...'}
            lang={language}
            onChange={onchange}
            onFocus={() => setFocusedField('description')}
            value={note.description}
            readOnly={language === 'hi'}
            minLength={4}
            required
          ></textarea>
        </div>

        {showKeyboard && focusedField && (
          <div className="keyboard">
            {hindiKeyboard.map((key, index) => (
              <div key={index} className="key" onClick={() => handleKeyPress(key)}>
                {key}
              </div>
            ))}
          </div>
        )}

        <button 
          disabled={note.title.length < 3 || note.description.length < 4}
          type="submit"
          className="btn btn-primary my-4"
          onClick={handleclick}
        >
          Add Note
        </button>
        <ToastContainer />
      </div>
    </div>
  );
}
