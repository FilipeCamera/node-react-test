import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return await knex.schema.createTable("books", (table) => {
    table.uuid("id").unique().notNullable();
    table.string("title").notNullable();
    table.string("author").notNullable();
    table.string("isbn").notNullable().unique();
    table.string("copy_code").notNullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  return await knex.schema.dropTable("books");
}
