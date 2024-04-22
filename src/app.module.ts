import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {
  Brand,
  Cluster,
  Contact,
  Customer,
  Genres,
  Product,
  User,
} from './entities';
import { SeederService } from './seeder/seeder.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'password',
      database: 'product_management',
      entities: [Brand, Cluster, Contact, Customer, Genres, Product, User],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService, SeederService],
})
export class AppModule {}
