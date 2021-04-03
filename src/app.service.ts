import { Injectable } from '@nestjs/common';
import { IUser } from './client/common/types';

@Injectable()
export class AppService {
  getHello(): IUser {
    return {
      id: 1,
    };
  }
}
