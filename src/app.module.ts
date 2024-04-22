import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
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
import { DataSource } from 'typeorm';

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
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
