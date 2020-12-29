import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import bcrypt from 'bcryptjs';
import Login from '../models/loginModel.js';

const loginRouter = express.Router();

loginRouter.post('/loginin', expressAsyncHandler(async(req,res)=>{
    const user = await Login.findOne({email: req.body.email});
    if(user){
        if(bcrypt.compareSync(req.body.password,user.password)){
            res.send({
                _id:user._id,
                name:user.name,
                email:user.email,
                isAdmin:user.isAdmin,
                token:generateToken(user),
            });
            return;
        }
    }
    res.status(401).send({message: 'Invalid email or password'})
}));

export default loginRouter;