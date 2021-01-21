const mongoose 	= require('mongoose')
const Schema 	= mongoose.Schema;

const usersSchema =new Schema({
   hotelName:{
       type:String
   },
   hotelRoomPrice:{
       type:Number
   }
},{autoCreate:true})

module.exports =mongoose.model('hotels',usersSchema);