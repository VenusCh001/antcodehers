const connectToMongo = require('./db');
const express = require('express')
var cors= require('cors')
const bodyParser = require('body-parser');
const moodRoutes = require('./routes/moodRoutes');
connectToMongo();
const app = express()
const port = 5000
app.use(bodyParser.json());
app.use(cors())
app.use(express.json()) // using middleware to read req.body
// Available Routes
app.use('/api/auth',require('./routes/auth'))
app.use('/api/notes',require('./routes/notes'))
app.use('/api/moods', moodRoutes);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

//https://express-validator.github.io/docs/ express validator
//https://www.npmjs.com/package/bcryptjs
//https://www.npmjs.com/package/jsonwebtoken