const jwt = require('jsonwebtoken');

const excludedRoutes = ['auth'];

const newUsers = [];

module.exports.generateToken=async(req,res,next)=>{
    let jwtSecretKey = process.env.JWT_SECRET_KEY;
    const { id, name } = req.body;
    let data = {
        time: Date(),
        id,
        name
    }
  
    const token = jwt.sign(data, jwtSecretKey);
  
    res.send(token);
};

module.exports.validateToken = (req, res, next) => {
  
    let tokenHeaderKey = process.env.TOKEN_HEADER_KEY;
    let jwtSecretKey = process.env.JWT_SECRET_KEY;
  
    try {

        if(excludedRoutes.find((route)=>req.url.includes(route))){
            next()
            return
        };

        const token = req.header(tokenHeaderKey);
        const verified = jwt.verify(token, jwtSecretKey);

        if(verified){
            console.log("Verified");
            next();
        }else{
            return res.status(401).send('Auth Not Valid');
        }
    } catch (error) {
        return res.status(401).send(error);
    }
}

module.exports.signUp=async(req,res,next)=>{
    const { name, password } = req.body;
    let data = {
        time: Date(),
        name
    }

    if(name && password) {
        let jwtSecretKey = process.env.JWT_SECRET_KEY;
        const token = jwt.sign(data, jwtSecretKey);
        newUsers.push({name, password})
        res.send(token);
    } else {
        return res.status(401).send('provide name and password');
    }
};
