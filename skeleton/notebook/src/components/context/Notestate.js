import noteContext from "./Notecontext";
import { useState } from "react";
const NoteSate = (props) => {
    const host = "http://localhost:5000"
    const notesInitial = []
    const [notes, setnotes] = useState(notesInitial)
    // Fetch  all notes
    const fetchnotes = async () => {
        //Api call
        const response = await fetch(`${host}/api/notes/fetchallnotes`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')
            },
            
        })
        const json= await response.json()
        console.log(json)
        setnotes(json)
    }
    // Add a note
    const addNote = async (title, description, tag) => {
        //Api call
        const response = await fetch(`${host}/api/notes/addnote`, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')
            },
            body: JSON.stringify({title,description,tag})
        })
        const note = await response.json()
        
        setnotes(notes.concat(note))
    }
    // Delete a note
    const DeleteNote =async (id) => {
        // API call
        const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')
            },
            
        })
        const json = response.json()
        console.log(json)
        console.log("note has been deleted")
        const newnotes = notes.filter((note) => { return note._id !== id })
        setnotes(newnotes)
    }
    // Edit a note
    const EditNote = async (id, title, description, tag) => {
        //Api call
        const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')
            },
            body: JSON.stringify({title,description,tag})
        })
        //const json = response.json()
        //Logic to edit at client site
        let newnotes= JSON.parse(JSON.stringify(notes))
        for (let index = 0; index < newnotes.length; index++) {
            const element = newnotes[index];
            if (element._id === id) {
                newnotes[index].title = title
                newnotes[index].description = description
                newnotes[index].tag = tag
                break

            }
            
        }
        setnotes(newnotes)
    }
    return (
        <noteContext.Provider value={{ notes, addNote, DeleteNote, EditNote,fetchnotes }}>
            {props.children}
        </noteContext.Provider>
    )

}
export default NoteSate

//https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
//fetching api with headers syntax