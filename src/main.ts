import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as helmet from "helmet"
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path'

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.useStaticAssets(join(__dirname,'..','static'))
  app.useGlobalPipes(new ValidationPipe)
  app.use(helmet())
  await app.listen(3000);
}
bootstrap();
