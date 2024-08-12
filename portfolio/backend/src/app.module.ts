import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FormModule } from './form/form.module';
import { Form } from './form/entities/form.entity';
import { HttpAdapterHost } from '@nestjs/core';
import * as dotenv from 'dotenv';
dotenv.config();

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../..', 'frontend/dist'),
    }),
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
    FormModule,
  ],
  controllers: [AppController],
  providers: [AppService, HttpAdapterHost],
})
export class AppModule {}
