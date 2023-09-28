// src/todo/todo.controller.ts

import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { TodoService } from './todo.service';
import { Todo } from './todo.entity';

@Controller('todos')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get()
  async findAll(): Promise<Todo[]> {
    return this.todoService.findAll();
  }

  @Post()
  async create(@Body() todoData: Todo): Promise<Todo> {
    return this.todoService.create(todoData);
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Todo | undefined> {
    return this.todoService.findOne(+id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() todoData: Todo): Promise<Todo | undefined> {
    return this.todoService.update(+id, todoData);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    return this.todoService.remove(+id);
  }
}
