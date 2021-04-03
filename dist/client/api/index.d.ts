import { IUser } from '../common/types';
export default class AuthSDK {
    static getUser(): Promise<IUser>;
}
