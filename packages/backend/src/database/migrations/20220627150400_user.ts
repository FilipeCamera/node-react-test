import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("users", (table) => {
    table.uuid("id");
    table.string("fullname").notNullable();
    table.string("cpf", 11).notNullable().unique();
    table.date("birth_date").notNullable();
    table.string("cep", 8).notNullable();
    table.string("address").notNullable();
    table.string("city").notNullable();
    table.string("uf", 2).notNullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable("users");
}
