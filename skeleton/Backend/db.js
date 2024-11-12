// connecting database 
const mongoose = require('mongoose');
// const mongoURI = "mongodb://127.0.0.1:27017/"
const mongoURI = "mongodb+srv://venusigdtuw001:VrGMdS6PNTZw9qoh@cluster0.rpkjo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const connectToMongo = () => {
    mongoose.connect(mongoURI).then(() =>
        console.log("Connected to Mongo Successfully")).catch((e) =>
        console.log(e.message))

}
module.exports = connectToMongo;
