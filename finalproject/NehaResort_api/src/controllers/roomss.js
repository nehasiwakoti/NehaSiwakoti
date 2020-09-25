import * as roomService from '../services/roomsss';

export function getAllRooms(req,res,next){
    const roomId = +req.room.id;
    roomService
    .getAllRooms(roomId)
    .then(data => res.json(data))
    .catch(err => next(err));
}

export async function createCustomer(req,res,next){
    const params = req.body;
       try{
        const data = await roomService.createCustomer(params);
            res.json(data);
    }catch(err){
        next(err);
    }

}
