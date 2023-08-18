import { Controller, Get, Post, Put, Delete, Param, Body, NotFoundException, Res } from '@nestjs/common';
import { EventService } from './event.service';
import { Event } from './event.entity';
import { Response } from 'express';

type deleteEvent= {
    code:number;
    message:string
}



@Controller('events')
export class EventController {
  constructor(private readonly eventService: EventService) {}

  @Post()
  async createEvent(@Body() eventData: Partial<Event>): Promise<Event> {
    return this.eventService.createEvent(eventData);
  }

  @Get(':id')
  async getEventById(@Param('id') id: number): Promise<Event> {
    try {
      return await this.eventService.getEventById(id);
    } catch (error) {
      throw new NotFoundException('Event not found');
    }
  }

  @Put(':id')
  async updateEvent(@Param('id') id: number, @Body() eventData: Partial<Event>): Promise<Event> {
    try {
      return await this.eventService.updateEvent(id, eventData);
    } catch (error) {
      throw new NotFoundException('Event not found');
    }
  }

  @Delete(':id')
  async deleteEvent(@Param('id') id: number, @Res() res: Response): Promise<deleteEvent|void>{
    try {
       let deleteData =  await this.eventService.deleteEvent(id)
       res.send(deleteData)
    } catch (error) {
         throw new NotFoundException('Event not found');
    }
  }
}
