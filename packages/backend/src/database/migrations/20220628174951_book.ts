import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return await knex.schema.createTable("books", (table) => {
    table.uuid("id").unique().notNullable();
    table.string("title").notNullable();
    table.string("author").notNullable();
    table.string("isbn").notNullable().unique();
    table.string("copy_code").notNullable();
    table
      .timestamp("created_at", { precision: 6 })
      .defaultTo(knex.raw("CURRENT_TIMESTAMP"))
      .notNullable();
    table
      .timestamp("created_at", { precision: 6 })
      .defaultTo(knex.raw("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"))
      .notNullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  return await knex.schema.dropTable("books");
}
