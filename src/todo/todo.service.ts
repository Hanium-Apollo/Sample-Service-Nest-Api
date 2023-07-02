import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Todo } from './todo.entity';

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(Todo)
    private todoRepository: Repository<Todo>,
  ) {}

  async findAll(): Promise<Todo[]> {
    return this.todoRepository.find();
  }

  async findOne(id: string): Promise<Todo> {
    return this.todoRepository.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.todoRepository.delete(id);
  }

  create(todo: Todo): Promise<Todo> {
    delete todo.id;
    return this.todoRepository.save(todo);
  }

  async update(id: string, todo: Todo): Promise<Todo> {
    const toUpdate = await this.todoRepository.findOne(id);
    const updated = Object.assign(toUpdate, todo);
    return this.todoRepository.save(updated);
  }
}
