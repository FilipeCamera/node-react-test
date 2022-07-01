import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return await knex.schema.createTable("copies", (table) => {
    table.uuid("id").unique().notNullable().primary();
    table
      .uuid("user_id")
      .references("id")
      .inTable("users")
      .notNullable()
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    table
      .uuid("book_id")
      .references("id")
      .inTable("books")
      .notNullable()
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    table.date("start_rent").notNullable();
    table.date("return_day").notNullable();
    table.boolean("devolution").nullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  return await knex.schema.dropTable("copies");
}
