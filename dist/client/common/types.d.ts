export interface IUser {
    id: number;
    email: string;
}
export interface IServerUser extends IUser {
    password: string;
}
export declare type TLoginBody = {
    email: IServerUser['email'];
    password: IServerUser['password'];
};
export declare type TResponseWithError = {
    message: string;
};
