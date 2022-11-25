var express =require('express');
var routes= require('./routers/user_routes');
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');

var app=express();

const bodyParser=require("body-parser");
const userRouter=require('./routers/user_routes')
const authRouter = require('./routers/auth_routes');
const { validateToken } = require('./service/auth.service');
app.use(bodyParser.json({limit:"50mb"}))
app.use(validateToken);
app.use('/auth', authRouter);
app.use('/users',userRouter);

module.exports=app;

dotenv.config();
  
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`server is listening on ${PORT} ...`);
});