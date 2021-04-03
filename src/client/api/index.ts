import { BASE_URL } from '../common';
import { TLoginBody, IUser } from '../common/types';

export default class AuthSDK {
  static async login(body: TLoginBody): Promise<IUser> {
    return fetch(`${BASE_URL}`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    }).then((res) => res.json());
  }
}
