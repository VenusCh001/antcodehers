// https://mongoosejs.com/docs/guide.html mongoose documentation to define the schema of the database
const mongoose = require('mongoose');
const {Schema}=mongoose
const UserSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
         unique:true
    },
    Date:{
        type:Date,
        default:Date.now
    },

  });
// model name , schema name
// User.createIndexes() 
  module.exports=mongoose.model('user',UserSchema)
                                