const asyncMiddleware = require('../middleware/async');
const usersData = require('../models/usersData');

module.exports={
    getUsersList:asyncMiddleware(async(req,res,next)=>{
        let usersList = await usersData.find();
        if(usersList){
            res.status(200).send({usersList:usersList});
        }else{
            return next(ex);
        }
        
    }),
    addUsers:asyncMiddleware(async(req,res,next)=>{
        if (!req.body.emailId&&!req.body.bonusPoints&&!req.body.name) {
            response.status(400).send({'errorMsg':'Invalid Request'});
        }else{
            
            let result =  await usersData.findOne({emailId:req.body.emailId});
           if(result){
               res.status(202).send({'message':'User Present'});
           }else{
               let result = await usersData.insertMany(
                    {
                        emailId:req.body.emailId,
                        name:req.body.name,
                        bonusPoints:req.body.bonusPoints
                    }
               )
               if(result){
                res.status(201).send({'message':'user added successfully'});
               }else{
                res.status(501).send({'error':'something went wrong'});

               }
           }
        }
    }),
    updateUsersPoints:asyncMiddleware(async(req,res,next)=>{
        if(!req.body.emailId&&!req.body.bonusPoints){
            res.status(400).send({'errorMsg':'Invalid Request'});
        }
        else{
            const user = await usersData.findOne({emailId:req.body.emailId});
            let userDataToUpdate={};
            if(user.hotelCart.length > 0 && (user.hotelCart.some(hotel=> hotel.bookingStatus === "PENDING APPROVAL"))){
                let bonusPoints = user.bonusPoints+req.body.bonusPoints;
                user.hotelCart = await user.hotelCart.map(hotel=>{
                    if(hotel.bookingStatus === "PENDING APPROVAL"){
                        hotel.bookingStatus = (hotel.hotelRoomPrice <= bonusPoints) ? "BOOKED" : "PENDING APPROVAL";
                        bonusPoints = (hotel.bookingStatus === "BOOKED") ? (bonusPoints - hotel.hotelRoomPrice) : bonusPoints;
                    }
                    return hotel;
                });
                userDataToUpdate["bonusPoints"] = bonusPoints;
                userDataToUpdate["hotelCart"] = user.hotelCart;

            }else{
                userDataToUpdate["bonusPoints"] = req.body.bonusPoints+user.bonusPoints
            }
            const result = await usersData.findOneAndUpdate({emailId:req.body.emailId},userDataToUpdate);
            const updatedUserData = await usersData.findOne({emailId:req.body.emailId});
            if(!result){
                res.status(404).send({'error':'user updation failed'});
            }else{
                res.status(200).send({'message':'user updated successfully',userData:updatedUserData});
            }
        }
       
    }),
}