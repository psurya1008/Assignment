const{ Router }=require("express");
const router=new Router();

const fooService=require("../../service/foo.service");

router.get("/",fooService.getEmployees);
router.post("/",fooService.putEmployee);
router.get("/role/:Role",fooService.getEmployeesByRole);
router.get("/name/:name",fooService.getEmp);
router.put("/employee/:id",fooService.updateEmployeeById);
module.exports=router;