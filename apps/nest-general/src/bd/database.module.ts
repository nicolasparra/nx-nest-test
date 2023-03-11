import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { environmentsEnum } from '../configs/constants/environments.enum';
import { Post } from '../app/posts/entities/post.entity';
import { User } from '../app/users/user.entity';
import { Address } from '../app/users/address.entity';
import { Category } from '../app/categories/category.entity';

const ENTITY_PATH = __dirname + '../**/*.entity{.ts,.js}';
const SYNCHRONIZE_BD = true;
@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: environmentsEnum.TYPE_BD,
        host: configService.get(environmentsEnum.POSTGRES_HOST),
        port: configService.get(environmentsEnum.POSTGRES_PORT),
        username: configService.get(environmentsEnum.POSTGRES_USER),
        password: configService.get(environmentsEnum.POSTGRES_PASSWORD),
        database: configService.get(environmentsEnum.POSTGRES_DB),
        entities: [ENTITY_PATH, Post, User, Address, Category],
        synchronize: SYNCHRONIZE_BD,
      }),
    }),
  ],
})
export class DatabaseModule {}
