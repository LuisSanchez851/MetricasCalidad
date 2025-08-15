import { Repository } from "typeorm";
import { User } from "../../domain/User";
import { UserPort } from "../../domain/UserPort";
import { UserEntity } from "../entities/UserEntity";
import { AppDataSourse } from "../config/con_data_base";

export class UserAdapter implements UserPort {

    private userRepository: Repository<UserEntity>;

    constructor() {
        this.userRepository = AppDataSourse.getRepository(UserEntity);
    }

    private toDOomain(user: UserEntity): User {
        return {
            id: user.id_user,
            name: user.name_user,
            email: user.email_user,
            password: user.password_user,
            status: user.status_user
        }

    }
    private toEntity(user: Omit<User, "id">): UserEntity {
        const userEntity = new UserEntity();
        userEntity.name_user = user.name;
        userEntity.email_user = user.email;
        userEntity.password_user = user.password;
        userEntity.password_user = user.password;
        userEntity.status_user = user.status;
        return userEntity;
    }

    async createUser(user: Omit<User, "id">): Promise<number> {
        try {
            const newUser = this.toEntity(user);
            const savedUser = await this.userRepository.save(newUser);
            return savedUser.id_user;
        } catch (error) {
            console.error("Error creating user", error);
            throw new Error("Error creating user");
        }
    }
    async updateUser(id: number, User: Partial<User>): Promise<boolean> {
        try {
            const existingUser = await this.userRepository.findOne({ where: { id_user: id } });
            if (!existingUser) {
                throw new Error("User not found");
            }
            //Actualizar las propiedades enviadas
            Object.assign(existingUser, {
                name_user: User.name ?? existingUser.name_user,
                email_user: User.email ?? existingUser.email_user,
                password_user: User.password ?? existingUser.password_user,
                status_user: 1
            });
            await this.userRepository.save(existingUser);
            return true;
        } catch (error) {
            console.error("Error Updating User", error);
            throw new Error("Error Updating User");
        }
    }
    async deleteUser(id: number): Promise<boolean> {
        try {
            const existingUser = await this.userRepository.findOne({ where: { id_user: id } });
            if (!existingUser) {
                throw new Error("User not found");
            }
            Object.assign(existingUser, {
                status_user: 0
            });
            await this.userRepository.save(existingUser);
            return true;
        } catch (error) {
            console.error("Error deleting user", error);
            throw new Error("Error deleting user");
        }
    }
    async getAllUsers(): Promise<User[]> {
        try {
            const users = await this.userRepository.find();
            return users.map(this.toDOomain);
        } catch (error) {
            console.error("Error fetching all users", error);
            throw new Error("Error fetching all users");
        }
    }
    async getUserById(id: number): Promise<User | null> {
        try {
            const user = await this.userRepository.findOne({ where: { id_user: id } });
            return user ? this.toDOomain(user) : null;
        } catch (error) {
            console.error("Error fetching user by ID", error);
            throw new Error("Error fetching user by ID");
        }
    }
    async getUserByEmail(email: string): Promise<User | null> {
        try {
            const user = await this.userRepository.findOne({ where: { email_user: email } });
            return user ? this.toDOomain(user) : null;
        } catch (error) {
            console.error("Error fetching user by email", error);
            throw new Error("Error fetching user by email");
        }
    }

}