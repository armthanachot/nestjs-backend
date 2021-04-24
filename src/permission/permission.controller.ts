import { Controller, Delete, Get, Post, Put, Req, Res } from "@nestjs/common";
import { Request, Response } from "express";
import {PermissionService} from "./permission.service"
@Controller('permission')
export class PermissionController {
    constructor(private readonly permissionService:PermissionService){}
    @Get()
    async findAll(@Req() req:Request, @Res() res:Response){
        const permissions = await this.permissionService.findAll()
        return res.status(200).json({data:permissions})
    }
}
