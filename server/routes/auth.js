const express = require("express");
const router = express.Router();

const {
    signup,
    signin,
    signout,
    requireSignin,
    createOrUpdateUser,
    currentUser,
    
} = require("../controllers/auth");
const {authCheck,adminCheck} =require('../middleware/auth')
const { userSignupValidator } = require("../validator");

router.post("/create-or-update-user",authCheck,createOrUpdateUser)
router.post("/current-user",authCheck,currentUser)
router.post("/current-admin",authCheck,adminCheck,currentUser)
router.post("/signup", userSignupValidator, signup);
router.post("/signin", signin);
router.get("/signout", signout);


module.exports = router;
