export interface IUser {
    id: number;
    email: string;
    password: string;
}
export declare type TLoginBody = {
    email: IUser['email'];
    password: IUser['password'];
};
export declare type TLoginRespone = {
    id: IUser['id'];
    email: IUser['email'];
};
