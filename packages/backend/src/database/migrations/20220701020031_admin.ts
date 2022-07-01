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
    table.timestamp("created_at", { precision: 6 }).defaultTo(knex.fn.now(6));
    table.timestamp("updated_at", { precision: 6 }).defaultTo(knex.fn.now(6));
  });
}

export async function down(knex: Knex): Promise<void> {
  return await knex.schema.dropTable("admins");
}
