import React from 'react'
import { useContext } from 'react'
import noteContext from './context/Notecontext'

export default function Noteitem(props) {
    const context = useContext(noteContext)
    const { DeleteNote } = context


    const { note, updatenote } = props
    return (

        

        <div className="col-md-4">
            <div className="testimonial-card">
                <div className="d-flex align-items-center">
                    <h6 className="testimonial-title">{note.title}</h6>
                    <i className="fa-solid fa-trash mx-2" onClick={() => { DeleteNote(note._id); props.showAlert("deleted successfully", "success") }}></i>
                    <i className="fa-regular fa-pen-to-square mx-2" onClick={() => { updatenote(note) }}></i>
                </div>

                <p>{note.description}</p>
                


            </div>
        </div>
    )
}
