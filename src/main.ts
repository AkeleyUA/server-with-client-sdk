import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { API_PREFIX, PORT } from './client/common/index';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix(API_PREFIX);
  await app.listen(PORT);
}
bootstrap();
