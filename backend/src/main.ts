import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: {
      origin: 'http://localhost:3000', // Allow requests from this origin
      credentials: true, // Allow credentials (cookies, authorization headers, etc.)
    },
  });

  await app.listen(4000);
}
bootstrap();
