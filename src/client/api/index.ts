import { BASE_URL } from '../common';
import { IUser } from '../common/types';

export default class AuthSDK {
  static async getUser(): Promise<IUser> {
    return fetch(`${BASE_URL}`).then((res) => res.json());
  }
}
