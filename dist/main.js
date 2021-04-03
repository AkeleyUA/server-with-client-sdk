"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const index_1 = require("./client/common/index");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.setGlobalPrefix(index_1.API_PREFIX);
    await app.listen(index_1.PORT);
}
bootstrap();
//# sourceMappingURL=main.js.map