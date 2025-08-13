import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class UserEntity{

    @PrimaryGeneratedColumn()
    id_user!: number;

    @Column({type: "varchar", length: 255})
    name_user!: string;

    @Column({type: "varchar", length: 255, unique: true})
    email_user!: string;

    @Column({type: "varchar", length: 255})
    password_user!: string;

    @Column({type: "int"})
    status_user!: number;


}