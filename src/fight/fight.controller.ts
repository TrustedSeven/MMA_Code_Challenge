import { Controller, Get, Post, Put, Delete, Param, Body, NotFoundException, Res } from '@nestjs/common';
import { Response } from 'express';
import { FighterService } from 'src/fighters/fighters.service';
import { FightService } from './fight.service';
import { Fight } from './fight.entity';

@Controller('fights')
export class FightsController{
constructor(private readonly fightService:FightService) {}

@Post()
async createFight(@Body() fightData:Partial<Fight>) : Promise<Fight>{
    console.log('api++++++++++22 call')
    return this.fightService.createFight(fightData)
}

@Get(':id')
async getFightById(@Param('id') id:number, @Res() res: Response):Promise<void>{
    try{
         let result = await this.fightService.getFightById(id,res)
         console.log('data++++++++++++++++=',result)
    }catch(error){
      throw new NotFoundException('Event not found');
    }
}


}