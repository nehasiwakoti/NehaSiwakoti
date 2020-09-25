
import * as customer from '../model/rooms';

export async function getAllRooms(roomId){

     
    logger.info(`Getting list of rooms for roomId ${roomId}`);
    const data = await rooms.getAllRooms(roomId);

    return{
        data,
        message:`list of rooms for roomId ${roomId}`
    }
}



export async function createCustomer (params) {
    const { firstName,lastName,email,message,phoneNumbers} = params;
    const data = await customer.create({
        firstName,
        lastName,
        email,
        message,
        phoneNumbers
        
    });
      

return{
    data:params,
    message:" New user added sucesfully"
}
}





  