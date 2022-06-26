module.exports = {
  type: process.env.DB_TYPE,
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  ssl: false,
  extra: {
    ssl: {
      rejectUnauthorized: false,
    },
  },
  entities: ["packages/backend/src/database/entities/*.ts"],
  migrations: ["packages/backend/src/database/migrations/*.ts"],
  migrationsTableName: "migrations",
  //subscribers: ['packages/backend/src/database/subscriber/*.ts'],
  cli: {
    migrationsDir: "src/database/migrations",
    entitiesDir: "src/database/entities",
  },
};
