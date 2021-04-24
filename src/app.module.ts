import { Module, NestModule ,MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import {Connection} from "typeorm"
import {User} from "./user/user.entity"
import {User_type} from "./user/user_type.entity"
import {Permission} from "./permission/permission.entity"
import {PermissionMap} from "./permission/permission_map.entity"
import { EmployeeService } from './employee/employee.service';
import { EmployeeModule } from './employee/employee.module';
import { AuthService } from './auth/auth.service';
import { AuthModule } from './auth/auth.module';
import { PermissionModule } from './permission/permission.module';
import {permissionVerify} from "../middleware/permission.middleware"
import {ROLE} from "../constants/config"
@Module({
  imports: [UserModule,TypeOrmModule.forRoot({
    type:"mysql",
    host:"localhost",
    port:3306,
    username:"root",
    password:"",
    database:"nest_user_management",
    entities:[User,User_type,Permission,PermissionMap],
    synchronize:true
  }), EmployeeModule, AuthModule, PermissionModule],
  controllers: [AppController],
  providers: [AppService,AuthService, EmployeeService],
})
export class AppModule implements NestModule {
  constructor(private connection:Connection){}
  async configure(consumer:MiddlewareConsumer ){
    const {GET,POST,PUT,DELETE,ALL} = RequestMethod
    const {CEO,DEV,MD} = ROLE
    consumer.apply(await permissionVerify([CEO,DEV,MD])).forRoutes({path:'user',method:ALL})
    // consumer.apply(permissionVerify).forRoutes({path:'user',method:RequestMethod.PUT})
  }
}
