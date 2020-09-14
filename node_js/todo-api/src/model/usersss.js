import connection from '../db';
import snakeize from 'snakeize';
import camelize from 'camelize';

import { FETCH_USERS_WITH_PHONE_NUMBERS} from '../db/queries/usersssss';
const table = 'users';

export async function getAll(){
     const {rows} = await connection.raw( FETCH_USERS_WITH_PHONE_NUMBERS);
     return camelize(rows);
}

export async function getById(id){
    const [result] = await connection.select('*').from(table).where({id}).where('is_active',true);
    // console.log(result)
    return result? camelize (result) :null;
}

export async function create(params){
    params = snakeize(params)
    console.log('***params = ',params)
    const [data] = await connection.insert(params).into(table).returning('*');
    return camelize(data);
}
export function remove(userId){
    return connection(table).update({is_active:false}).where({id:userId});
}

export function update(userId,params){
    return connection(table).update(snakeize(params)).where({id:userId});
}
