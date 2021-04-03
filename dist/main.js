"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const index_1 = require("./client/common/index");
const cors = require("cors");
const common_1 = require("@nestjs/common");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.setGlobalPrefix(index_1.API_PREFIX);
    app.use(cors());
    app.useGlobalPipes(new common_1.ValidationPipe());
    await app.listen(index_1.PORT);
}
bootstrap();
//# sourceMappingURL=main.js.map