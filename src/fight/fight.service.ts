import { Injectable, NotFoundException, Res } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Fighter } from '../fighters/fighters.entity';
import { Event } from 'src/event/event.entity';
import { Fight } from './fight.entity';
import { Response } from 'express';


@Injectable()
export class FightService {
    constructor(
        @InjectRepository(Fight) private fightRepo: Repository<Fight>,
    ) { }

    async createFight(fightData: Partial<Fight>): Promise<Fight> {
        console.log('api++++++++++ call')
        const newEvent = this.fightRepo.create(fightData);
        return await this.fightRepo.save(newEvent);
    }

    async getFightById(id: any, @Res() res: Response): Promise<void> {
        const fight = await this.fightRepo.findOne(id)
        if (!fight) {
            res.send({
                code:201,
                message:"Unable to get the fight"
            })
        } else {
           res.send({
            code:200,
            message:"Success",
            data:fight
           })
        }
    }





}





