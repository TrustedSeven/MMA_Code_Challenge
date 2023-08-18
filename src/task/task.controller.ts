import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { Task } from './task.entity';
import { TaskService } from './task.service';

@Controller('tasks')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Get()
  findAll(): Promise<Task[]> {
    return this.taskService.findAll();
  }

  @Post()
  create(@Body() task: Task): Promise<Task> {
    return this.taskService.create(task);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() task: Task): Promise<Task> {
    return this.taskService.update(id, task);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.taskService.remove(id);
  }
}
