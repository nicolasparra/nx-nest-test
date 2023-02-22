import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PostsModule } from './posts/posts.module';
import * as Joi from '@hapi/joi';
import { environmentsValidations } from '../configs/environments-validation';
import { DatabaseModule } from '../bd/database.module';
import environments from '../configs/environments';
import { AuthenticationModule } from '../authentication/authentication.module';
import { ResponseWithOKInterceptor } from '../shared/interceptors/responseOk.interceptor';
import { APP_INTERCEPTOR } from '@nestjs/core';

@Module({
  imports: [
    PostsModule,
    ConfigModule.forRoot({
      load: [environments],
      validationSchema: Joi.object(environmentsValidations),
    }),
    DatabaseModule,
    AuthenticationModule,
  ],
  controllers: [],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: ResponseWithOKInterceptor,
    },
  ],
})
export class AppModule {}
