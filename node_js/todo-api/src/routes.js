
import { Router} from 'express';
import * as endpoints from './Constants/endpoints';
import { validateUserCreation,validateUserUpdate } from './schemas/user';
import  logger from '../src/utils/logger';
import * as userController from './controllers/userss';


const router = Router();
const usersJsonPath = '../users.json';

router.get('/' , (request,response,next) => {
    response.json({
         name:'todo-api',
         version: '1.0.0'
     });
 
 });
 
 router.get(endpoints.GET_USERS, userController.getAllUsers);
  
   router.get(endpoints.GET_USER_BY_ID, userController.getUserById);

  router.post(endpoints.CREATE_USER, validateUserCreation , userController.createUser);
 
   router.put(endpoints.UPDATE_USER, validateUserUpdate ,userController.updateUser);

 router.delete(endpoints.DELETE_USER,userController.deleteUser);
    
 export default router;
 
 
 
