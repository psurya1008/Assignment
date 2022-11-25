const{ Router }=require("express");
const router=new Router();

const authService=require("../../service/auth.service.js");

router.post("/generateToken", authService.generateToken);
router.post("/sign-up", authService.signUp);
module.exports=router;