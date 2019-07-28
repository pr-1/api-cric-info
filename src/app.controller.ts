import { Controller, Get, Logger, Res, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('add-post')
  getHello() {
    Logger.log('Get called');
    return {message: 'called'};
  }
}
