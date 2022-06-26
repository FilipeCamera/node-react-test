import { DataSource } from "typeorm";
import { User } from "./entities";
import "dotenv/config";

const database = new DataSource({
  type: "postgres",
  database: process.env.DB_NAME,
  port: 5432,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  entities: [User],
  logging: false,
  synchronize: true,
  migrations: ["/packages/backend/src/database/migrations/*.ts"],
});

export default database;
