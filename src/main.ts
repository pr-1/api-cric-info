import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import 'dotenv/config';
import { Logger } from '@nestjs/common';
import { join } from 'path';

const port = process.env.PORT || 3000;

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, { cors: true });
  app.enableCors();
  app.setBaseViewsDir(join(__dirname, './', 'views'));
  app.setViewEngine('hbs');

  await app.listen(port);
  Logger.log(`Server running on http:localhost:${port}`, 'Bootstrap');
}
bootstrap();
