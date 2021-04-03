import { BASE_URL } from '../common';
import { IUser } from '../common/types';

export const getUser = async (): Promise<IUser> => {
  return fetch(`${BASE_URL}`).then((res) => res.json());
};
