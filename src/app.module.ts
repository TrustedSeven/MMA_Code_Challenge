
require('dotenv').config()

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskModule } from './task/task.module';
// import { TaskModule } from './task/task.module';
import { FighterModule } from './fighters/fighters.module';
import { FightModule } from './fight/fight.module';
import { EventModule } from './event/event.module';
import { RankingModule } from './ranking/ranking.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: process.env.DB_USER,
      password:process.env.DB_PASS,
      database: process.env.DB_NAME,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    TaskModule,
    FighterModule,
    FightModule,
    EventModule,
    RankingModule,
  ],
})
export class AppModule {}
