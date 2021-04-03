import { Injectable, NotFoundException } from '@nestjs/common';
import { IUser, TLoginBody, TLoginRespone } from './client/common/types';

@Injectable()
export class AppService {
  users: IUser[] = [
    {
      id: 1,
      email: 'test@1.com',
      password: '123456',
    },
    {
      id: 2,
      email: 'test@2.com',
      password: '123456',
    },
    {
      id: 3,
      email: 'test@3.com',
      password: '123456',
    },
    {
      id: 4,
      email: 'test@4.com',
      password: '123456',
    },
  ];

  login({ email, password }: TLoginBody): TLoginRespone {
    const find = this.users.find(
      (user) => user.email === email && user.password === password,
    );

    if (!find) {
      throw new NotFoundException('Некоректные данные авторизации');
    }

    const { password: p, ...other } = find;

    return other;
  }
}
