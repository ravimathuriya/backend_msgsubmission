const mongoose = require("mongoose")

const Schema = mongoose.Schema;

const message = new Schema({
  name: {type:String,
    required:true
  },
  email: {type:String,
    required:true
  },
  msgs: {type:String,
    required:true
  },
  date:{
    type:Date,
    default:Date.now
  }
  
});

module.exports = mongoose.model("message", message )