import { Router} from 'express';
import * as endpoints from './Constants/endpoints';
import {validateCustomerCreation } from './schema/contact';
import  logger from '../src/utils/logger';
import * as roomController from './controllers/roomss';


const router = Router();


router.get('/' , (request,response,next) => {
    response.json({
         name:'hotel-api',
         version: '1.0.0'
     });
 
 });
 
 
 

 router.post(endpoints.CREATE_CUSTOMER, validateCustomerCreation , roomController.createCustomer);
 
  
    
 export default router;