import type { Knex } from "knex";
import "dotenv/config";
import path from "path";
// Update with your config settings.

const config: { [key: string]: Knex.Config } = {
  development: {
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
      extension: "ts",
      directory: path.resolve(__dirname, "./src/database/migrations"),
    },
  },
};

module.exports = config;
