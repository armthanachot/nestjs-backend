import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import {Connection} from "typeorm"
import {User} from "./user/user.entity"
import { EmployeeService } from './employee/employee.service';
import { EmployeeModule } from './employee/employee.module';
import { AuthController } from './auth/auth.controller';
@Module({
  imports: [UserModule,TypeOrmModule.forRoot({
    type:"mysql",
    host:"localhost",
    port:3306,
    username:"root",
    password:"",
    database:"nest_user_management",
    entities:[User],
    synchronize:true
  }), EmployeeModule],
  controllers: [AppController, AuthController],
  providers: [AppService, EmployeeService],
})
export class AppModule {
  constructor(private connection:Connection){}
}
