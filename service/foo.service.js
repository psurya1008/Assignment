var Users=require("./HR.json");
module.exports.getEmployees=async(req,res,next)=>{
    console.log("testing..");
    res.send(Users);
};
module.exports.getEmp=async(req,res,next)=>{
    let name=req.params.name;
    var b=Users.find(x=>x.name==name);
    res.send(b);
};

module.exports.putEmployee=async(req,res,next)=>{
    var body=req.body;
    console.log(req.body);
    var name=body.name;
    var id=body.id;
    var Role=body.Role;
    var user={name:name,id:id,Role:Role};
    Users.push(user);
    res.send(Users);
};
module.exports.getEmployeesByRole=async(req,res,next)=>{
    var Role=req.params.Role;
    const result = Users.filter(x=>x.Role===Role);
    res.send(result);
};
module.exports.updateEmployeeById=async(req,res,next)=>{
    let id=req.params.id;
    var b=Users.find(x=>x.id==id);
    var body=req.body;
    if(body.name){
        b.name=body.name;
    }
    if(body.Role){
        b.Role=body.Role;
    }
    if(body.id){
        b.id=body.id;
    }
    res.send(b);
};