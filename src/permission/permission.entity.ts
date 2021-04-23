import { Entity, Column, PrimaryGeneratedColumn,CreateDateColumn,UpdateDateColumn} from 'typeorm';

@Entity()
export class Permission{
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    route: string;

    @Column()
    method: string
    
    @Column({default:false})
    params: Boolean

    @CreateDateColumn()
    created_at:Date

    @UpdateDateColumn()
    updated_at:Date
}