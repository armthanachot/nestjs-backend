import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { Req, Res } from "@nestjs/common";


@Injectable()
export class permissionVerify implements NestMiddleware {
  async use(@Req() req: Request, @Res() res: Response, next: NextFunction) {

    next();
  }
}
