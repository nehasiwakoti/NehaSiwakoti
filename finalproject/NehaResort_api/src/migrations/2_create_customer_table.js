export function up(knex){
    return knex.schema.createTable('customer',table =>{
        
        table.string('first_name', 30).notNull();
        table.string('last_name', 30).notNull();
        table.string('email', 200).notNull();
        table.string('message', 20000).notNull();
        table.string('phone_numbers',200).notNull();
        
    });

}

export function down(knex){
    return knex.schema.dropTable('customer');

}