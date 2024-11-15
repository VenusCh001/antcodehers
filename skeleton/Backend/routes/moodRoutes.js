// backend/routes/moodRoutes.js
const express = require('express');
const router = express.Router();
const Mood = require('../models/moodModel');
const fetchuser= require('../middleware/fetchuser')
// POST route to log mood
router.post('/log', fetchuser,async (req, res) => {
    const { mood } = req.body;
    try {
        const newMood = new Mood({ mood , user: req.user.id});
        await newMood.save();
        res.status(201).json({ message: 'Mood logged successfully!' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to log mood' });
    }
});

// GET route to fetch mood history
router.get('/history', fetchuser,async (req, res) => {
    try {
        const moods = await Mood.find({user: req.user.id});
        res.status(200).json(moods);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch mood history' });
    }
});

module.exports = router;