const express = require('express');
const Notes = require('../models/Notes');
const router = express.Router();
const fetchuser = require('../middleware/fetchuser')
const { body, validationResult } = require('express-validator');

// Route 1: get all notes of user using get: notes/api/fetchallnotes login required 
router.get('/fetchallnotes', fetchuser, async (req, res) => {
    try {
        const notes = await Notes.find({ user: req.user.id })
        res.send(notes)
    } catch (error) {
        console.error(error.message)
        res.status(500).send('some error have happend')
    }


})
// Route 2: add a note of user using post: notes/api/addnote login required 
router.post('/addnote', fetchuser, [
    body('title', 'enter valid title').isLength({ min: 3 }),
    body('description', 'enter valid description').isLength({ min: 4 })
], async (req, res) => {
    try {
        const { title, description, tag } = req.body
        // if there are error return bad requests and show error

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const note= new Notes({
            title, description, tag, user: req.user.id

        })
        const savednote=  await note.save()
        res.json(savednote)
    } catch (error) {
        console.error(error.message)
        res.status(500).send('some error have happend')
    }


})

// Route 3: update a note of user using put: notes/api/updatenote login required 
router.put('/updatenote/:id', fetchuser, async (req, res) => {
    const {title, description,tag}= req.body
    // create a newnote object 
    const newNote= {}
    
    if(title){newNote.title=title}
    if(description){newNote.description=description}
    if(tag){newNote.tag=tag}
    let note= await Notes.findById(req.params.id)
    if(!note){
        return res.status(404).send('Not Found')
    }
    if(note.user.toString()!==req.user.id){
        return res.status(401).send('Not Allowed')
    }
    note= await Notes.findByIdAndUpdate(req.params.id,{$set:newNote},{new:true})
    res.json({note})

})

// Route 3: delete a note of user using delete: notes/api/deletenote login required 
router.delete('/deletenote/:id', fetchuser, async (req, res) => {
    try {
        // find the note to be deleted and delete it 
        let note= await Notes.findById(req.params.id)
        if(!note){
            return res.status(404).send('Not Found')
        }
        // allow deletion only if user owns this note.
        if(note.user.toString()!==req.user.id){
            return res.status(401).send('Not Allowed')
        }
        note= await Notes.findByIdAndDelete(req.params.id)
        res.json({"success": "note has been deleted ",note:note})

    } catch (error) {
        console.error(error.message)
        res.status(500).send('some error have happend')
    }
})
module.exports = router