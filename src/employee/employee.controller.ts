import {
  Controller,
  Get,
  Post,
  Req,
  Res,
  Body,
  UsePipes,
  ValidationPipe,
} from "@nestjs/common";
import { Request, Response } from "express";
import { EmployeeService } from "./employee.service";
import { CreateEmployee } from "./employee.validator";

@Controller("employee")
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}
  @Get()
  async findAll(@Req() req: Request, @Res() res: Response) {
    const employee = [
      {
        employee_code: "123456",
        fname: "Thanachot",
        lname: "Tesjaroen",
        age: 24,
      },
    ];
    return res.status(200).json({
      data: this.employeeService.getEmployeeGreeting,
    });
  }
  @Post()
  @UsePipes(new ValidationPipe({ transform: true }))
  async create(@Req() req: Request, @Res() res: Response,@Body() createEmployee: CreateEmployee) {
      return res.status(200).json({message:"OK"})
  }
}
