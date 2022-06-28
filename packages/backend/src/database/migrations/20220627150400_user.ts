import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return await knex.schema.createTable("users", (table) => {
    table.uuid("id").unique().notNullable();
    table.string("fullname").notNullable();
    table.string("cpf", 11).notNullable().unique();
    table.date("birth_date").notNullable();
    table.string("cep", 8).notNullable();
    table.string("address").notNullable();
    table.string("city").notNullable();
    table.string("uf", 2).notNullable();
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
  return await knex.schema.dropTable("users");
}
