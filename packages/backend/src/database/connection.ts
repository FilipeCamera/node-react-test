import knex from "knex";
import "dotenv/config";

const database = knex({
  client: "pg",
  connection: {
    host: process.env.DB_HOST,
    port: 5432,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  },
  migrations: {
    tableName: "migrations",
  },
});

export default database;
