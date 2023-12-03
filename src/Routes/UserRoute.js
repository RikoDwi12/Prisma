const {GetUsersController,CreateUserController} = require('../Controllers/UserController')
const express = require('express')
const router = express.Router();


router.get("/Users", GetUsersController);
router.post("/Users", CreateUserController);

module.exports = router
