import * as userService from '../services/users';



export function getAllUsers( req,res,next){
      userService
    .getAllUsers()
    .then(data => res.json(data))
    .catch(err => next(err));
     } 

export async  function getUserById(req,res,next){
    const userId =  +req.params.userId
    try{
        const data = await userService.getUserById(userId);
        res.json(data);
    }catch(err){
        next(err);
    }

}
export async function createUser(req,res,next){
    const params = req.body;
    console.log('params= in userController',params)

    try{
        const data = await userService.createUser(params);
    console.log('result= in userController',data)

        res.json(data);
    }catch(err){
        next(err);
    }

}


/*export function deleteUser(req,res,next){
    const params = +req.params.userId

    try{
        const data = userService.deleteUser(userId);
        res.json(data);
    }catch(err){
        next(err);
  }
}
*/
export function deleteUser(req,res,next){
    userService
    .deleteUser(+req.params.userId)
    .then(data=> res.json(data))
    .catch(err=>next(err));
}

export function updateUser(req,res,next){
    const params = req.body;
    const userId = +req.params.userId

    try{
        const data = userService.updateUser( userId,params);
        res.json(data);
    }catch(err){
        next(err);
    }


}