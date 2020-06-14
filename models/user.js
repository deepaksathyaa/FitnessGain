const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
   Email: {
    type: String,
    lowercase: true,
    unique: true,
    required: [true, "can't be blank"], 
    index: true
  },
  Fname : {
    type : String,
    required : true

  },
  Lname : {
    type : String,
    required : true

  },
  phnumber : {
    type : String,
    required : true

  },
  Password : {
    type : String,
    required : true 
  },
  
});

module.exports = mongoose.model('users',userSchema);


