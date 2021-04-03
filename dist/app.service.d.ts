import { IUser, TLoginBody, TLoginRespone } from './client/common/types';
export declare class AppService {
    users: IUser[];
    login({ email, password }: TLoginBody): TLoginRespone;
}
