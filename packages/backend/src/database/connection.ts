import { DataSource } from "typeorm";
import { User } from "./entities";

const database = new DataSource({
  type: process.env.DB_TYPE,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  entities: [User],
  logging: false,
  synchronize: true,
});

database
  .initialize()
  .then(() => {})
  .catch((err) => console.error(err));

export default database;
