import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {
  BrandEntity,
  ClusterEntity,
  ContactEntity,
  CustomerEntity,
  GenresEntity,
  ProductEntity,
  UserEntity,
} from './entities';
import { UsersController } from './controllers';
import { UsersService } from './services';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'password',
      database: 'product_management',
      entities: [
        BrandEntity,
        ClusterEntity,
        ContactEntity,
        CustomerEntity,
        GenresEntity,
        ProductEntity,
        UserEntity,
      ],
      synchronize: true,
      autoLoadEntities: false,
    }),
    TypeOrmModule.forFeature([UserEntity]),
  ],
  controllers: [AppController, UsersController],
  providers: [AppService, UsersService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
