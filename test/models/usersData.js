const mongoose 	= require('mongoose')
const Schema 	= mongoose.Schema;

const usersSchema =new Schema({
   emailId:{
       type:String
   },
   name:{
       type:String
   },
   bonusPoints:{
       type:Number
   },
   hotelCart:[
       {
        hotelName:{
            type:String
        },
        hotelRoomPrice:{
            type:Number
        },
        bookingStatus:{
            type:String
        }
       }
   ]
},{autoCreate:true})

module.exports =mongoose.model('users',usersSchema);