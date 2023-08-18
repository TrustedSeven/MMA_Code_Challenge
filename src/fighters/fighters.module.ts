import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Fighter } from './fighters.entity';
import { FighterService } from './fighters.service';
import { FighterController } from './fighters.controller';

console.log('fighter module')

@Module({
  imports: [TypeOrmModule.forFeature([Fighter])],
  providers: [FighterService],
  controllers: [FighterController],
})
export class FighterModule {}
