const{getHotelsList,bookRooms} = require("../../controllers/hotelBooking.controller");
let getBlankData = ()=>{
        let req = {
            body:{
                hotelNam:"Sunnys world",
                emailId:"sunnysonar@gmail.com"
            }
        }
    return req;
}

describe('get list of hotels which are present in database',()=>{
    it('Throws an error if no result',()=>{
        getHotelsList();
        expect('ok');
    })
});

describe('book rooms for users',()=>{
    it('Throws error if data is blank',()=>{
        bookRooms(getBlankData());
        expect(404);
    })

})
