import { Entity, Column, PrimaryGeneratedColumn,CreateDateColumn,UpdateDateColumn,OneToOne,JoinColumn} from 'typeorm';
import {User_type} from "./user_type.entity"
@Entity()
export class User{
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    firstName: string;
  
    @Column()
    lastName: string;

    @Column()
    email: string;

    @Column()
    password: string;
  
    @Column({ default: true })
    isActive: boolean;

    @OneToOne(type => User_type,user_type => user_type.id)
    @JoinColumn()
    user_type:User_type

    @CreateDateColumn()
    created_at:Date

    @UpdateDateColumn()
    updated_at:Date
}