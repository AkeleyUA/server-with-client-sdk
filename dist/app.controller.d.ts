import { AppService } from './app.service';
import { TLoginBody, TLoginRespone } from './client/common/types';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getHello(body: TLoginBody): TLoginRespone;
}
