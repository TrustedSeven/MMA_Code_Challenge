import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Fighter } from './fighters.entity';

@Injectable()
export class FighterService {
    constructor(
      @InjectRepository(Fighter)
      private readonly fighterRepository: Repository<Fighter>,
    ) {}
  
    async createFighter(fighterData: Partial<Fighter>): Promise<Fighter> {
      const newFighter = this.fighterRepository.create(fighterData);
      return await this.fighterRepository.save(newFighter);
    }
  
    async getFighterById(id: number): Promise<Fighter> {
      const fighter = await this.fighterRepository.findOne({where:{id:id}});
      if (!fighter) {
        throw new NotFoundException('Fighter not found');
      }
      return fighter;
    }
  
    async updateFighter(id: number, fighterData: Partial<Fighter>): Promise<Fighter> {
      await this.getFighterById(id); // Check if the fighter exists
      await this.fighterRepository.update(id, fighterData);
      return this.getFighterById(id);
    }
  
    async deleteFighter(id: number): Promise<void> {
      await this.getFighterById(id); // Check if the fighter exists
      await this.fighterRepository.delete(id);
    }
  }
  
