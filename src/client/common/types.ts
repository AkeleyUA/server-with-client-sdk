export interface IUser {
  id: number;
  email: string;
  password: string;
}

export type TLoginBody = {
  email: IUser['email'];
  password: IUser['password'];
};

export type TLoginRespone = {
  id: IUser['id'];
  email: IUser['email'];
};
