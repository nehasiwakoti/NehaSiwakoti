export function up(knex){
    return knex.schema.createTable('rooms',table =>{
        table.increments('id');
        table.string('name', 30).notNull();
        table.string('slug', 30).notNull();
        table.string('type', 30).notNull();
        table.integer('price', 20000).notNull();
        table.integer('size',200).notNull();
        table.integer('capacity',200).notNull();
        table.string('pets',200).notNull();
        table.string('breakfast',200).notNull();
        table.string('featured',200).notNull();
        table.string('description',200).notNull();
        table.string('extras',200).notNull();
        //table.boolean('is_active').notNull().defaultTo(true);
    });

}

export function down(knex){
    return knex.schema.dropTable('rooms');

}