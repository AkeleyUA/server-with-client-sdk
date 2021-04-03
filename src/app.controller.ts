import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { IUser } from './client/common/types';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): IUser {
    return this.appService.getHello();
  }
}
