import { AppService } from './app.service';
import { IUser, TLoginBody } from './client/common/types';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getHello(body: TLoginBody): IUser;
}
