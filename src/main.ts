import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { API_PREFIX, PORT } from './client/common/index';
import * as cors from 'cors';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix(API_PREFIX);
  app.use(cors());
  await app.listen(PORT);
}
bootstrap();
