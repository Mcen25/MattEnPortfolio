import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { FormModule } from './form/form.module';
import * as dotenv from 'dotenv';
import { Form } from './form/entities/form.entity';

dotenv.config();

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.POST_HOST,
      port: 5432,
      username: process.env.POST_USER,
      password: process.env.POST_PASSWORD,
      database: process.env.POST_DATABASE,
      entities: [Form],
      synchronize: true,
      logging: true,
    }),
    UserModule,
    FormModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
