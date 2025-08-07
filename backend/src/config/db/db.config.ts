import { config } from 'dotenv';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

config({ path: '.env' });

const dbConfig = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [__dirname + '/../../**/*.entity{.ts,.js}'],
  migrations: [__dirname + '/../../migrations/*{.ts,.js}'],
  migrationsRun: false,
  synchronize: process.env.SYNCHRONIZE === 'true' || true,
  logging: process.env.SYNCHRONIZE === 'true' || false,
  entityPrefix: process.env.ENTITY_PREFIX,
};
export const pgDBConfig = dbConfig as TypeOrmModuleOptions;
