import { TLoginBody, TLoginRespone } from '../common/types';
export default class AuthSDK {
    static login(body: TLoginBody): Promise<TLoginRespone>;
}
