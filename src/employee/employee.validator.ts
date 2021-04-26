import { Type } from "class-transformer"
import {IsEmail,IsNotEmpty,ValidateNested,IsObject,IsString} from "class-validator"
class Employee{
    @IsEmail()
    @IsString()
    email:string

    @IsNotEmpty()
    @IsString()
    password:string
}

export class CreateEmployee{
    @ValidateNested({each:true})
    @Type(()=>Employee)
    @IsObject()
    @IsNotEmpty()
    employee:Employee[]
}    

