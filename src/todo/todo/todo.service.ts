// src/todo/todo.service.ts

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Todo } from './todo.entity';

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(Todo)
    private readonly todoRepository: Repository<Todo>,
  ) {}

  async findAll(): Promise<Todo[]> {
    return this.todoRepository.find();
  }

  async create(todoData: Todo): Promise<Todo> {
    return this.todoRepository.save(todoData);
  }

  async findOne(id: number): Promise<Todo | undefined> {
    return this.todoRepository.findOneById(id);
  }

  async update(id: number, todoData: Todo): Promise<Todo | undefined> {
    await this.todoRepository.update(id, todoData);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.todoRepository.delete(id);
  }
}
