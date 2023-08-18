import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Event } from './event.entity';


type deleteEvent = {
    code: number;
    message: string
}

@Injectable()
export class EventService {
    constructor(
        @InjectRepository(Event)
        private readonly eventRepository: Repository<Event>,
    ) { }

    async createEvent(eventData: Partial<Event>): Promise<Event> {
        const newEvent = this.eventRepository.create(eventData);
        return await this.eventRepository.save(newEvent);
    }

    async getEventById(id: number): Promise<Event> {
        const event = await this.eventRepository.findOne({ where: { id: id } });
        if (!event) {
            throw new NotFoundException('Event not found');
        }
        return event;
    }

    async updateEvent(id: number, eventData: Partial<Event>): Promise<Event> {
        await this.getEventById(id); // Check if the event exists
        await this.eventRepository.update(id, eventData);
        return this.getEventById(id);
    }

    async deleteEvent(id: number): Promise<deleteEvent> {
        await this.getEventById(id); // Check if the event exists
        let event = await this.eventRepository.delete(id)
            .then((res) => {
                return { code: 200, message: "deleted" }
            })
        return event
    }
}
