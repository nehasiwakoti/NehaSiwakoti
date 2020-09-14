export function up(knex){
    return knex.schema.createTable('user_phone_numbers',table =>{
        table.increments('id');
        table.integer('user_id').notNull();
        table.bigInteger('phone_number').notNull();
        table.string('type', 4).notNull();
       
    });
}
export function down(knex){
    return knex.schema.dropTable('user_phone_number');

}