import { Entity, Column, PrimaryGeneratedColumn,CreateDateColumn,UpdateDateColumn,OneToOne,JoinColumn} from 'typeorm';
 @Entity()
export class Permission{
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    route: string;

    @Column()
    method: string

    @CreateDateColumn()
    created_at:Date

    @UpdateDateColumn()
    updated_at:Date
}