import { Entity, Column, PrimaryGeneratedColumn,CreateDateColumn,UpdateDateColumn,OneToOne,JoinColumn} from 'typeorm';
import {User} from "./user.entity"
@Entity()
export class User_type{
    @PrimaryGeneratedColumn()
    @OneToOne(type => User,user => user.user_type)
    id: User;
  
    @Column()
    type: string;
  

    @CreateDateColumn()
    created_at:Date

    @UpdateDateColumn()
    updated_at:Date
}