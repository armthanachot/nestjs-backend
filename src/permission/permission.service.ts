import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import {Permission} from "./permission.entity"
@Injectable()
export class PermissionService {
    constructor(@InjectRepository(Permission) private permissionRepository:Repository<Permission>){}
    async checkPermission({email,route,method,params}): Promise<Permission>{
        const havePermission = await this.permissionRepository.findOne({route,method})
        return havePermission
    }
    async findAll():Promise<Permission[]>{
        return await this.permissionRepository.find()
    }
}
