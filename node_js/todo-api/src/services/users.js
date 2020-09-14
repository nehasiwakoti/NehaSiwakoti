
import  logger from '../utils/logger';
import usersJson from '../../users.json';
import * as User from '../model/usersss';
import NotFoundError from '../utils/NotFoundError';
import * as UserPhoneNumbers from '../model/userPhoneNumbers'

export async function getAllUsers(){
    logger.info('fetching all users');
    const user = await User.getAll();
    const data = users.map(user =>{
        const  { phoneNumbers } = user;
        const hasEmptyPhoneNumber = Object.keys(phoneNumbers[0]).length===0;
    
    return {
        ...user,
        phoneNumbers: hasEmptyPhoneNumber? []:phoneNumbers
    }
});
return{
    data,
    message:'list of all users'
}
};


export async function getUserById( userId){
    logger.info(`fetching user information with id ${userId}`);

    const result = await User.getById(userId);
    console.log(result)

    if(!result){

        logger.error(`cannot find the user with id ${userId}`);
        
        throw new NotFoundError (`cannot find the user with id ${userId}`);
   
    }
    const phoneNumbers = await UserPhoneNumber.getPhoneNumbersById(userId);
    return {
        data: {
            ...result,
            phoneNumbers
        },
        message: `information about userId ${userId}`
        
    };
        
}
/*export function createUser(params){
    const maxId = usersJson.reduce((acc,cur)=>{
        return cur.id>acc?cur.id:acc;
    } , 0);

    usersJson.push({...usersJson,
        
            id:maxId+1,
            ...params
        })
         return{
        message:"New USer added sucesfully",
        data:{
            id:maxId+1,
            ...params
        }
    };

}
*/
export async function createUser (params) {
    const { firstName,lastName,email,password,phoneNumbers} = params;
    const data = await User.create({
        firstName,
        lastName,
        email,
        password,
        
    });

    
    const insertDataForPhoneNumbers = phoneNumbers.map(phone =>({
        userId:data.id,
        phoneNumber :phone.number,
        type: phone.type
    }));

    console.log("******data****************",data,"****phone",insertDataForPhoneNumbers)

    
    const phoneNumberInsertedData = await UserPhoneNumbers.add(insertDataForPhoneNumbers);
    return{
        data:params,
        message:" New user added sucesfully"
    }

    
}


/*export function deleteUser(userId){
    
    const doesUserExist = usersJson.find(user => user.id === userId);
    if(!doesUserExist){
        logger.err(`cannot find user with id  ${userId}`);
         
        throw new Error (`cannot find user with id  ${userId}`);
    }
    const updatedUserList = usersJson.filter(user=>user.id !== userId);

    fs.writeFileSync(usersJsonPath , JSON.stringify(updatedUserList,null,2));

    return{
        message:"cannot find user with id"+ userId
    };

}*/
export async function deleteUser(userId){
    logger.info(`fetching user information with id ${userId}`);

    const result = await User.getById(userId);
    console.log(result)

    if(!result){

        logger.error(`cannot find the user with id ${userId}`);
        
        throw new NotFoundError (`cannot find the user with id ${userId}`);
   
    }
    await User.remove(userId);
    return{
        message:"Deleted user with id" +userId
    };

}


/*export function updateUser(userId ,params){
       const updatedJson = usersJson.map(user=>{
        if(user.id === userId){
            return{
                ...user,
                ...params
            };
        }
        return user;
    });
    fs.writeFileSync(usersJsonPath , JSON.stringify(updatedJson,null,2));
    return{
        message:"updated user with id"+ userId
    };
}

*/

export async function updateUser(userId,params){
    logger.info(`fetching user information with id ${userId}`);

    const result = await User.getById(userId);
    console.log(result)

    if(!result){

        logger.error(`cannot find the user with id ${userId}`);
        
        throw new NotFoundError (`cannot find the user with id ${userId}`);
   
    }
    await User.update(userId,params);
    return{
        data:{
        ...result,
        ...params,
        },
        message:"Updated user with id" +userId
    };
}