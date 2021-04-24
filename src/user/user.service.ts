import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository,QueryBuilder,getRepository,getManager } from "typeorm";
import { User } from "./user.entity";
import {User_type} from "./user_type.entity"
import * as jwt from "jsonwebtoken"
import {SECRETKEY} from "../../constants/config"
import { array } from "joi";

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private usersRepository: Repository<User>,
  ) {}
  getGreeting(): string {
    const greeting = "hey congrats";
    return greeting;
  }
  async jwtSign({username,role}){
    const token = await jwt.sign({username,role},SECRETKEY,{expiresIn:"120"})
    return token 
  }
  async findAll(): Promise<User[]> {
    return await this.usersRepository.find();
  }
  async findByEmail(email:string){
    const arrColumn = ["user.id AS id","user.firstName AS firstname","user.lastName AS lastname","user.email AS email","user.password AS password","user_type.type AS type"]
    const user = await getManager().createQueryBuilder().select(arrColumn).from(User,"user").leftJoin(User_type,"user_type","user.userTypeId = user_type.id").where("user.email = :email",{email}).getRawOne()
    return user
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
