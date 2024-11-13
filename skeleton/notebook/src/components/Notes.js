import React, { useContext, useRef, useState } from 'react'
import { useEffect } from 'react'
import noteContext from './context/Notecontext'
import Noteitem from './Noteitem'
import Addnote from './Addnote'
import { useNavigate } from 'react-router-dom'
export default function Notes(props) {
    const context = useContext(noteContext)
    const { notes, fetchnotes, EditNote } = context
    let navigate = useNavigate()
    useEffect(() => {
        if (localStorage.getItem('token')) {
            fetchnotes()
        }
        else {
            navigate("/login")
        }

    }, [])
    const [note, setNote] = useState({ id: "", etitle: "", edescription: "", etag: "" })
    const updatenote = (currentNote) => {
        ref.current.click()
        setNote({ id: currentNote._id, etitle: currentNote.title, edescription: currentNote.description, etag: currentNote.tag })

    }
    const ref = useRef(null)
    const refclose = useRef(null)


    const handleclick = (e) => {
        EditNote(note.id, note.etitle, note.edescription, note.etag)
        refclose.current.click()
        props.showAlert("updated successfully", "success")


    }
    const onchange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })
    }
    return (
        <div>
            <Addnote showAlert={props.showAlert} />
            <button ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">

            </button>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Edit Note</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="mb-3">
                                    <label HtmlFor="etitle" className="form-label">title</label>
                                    <input type="text" className="form-control" id="etitle" name="etitle" aria-describedby="emailHelp" value={note.etitle} onChange={onchange} minLength={3} required />
                                    <div id="emailHelp" className="form-text"></div>
                                </div>
                                <div className="mb-3">
                                    <label HtmlFor="edescription" className="form-label">Description</label>
                                    <input type="text" className="form-control" id="edescription" name="edescription" value={note.edescription} onChange={onchange} minLength={4} required />
                                </div>
                                <div className="mb-3">
                                    <label HtmlFor="etag" className="form-label">tag</label>
                                    <input type="text" className="form-control" id="etag" name="etag" value={note.etag} onChange={onchange} />
                                </div>

                            </form>
                        </div>
                        <div className="modal-footer">
                            <button ref={refclose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button disabled={note.etitle.length < 3 || note.edescription.length < 4} onClick={handleclick} type="button" className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='row my-3'>
                
                <div className="container ">
                    <h2 >Your Feelings</h2>
                </div>
                <div className='container'>
                    {notes.length === 0 && 'No notes to be displayed'}
                </div>
                {notes.map((note) => {
                    return <Noteitem note={note} updatenote={updatenote} showAlert={props.showAlert} />
                })}
            </div>
        </div>
    )
}
