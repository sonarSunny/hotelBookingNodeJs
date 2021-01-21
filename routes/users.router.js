const express               = require('express');
const router                = express.Router();
const userController    = require('../controllers/users.controller');

router.post('/addUsers',userController.addUsers);
router.get('/getUsersList',userController.getUsersList);
router.put('/updateUsersPoints',userController.updateUsersPoints)

module.exports =router;