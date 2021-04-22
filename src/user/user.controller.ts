import { Controller, Get, Post, Req, Res } from '@nestjs/common';
import {Request,Response} from "express"
import {UserService} from "./user.service"
import * as schema from "../schema_validator/validator/user.validator"
@Controller('user')
export class UserController  {
    constructor(private readonly userService:UserService){}
    @Get()
    async findAll(@Req() req:Request , @Res() res:Response){
        const users = [
            {
                fname:"Thanachot",
                lname:"Tesjaroen",
                age:24
            }
        ]
        return res.status(200).json({data:users})
    }
    @Get("greeting")
    async findGreeting(@Req() req:Request, @Res() res:Response){
        const greetingMessage = this.userService.getGreeting
        return res.status(200).json(greetingMessage)
    }
    @Post("testvalidate")
    async findTest(@Req() req:Request, @Res() res:Response){
        const user = {
            firstname:"TT",
            lastname:"LL",
            email:"132",
            password:"123456789"
        }
        const validated = await schema.create(user)
        if(validated.message){
        return res.status(400).json({data:"validation error"})

        }
        
        return res.status(200).json({data:"this is data"})
    }
    @Post()
    async create(@Req() req:Request, @Res() res:Response){
        // console.log(req.body);
        
        const users = [
            {
                firstname:"Thanachot",
                lastname:"Tesjaroen",
                email:"arm1997a@mail.com",
                password:"123456798"
            },
            {
                firstname:"Patchara",
                lastname:"Mangkorn",
                email:"amp@mail.com",
                password:"123456798"
            }
        ]
        const created = await this.userService.create(users)
        // console.log(created);
        return res.status(200).json({message:"OK"})
        
    }
    

}
