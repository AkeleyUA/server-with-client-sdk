import { Body, Controller, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { IUser, TLoginBody } from './client/common/types';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  getHello(@Body() body: TLoginBody): IUser {
    return this.appService.login(body);
  }
}
