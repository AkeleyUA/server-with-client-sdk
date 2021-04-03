import { IsEmail, Length } from 'class-validator';

export interface IUser {
  id: number;
  email: string;
}

export interface IServerUser extends IUser {
  password: string;
}

export class TLoginBody {
  @IsEmail(undefined, { message: 'Некорретный email' })
  email: IServerUser['email'];

  @Length(3, 5, { message: 'Слишком которкий пароль' })
  password: IServerUser['password'];
}

export type TResponseWithError = { message: string };
