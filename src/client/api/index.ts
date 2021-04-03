import { BASE_URL } from '../common';
import { TLoginBody, IUser, TResponseWithError } from '../common/types';

export default class AuthSDK {
  static async login(body: TLoginBody): Promise<IUser> {
    try {
      const res = await fetch(`${BASE_URL}`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });
      if (res.ok) {
        const data: IUser = await res.json();
        return data;
      } else {
        const { message }: TResponseWithError = await res.json();
        throw new Error(message);
      }
    } catch (err) {
      throw new Error(err.message);
    }
  }
}
