import { Entity, Column, PrimaryGeneratedColumn,CreateDateColumn,UpdateDateColumn,OneToOne,JoinColumn} from 'typeorm';
@Entity()
export class User_type{
    @PrimaryGeneratedColumn()
    id: number;

  
    @Column()
    type: string;
  

    @CreateDateColumn()
    created_at:Date

    @UpdateDateColumn()
    updated_at:Date
}