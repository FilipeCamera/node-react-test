import { Knex } from "knex";
import { v4 as uuidv4 } from "uuid";

export async function up(knex: Knex): Promise<void> {
  return await knex.schema.createTable("admins", (table) => {
    table.uuid("id").primary().unique().notNullable().defaultTo(uuidv4());
    table.string("name").notNullable().defaultTo("admin");
    table
      .string("code_access")
      .unique()
      .notNullable()
      .defaultTo("admin_biblioteca_123");
  });
}

export async function down(knex: Knex): Promise<void> {
  return await knex.schema.dropTable("admins");
}
