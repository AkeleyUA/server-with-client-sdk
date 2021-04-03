import { Body, Controller, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { TLoginBody, TLoginRespone } from './client/common/types';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  getHello(@Body() body: TLoginBody): TLoginRespone {
    return this.appService.login(body);
  }
}
