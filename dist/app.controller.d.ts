import { AppService } from './app.service';
import { IUser } from './client/common/types';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getHello(): IUser;
}
