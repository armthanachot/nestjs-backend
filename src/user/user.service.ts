import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { User } from "./user.entity";

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private usersRepository: Repository<User>,
  ) {}
  getGreeting(): string {
    const greeting = "hey congrats";
    return greeting;
  }
  async findAll(): Promise<User[]> {
    return await this.usersRepository.find();
  }
  async findById(id:any):Promise<User>{
    const user = await this.usersRepository.findOne({id})
    return user 
  }
  async create(user) {
    const result = await this.usersRepository.save(user);
    return "OK";
  }
  async update(id:any,user:object){
    const result = await this.usersRepository.update({id},{...user})
    return result
  }
  async destroy(id:any){
    const result = await this.usersRepository.delete({id})
    return result
  }
}
