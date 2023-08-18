import { Body, Controller, Delete, Get, NotFoundException, Param, Post, Put } from '@nestjs/common';
import { FighterService } from './fighters.service';
import { Fighter } from './fighters.entity';


@Controller('fighters')
export class FighterController {
  constructor(private readonly fighterService: FighterService) { }

  @Post()
  async createFighter(@Body() fighterData: Partial<Fighter>): Promise<Fighter> {
    return this.fighterService.createFighter(fighterData);
  }

  @Get(':id')
  async getFighterById(@Param('id') id: any): Promise<Fighter> {
    try {
      return await this.fighterService.getFighterById(id);
    } catch (error) {
      throw new NotFoundException('Fighter not found');
    }
  }

  @Put(':id')
  async updateFighter(@Param('id') id: number, @Body() fighterData: Partial<Fighter>): Promise<Fighter> {
    try {
      return await this.fighterService.updateFighter(id, fighterData);
    } catch (error) {
      throw new NotFoundException('Fighter not found');
    }
  }

  @Delete(':id')
  async deleteFighter(@Param('id') id: number): Promise<void> {
    try {
      await this.fighterService.deleteFighter(id);
    } catch (error) {
      throw new NotFoundException('Fighter not found');
    }
  }
}

