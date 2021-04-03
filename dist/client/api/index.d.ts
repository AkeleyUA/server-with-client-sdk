import { TLoginBody, IUser } from '../common/types';
export default class AuthSDK {
    static login(body: TLoginBody): Promise<IUser>;
}
