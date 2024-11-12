// backend/server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const moodRoutes = require('./routes/moodRoutes');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const uri = "mongodb+srv://venusigdtuw001:VrGMdS6PNTZw9qoh@cluster0.rpkjo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.log('MongoDB connection error:', err));

app.use('/api/moods', moodRoutes);



const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
