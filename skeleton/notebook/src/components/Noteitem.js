// import React from 'react'
// import { useContext } from 'react'
// import noteContext from './context/Notecontext'

// export default function Noteitem(props) {
//     const context = useContext(noteContext)
//     const { DeleteNote } = context


//     const { note, updatenote } = props
//     return (

        

//         <div className="col-md-4">
//             <div className="testimonial-card">
//                 <div className="d-flex align-items-center">
//                     <h6 className="testimonial-title">{note.title}</h6>
//                     <i className="fa-solid fa-trash mx-2" onClick={() => { DeleteNote(note._id); props.showAlert("deleted successfully", "success") }}></i>
//                     <i className="fa-regular fa-pen-to-square mx-2" onClick={() => { updatenote(note) }}></i>
//                 </div>

//                 <p>{note.description}</p>
                


//             </div>
//         </div>
//     )
// }





// import React, { useState } from 'react';
// import { useContext } from 'react';
// import noteContext from './context/Notecontext';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css'; 

// export default function Noteitem(props) {
//     const context = useContext(noteContext);
//     const { DeleteNote } = context;
//     const { note, updatenote } = props;

//     const [isExpanded, setIsExpanded] = useState(false);

//     // Toggle between showing full content or truncated
//     const toggleReadMore = () => {
//         setIsExpanded(!isExpanded);
//     };
//     const handleclick=()=>{
//         toast('Hello, world!')
//     }
//     const styles = {
//         noteCard: {
//             backgroundColor: '#f9f9f9',
//             padding: '20px',
//             borderRadius: '8px',
//             boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//             maxHeight: isExpanded ? 'none' : '200px',
//             overflow: 'hidden',
//             transition: 'max-height 0.3s ease',
//             position: 'relative',
//             marginBottom: '20px', // Ensures space between the note boxes
//         },
//         noteTitle: {
//             fontSize: '1.2rem',
//             fontWeight: 'bold',
//             margin: 0,
//             color:'#2980b9'
//         },
//         iconActions: {
//             fontSize: '1.2rem',
//             display: 'flex',
//             gap: '8px',
//             cursor:'pointer'
//         },
//         noteDescription: {
//             fontSize: '0.9rem',
//             color: '#333',
//             transition: 'max-height 0.3s ease',
//             textAlign: 'left'
//         },
//         readMore: {
//             color: '#007bff',
//             cursor: 'pointer',
//             fontWeight: 'bold',
//             fontSize: '0.9rem',
//             position: 'absolute',
//             bottom: '10px',
//             right: '10px',
//         },
//         noteContainer: {
//             display: 'flex',
//             flexWrap: 'wrap',
//             gap: '20px', // Ensures spacing between the cards
//             justifyContent: 'space-between',
//         },
//     };

//     return (
//         <div style={styles.noteContainer}>
//             <div className="col-md-4" style={{ flex: '1 1 calc(33.33% - 20px)' }}>
//                 <div style={styles.noteCard}>
//                     <div className="d-flex align-items-center justify-content-between">
//                         <h6 style={styles.noteTitle}>{note.title}</h6>
//                         <div style={styles.iconActions}>
                            
//                             <i
//                                 className="fa-solid fa-trash "
//                                 onClick={() => {
                                    
//                                     DeleteNote(note._id);
                                    
//                                     props.showAlert("Deleted successfully", "success");
                                    
                                    
//                                 }}
//                             ></i>
                            
                           
                            
//                             <i
//                                 className="fa-regular fa-pen-to-square"
//                                 onClick={() => {
//                                     updatenote(note);
//                                 }}
//                             ></i>
//                         </div>
//                     </div>
//                     <div style={{ ...styles.noteDescription, maxHeight: isExpanded ? 'none' : '100px' }}>
//                         <p>{isExpanded ? note.description : `${note.description.substring(0, 100)}...`}</p>
//                         {note.description.length > 100 && (
//                             <span style={styles.readMore} onClick={toggleReadMore}>
//                                 {isExpanded ? "Read Less" : "Read More"}
//                             </span>
//                         )}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }



import React, { useState } from 'react';
import { useContext } from 'react';
import noteContext from './context/Notecontext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Noteitem(props) {
    const context = useContext(noteContext);
    const { DeleteNote } = context;
    const { note, updatenote } = props;

    const [isExpanded, setIsExpanded] = useState(false);

    // Toggle between showing full content or truncated
    const toggleReadMore = () => {
        setIsExpanded(!isExpanded);
        toast.info(isExpanded ? "Content collapsed" : "Content expanded");
    };

    const handleDelete = () => {
        DeleteNote(note._id);
        toast.success("Note deleted successfully");
        props.showAlert("Deleted successfully", "success");
    };

    const handleEdit = () => {
        updatenote(note);
        toast.info("Edit mode activated");
    };

    const styles = {
        noteCard: {
            backgroundColor: '#f9f9f9',
            padding: '20px',
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            maxHeight: isExpanded ? 'none' : '200px',
            overflow: 'hidden',
            transition: 'max-height 0.3s ease',
            position: 'relative',
            marginBottom: '20px', // Ensures space between the note boxes
        },
        noteTitle: {
            fontSize: '1.2rem',
            fontWeight: 'bold',
            margin: 0,
            color: '#2980b9',
        },
        iconActions: {
            fontSize: '1.2rem',
            display: 'flex',
            gap: '8px',
            cursor: 'pointer',
        },
        noteDescription: {
            fontSize: '0.9rem',
            color: '#333',
            transition: 'max-height 0.3s ease',
            textAlign: 'left',
        },
        readMore: {
            color: '#007bff',
            cursor: 'pointer',
            fontWeight: 'bold',
            fontSize: '0.9rem',
            position: 'absolute',
            bottom: '10px',
            right: '10px',
        },
        noteContainer: {
            display: 'flex',
            flexWrap: 'wrap',
            gap: '20px', // Ensures spacing between the cards
            justifyContent: 'space-between',
        },
    };

    return (
        <>
            {/* Ensure ToastContainer is rendered */}
            <ToastContainer position="top-right" autoClose={2000} />
            <div style={styles.noteContainer}>
                <div className="col-md-4" style={{ flex: '1 1 calc(33.33% - 20px)' }}>
                    <div style={styles.noteCard}>
                        <div className="d-flex align-items-center justify-content-between">
                            <h6 style={styles.noteTitle}>{note.title}</h6>
                            <div style={styles.iconActions}>
                                <i
                                    className="fa-solid fa-trash"
                                    onClick={handleDelete}
                                ></i>
                                <i
                                    className="fa-regular fa-pen-to-square"
                                    onClick={handleEdit}
                                ></i>
                            </div>
                        </div>
                        <div style={{ ...styles.noteDescription, maxHeight: isExpanded ? 'none' : '100px' }}>
                            <p>{isExpanded ? note.description : `${note.description.substring(0, 100)}...`}</p>
                            {note.description.length > 100 && (
                                <span style={styles.readMore} onClick={toggleReadMore}>
                                    {isExpanded ? "Read Less" : "Read More"}
                                </span>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
