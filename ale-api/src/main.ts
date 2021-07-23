import { NestFactory } from '@nestjs/core';
import { BaseModule } from './base.module';

declare const module: any;

async function bootstrap() {
  const app = await NestFactory.create(BaseModule);
  app.enableCors();
  await app.listen(3000);
  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}
bootstrap();
