import { Entity, Column, PrimaryGeneratedColumn,CreateDateColumn,UpdateDateColumn,OneToOne,JoinColumn, ManyToOne} from 'typeorm';

import {User_type} from "../user/user_type.entity"
import {Permission} from "./permission.entity"
@Entity()
export class PermissionMap{
    @PrimaryGeneratedColumn()
    id: number;
    
    @ManyToOne((type) => User_type,{primary:true,onDelete:"CASCADE",onUpdate:"CASCADE"})
    @JoinColumn({referencedColumnName:"id"})
    user_type:User_type

    @ManyToOne(type => Permission,{primary:true,onDelete:"CASCADE",onUpdate:"CASCADE"})
    @JoinColumn({referencedColumnName:"id"})
    permission:Permission

    @CreateDateColumn()
    created_at:Date

    @UpdateDateColumn()
    updated_at:Date
}