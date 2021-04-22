import { Controller,Get, Post, Req, Res } from '@nestjs/common';
import {Request,Response} from "express"

@Controller('auth')
export class AuthController {
    @Get()
    async findAll(@Req() req:Request , @Res() res:Response){
        return res.status(200).json({data:"this is auth controller"})
    }
}
