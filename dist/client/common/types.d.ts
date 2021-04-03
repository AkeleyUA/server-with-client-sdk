export interface IUser {
    id: number;
    email: string;
}
export interface IServerUser extends IUser {
    password: string;
}
export declare class TLoginBody {
    email: IServerUser['email'];
    password: IServerUser['password'];
}
export declare type TResponseWithError = {
    message: string;
};
