const asyncMiddleware = require('../middleware/async');
const hotels = require('../models/hotelBooking');
const usersData = require('../models/usersData');

module.exports = {
    getHotelsList: asyncMiddleware(async (req, res, next) => {
        const hotelList = await hotels.find();
        if(hotelList){
            return res.send({ hotelList: hotelList });
        }else{
            return res.send({message:"No Users to display"});
        }
        
    }),
    bookRooms: asyncMiddleware(async (req, res, next) => {
        const user = await usersData.findOne({ emailId: req.body.emailId });
        if (user) {
            const hotel = await hotels.findOne({ hotelName: req.body.hotelName });
            if (hotel) {
                const bookingStatus = (hotel.hotelRoomPrice <= user.bonusPoints) ? "BOOKED" : "PENDING APPROVAL";
                let hotelObj = {};
                hotelObj["hotelName"] = hotel.hotelName;
                hotelObj["hotelRoomPrice"] = hotel.hotelRoomPrice
                hotelObj["bookingStatus"] = bookingStatus;
                const hotelIndex = user.hotelCart.findIndex(cartHotel=> cartHotel.hotelName === hotel.hotelName);
                if((hotelIndex !== -1) && (user.hotelCart[hotelIndex].bookingStatus === "BOOKED")){
                    return res.send({message:"Hotel is already booked"})
                }

                user.hotelCart.push(hotelObj);  
                user.bonusPoints = (bookingStatus === "BOOKED") ? (user.bonusPoints - hotel.hotelRoomPrice) : user.bonusPoints;
                const updatedUser = await usersData.findOneAndUpdate({ emailId: user.emailId }, { hotelCart: user.hotelCart,
                     bonusPoints: user.bonusPoints});
                if (updatedUser) {
                    return res.send({message:"Hotel added to cart"});
                } else {
                    return res.error({message:"Error"})
                }
            } else {
                return res.send({ statusCode: 404, message: "User not found" })
            }
        } else {
            return res.send({ statusCode: 404, message: "User not found" })
        }
    })
}