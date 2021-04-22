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
  async create(user) {
    const result = await this.usersRepository.save(user);
    return result;
  }
}
