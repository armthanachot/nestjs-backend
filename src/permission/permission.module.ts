import { Module } from '@nestjs/common';
import {PermissionController} from "./permission.controller"
import {PermissionService} from "./permission.service"
import {Permission} from "./permission.entity"
import {PermissionMap} from "./permission_map.entity"
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports:[TypeOrmModule.forFeature([Permission,PermissionMap])],
    controllers:[PermissionController],
    providers:[PermissionService]
})
export class PermissionModule {}
