import { Module } from '@nestjs/common';
import {UserController} from "./user.controller"
import {UserService} from "./user.service"
import {User} from "./user.entity"
import {User_type} from "./user_type.entity"
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports:[TypeOrmModule.forFeature([User,User_type])],
    controllers:[UserController],
    providers: [UserService],
})
export class UserModule {}
