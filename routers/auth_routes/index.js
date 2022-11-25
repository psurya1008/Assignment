const{ Router }=require("express");
const authRoutes=require("./auth.route");
const router=new Router();

router.use(authRoutes);

module.exports=router;