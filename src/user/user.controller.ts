import { Controller, Delete, Get, Post, Put, Req, Res } from "@nestjs/common";
import { Request, Response } from "express";
import { UserService } from "./user.service";
import * as schema from "../schema_validator/validator/user.validator";
import { passwordHash } from "src/utils/auth";

@Controller("user")
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Get()
  async findAll(@Req() req: Request, @Res() res: Response) {
    const users = [
      {
        fname: "Thanachot",
        lname: "Tesjaroen",
        age: 24,
      },
    ];
    return res.status(200).json({ data: users });
  }
  @Get("greeting")
  async findGreeting(@Req() req: Request, @Res() res: Response) {
    const greetingMessage = this.userService.getGreeting;
    return res.status(200).json({message:greetingMessage});
  }
  @Get(":id")
  async findById(@Req() req: Request, @Res() res: Response) {
    console.log(req.path);
    console.log(req.method);
    const hasParams = req.params ? true:false 
    console.log(hasParams);
    
    const { id } = req.params;
    const user = await this.userService.findById(id);
    return res.status(200).json({ data: user });
  }
  @Put(":id")
  async update(@Req() req: Request, @Res() res: Response) {
    const { id } = req.params;
    const user = req.body;
    const hasUser = await this.userService.findById(id);
    if (!hasUser) return res.status(404).json({ message: "NOT FOUND" });
    const updated = await this.userService.update(id, user);
    return res.status(200).json({ message: "OK" });
  }
  @Post()
  async create(@Req() req: Request, @Res() res: Response) {
    const users = req.body;
    if (Array.isArray(users)) {
      for (let item of users) {
        const validated = await schema.create(item);
        if (validated.message) {
          return res.status(400).json({ data: "validation error" });
        }
      }
      const user = await Promise.all(users.map(async (user) => {
        user.password = await passwordHash(user.password);
        return user;
      }));
      const created = await this.userService.create(user)
      return res.status(200).json({ message: "OK" });
    } else {
      const validated = await schema.create(users);
      if (validated.message) {
        return res.status(400).json({ data: "validation error" });
      }
      users.password = await passwordHash(users.password)
      const created = await this.userService.create(users)
      return res.status(200).json({ message: "OK" });
    }
  }
  @Delete(":id")
  async destroy(@Req() req: Request, @Res() res: Response) {
    const { id } = req.params;
    const hasUser = await this.userService.findById(id);
    if (!hasUser) return res.status(404).json({ message: "NOT FOUND" });
    const destroyed = await this.userService.destroy(id);
    return res.status(200).json({ message: "OK" });
  }
}
