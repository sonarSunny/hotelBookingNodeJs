const{getUsersList,addUsers,updateUsersPoints} =require("../../controllers/users.controller");
let getBlankData = ()=>{
    let req = {
        body:{
            emailId:'',
            bonusPoints:'',
            name:''
        }
    }
return req;
}

describe('get list of users',()=>{

});

describe('Add users to db',()=>{
 it("Throws error if emailId username and bonusPoints are not avaliable in response",()=>{
     addUsers(getBlankData());
     expect(400)
 })
});

describe('Update users list with the bonuse points',()=>{
    it("Throws error if emailId username and bonusPoints are not avaliable in response",()=>{
        updateUsersPoints(getBlankData());
        expect(400)
    })
});