import { Controller,Get, Post, Req, Res } from '@nestjs/common';
import {Request,Response} from "express"
import { jwtSign, jwtVerify, passwordCompare } from 'src/utils/auth';
import {UserService} from "../user/user.service"
@Controller('auth')
export class AuthController {
    constructor(private readonly userService: UserService) {}
    @Get()
    async findAll(@Req() req:Request , @Res() res:Response){
        return res.status(200).json({data:"this is auth controller"})
    }
    @Post("/login")
    async login(@Req() req:Request , @Res() res:Response){
        const {email,password} = req.body
        if(!email || !password){
            return res.status(401).json({message:"INVALID EMAIL OR PASSWORD"})
        }
        const user:any = await this.userService.findByEmail(email)
        if(!user) return res.status(404).json({message:"NOT FOUND"})
        const logedin = await passwordCompare(password,user.password)
        if(!logedin) return res.status(401).json({message:"INVALID EMAIL OR PASSWORD"})
        const jwtToken = await jwtSign(user)
        console.log(jwtToken);
        const correctJwt = await jwtVerify(jwtToken)
        return res.status(200).json({message:"OK"})
    }
    @Post("/jwt/verify")
    async verifyJWT(@Req() req:Request , @Res() res:Response){
        const {token} = req.body
        const correctToken = await jwtVerify(token)
        console.log(correctToken);
        return res.status(200).json({message:"OK"})

    }
}
