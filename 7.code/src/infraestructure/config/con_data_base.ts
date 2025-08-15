import dotenv from 'dotenv';
import { DataSource } from 'typeorm';
import { UserEntity } from '../entities/UserEntity';
import envs from './environment-vars';

export const AppDataSourse = new DataSource({
    type: "mysql",
    host: envs.DB_HOST,
    port: Number(envs.DB_PORT),
    username: envs.DB_USER,
    password: envs.DB_PASSWORD,
    database: envs.DB_NAME,
    synchronize: true,
    logging: true,
    entities: [UserEntity]
});


//Conectar a la BD
export const connectDB = async () => {
    try {
        await AppDataSourse.initialize();
        console.error("Database connection.");
    } catch (error) {
        console.error("Error connecting to the database:", error);
        process.exit(1);
    }
}