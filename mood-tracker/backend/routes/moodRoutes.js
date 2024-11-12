// backend/routes/moodRoutes.js
const express = require('express');
const router = express.Router();
const Mood = require('../models/moodModel');

// POST route to log mood
router.post('/log', async (req, res) => {
    const { mood } = req.body;
    try {
        const newMood = new Mood({ mood });
        await newMood.save();
        res.status(201).json({ message: 'Mood logged successfully!' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to log mood' });
    }
});

// GET route to fetch mood history
router.get('/history', async (req, res) => {
    try {
        const moods = await Mood.find();
        res.status(200).json(moods);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch mood history' });
    }
});

module.exports = router;
