const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const videos = new Schema({
  type : {
    type : String,
    required : true,
},
index : {
    type : String,
    required : true
},
url : {
    type : String,
    required : true

  },
  
});


module.exports = mongoose.model('videos',videos);