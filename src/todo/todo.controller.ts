import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Delete,
  Put,
} from '@nestjs/common';
import { TodoService } from './todo.service';
import { Todo } from './todo.entity';

@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get()
  getAll(): Promise<Todo[]> {
    return this.todoService.findAll();
  }

  @Get(':id')
  getOne(@Param('id') id: string): Promise<Todo> {
    return this.todoService.findOne(id);
  }

  @Post()
  create(@Body() todo: Todo): Promise<Todo> {
    return this.todoService.create(todo);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.todoService.remove(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() todo: Todo): Promise<Todo> {
    return this.todoService.update(id, todo);
  }
}
