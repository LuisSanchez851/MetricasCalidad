import dotenv from 'dotenv';
import { DataSource } from 'typeorm';
import { UserEntity } from '../entitys/UserEntity';
dotenv.config();

export const AppDataSourse = new DataSource({
    type: "mysql",
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    synchronize: true,
    logging: true,
    entities: [UserEntity]
});



export const connectDB = async () => {
    try {
        await AppDataSourse.initialize();
        console.error("Database connection.");
    } catch (error) {
        console.error("Error connecting to the database:", error);
        process.exit(1);
    }
}