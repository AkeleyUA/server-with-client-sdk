import { IServerUser, IUser, TLoginBody } from './client/common/types';
export declare class AppService {
    users: IServerUser[];
    login({ email, password }: TLoginBody): IUser;
}
