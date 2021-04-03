export interface IUser {
  id: number;
  email: string;
}

export interface IServerUser extends IUser {
  password: string;
}

export type TLoginBody = {
  email: IServerUser['email'];
  password: IServerUser['password'];
};

export type TResponseWithError = { message: string };
