

import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import noteContext from './context/Notecontext'

export default function Addnote(props) {

  const context = useContext(noteContext)
  const { addNote } = context
  const [note, setNote] = useState({ title: "", description: "", tag: "" })

  const handleclick = (e) => {
    e.preventDefault()
    addNote(note.title, note.description, note.tag)
    setNote({ title: "", description: "", tag: "" })
    props.showAlert("Added successfully", "success")
  }

  const onchange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value })
  }

  return (
    <div>
      <style>{`
        .container {
          background-color: #f0f8ff;
          padding: 30px;
          border-radius: 15px;
          box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
          max-width: 900px;
          margin: 20px auto;
        }
        h2 {
          text-align: center;
          color: #004080;
          margin-bottom: 25px;
        }
        .form-label {
          font-weight: bold;
          color: #004080;
        }
        .form-control {
          border: 2px solid #80c0ff;
          border-radius: 8px;
          padding: 15px;
          font-size: 16px;
          width: 100%;
        }
        .form-control:focus {
          outline: none;
          border-color: #0056b3;
        }
        .btn-primary {
          background-color: #0080ff;
          border: none;
          padding: 12px 25px;
          font-size: 16px;
          cursor: pointer;
          color: white;
          transition: background-color 0.3s ease;
          border-radius: 8px;
        }
        .btn-primary:disabled {
          background-color: #b3daff;
        }
        .btn-primary:hover {
          background-color: #0056b3;
        }
        .mb-3 {
          margin-bottom: 20px;
        }
      `}</style>

      <div className='container my-3'>
        <h2>Add Your Feelings</h2>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">Title</label>
          <input type="text" className="form-control" id="title" name="title" placeholder="Enter your title" onChange={onchange} value={note.title} minLength={3} required />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">Description</label>
          <textarea className="form-control" id="description" name="description" rows="6" placeholder="Enter your text" onChange={onchange} value={note.description} minLength={4} required></textarea>
        </div>
        <button disabled={note.title.length < 3 || note.description.length < 4} type="submit" className="btn btn-primary" onClick={handleclick}>Add Note</button>
      </div>
    </div>
  )
}
