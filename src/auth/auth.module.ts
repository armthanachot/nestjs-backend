import { Module } from '@nestjs/common';
import {AuthController} from "./auth.controller"
import {AuthService} from "./auth.service"
import {User} from "../user/user.entity"
import {TypeOrmModule} from "@nestjs/typeorm"
import {UserService} from "../user/user.service"
@Module({
    imports:[TypeOrmModule.forFeature([User])],
    controllers:[AuthController],
    providers:[AuthService,UserService]
})
export class AuthModule {}
