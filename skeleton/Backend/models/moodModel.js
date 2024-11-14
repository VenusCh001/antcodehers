// backend/models/moodModel.js
const mongoose = require('mongoose');

const moodSchema = new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'user'

    },
    mood: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('Mood', moodSchema);



