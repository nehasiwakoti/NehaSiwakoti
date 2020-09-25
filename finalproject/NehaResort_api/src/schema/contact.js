import Joi from 'joi';

const CREATE_CUSTOMER_SCHEMA = Joi.object().keys({
    firstName:Joi.string().max(20).required(),
    lastName:Joi.string().max(20).required(),
    email:Joi.string().max(100).required(),
    message:Joi.string().max(100).required(),
       phoneNumbers:Joi.number().min(1000000000).max(9999999999)
});

   
export function validateCustomerCreation(req,res,next) 
{
    try{
        Joi.assert(req.body,CREATE_CUSTOMER_SCHEMA);
        next();
    }catch(err){
       next(err);
    };
    
}
