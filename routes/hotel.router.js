const express               = require('express');
const router                = express.Router();
const hotelBookingController    = require('../controllers/hotelBooking.controller');

router.get('/getHotelsList',hotelBookingController.getHotelsList);
router.put('/bookRooms',hotelBookingController.bookRooms);

module.exports =router;