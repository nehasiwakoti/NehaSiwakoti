import connection from '../db';
import snakeize from 'snakeize';
import camelize from 'camelize';



export async function getAllRooms(roomId){
    const data = await connection
    .select('id','name','slug','type','price','size','capacity','pets','breakfast','description','featured','extras')
    .from(table)
    .where('room_id',roomId);
    return camelize(data);
}





const table='customer'
export async function create(params){
    params = snakeize(params)
    //console.log('***params = ',params)
    const [data] = await connection.insert(params).into(table).returning('*');
    return camelize(data);
}
