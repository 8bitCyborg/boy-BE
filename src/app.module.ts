import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ScribblesModule } from './scribbles/scribbles.module';
import { join } from 'path';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      host: process.env.DB_HOST,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      url: process.env.DB_URL,
      entities: [join(__dirname, '**/**.entity{.ts,.js}')],
      synchronize: process.env.NODE_ENV === 'local' ? true : false,
    }),
    ScribblesModule,
  ],
  controllers: [],
  providers: [],
})

export class AppModule {}
