import {UserPort} from "../domain/UserPort";
import {User} from "../domain/User";

export class UserApplication{

    private port: UserPort;

    constructor(port: UserPort){
        this.port = port;
    }
    async createUser(user:Omit<User,"id">):Promise<number>{
        const existingUser= await this.port.getUserByEmail(user.email);
        if(!existingUser){
            return await this.port.createUser(user);
        }
        throw new Error("El usuario ya existe")
    }
    async updateUser(id:number,user:Partial<User>):Promise<boolean>{
        const existingUser= await this.port.getUserById(id);
        if(!existingUser){
            throw new Error("El usuario no existe")
        }

        if(user.email){
            const emailTaken = await this.port.getUserByEmail(user.email);
            if(emailTaken && emailTaken.id !== id ){
                throw new Error("Error en actualizar el email ¡NO SE PUEDE!")
            }
        }

        return await this.port.updateUser(id,user);
        
    }

    async deleteUser(id:number):Promise<boolean>{
        const existingUser= await this.port.getUserById(id);
        if(!existingUser){
            throw new Error("El usuario no existe")
        }
        return await this.port.deleteUser(id);
    }
    //Consultas GET
     async getUserById(id:number): Promise<User | null>{
        return await this.port.getUserById(id);
     }

     async getUserByEmail(email:string): Promise<User | null>{
        return await this.port.getUserByEmail(email);
     }

     async getAllUsers(): Promise<User[]>{
        return await this.port.getAllUsers();
     }
}