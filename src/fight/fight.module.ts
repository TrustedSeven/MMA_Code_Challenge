import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Fight } from './fight.entity';
import { FightService } from './fight.service';
import { FightsController } from './fight.controller';


@Module({
    imports: [TypeOrmModule.forFeature([Fight])],
    providers: [FightService],
    controllers: [FightsController],
})
export class FightModule {}
