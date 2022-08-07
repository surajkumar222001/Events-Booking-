const mongoose = require('mongoose')
const EventSchema = new mongoose.Schema({
    user : {type : mongoose.Schema.Types.ObjectId, ref : 'User' , required : true},
    name : {type : String , required : true},
    image : {type : String , required : true},
    date : {type : String , required : true},
    type : {type : String, required : true},
    price : {type : Number , required : true},
    info : {type : String , required : true},
    created : {type : Date , default : Date.now}
});
 const Event = mongoose.model('event' , EventSchema );
 module.exports = Event;
