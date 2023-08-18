import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from './task.entity';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(Task)
    private taskRepository: Repository<Task>,
  ) {}

  async findAll(): Promise<Task[]> {
    return this.taskRepository.find();
  }

  async create(task: Task): Promise<Task> {
    return this.taskRepository.save(task);
  }

  async update(id: any, task: Task): Promise<Task> {
    await this.taskRepository.update(id, task);
    return this.taskRepository.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.taskRepository.delete(id);
  }
}
