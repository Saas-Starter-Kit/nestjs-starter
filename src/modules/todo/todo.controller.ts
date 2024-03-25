import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';

import { TodoService } from './todo.service';
import { Todo as TodoModel } from '@prisma/client';

@Controller()
export class TodoController {
  constructor(private readonly TodoService: TodoService) {}

  @Get('todo/:id')
  async getTodoById(@Param('id') id: string): Promise<TodoModel> {
    return this.TodoService.getOneTodo({ id: Number(id) });
  }

  @Get('todos')
  async getTodos(): Promise<TodoModel[]> {
    return this.TodoService.getTodos();
  }

  @Post('todo')
  async createTodo(
    @Body() TodoData: { title: string; description: string },
  ): Promise<TodoModel> {
    const { title, description } = TodoData;
    return this.TodoService.createTodo({
      title,
      description,
    });
  }

  @Put('todo/:id')
  async updateTodo(
    @Param('id') id: string,
    @Body() TodoData: { title?: string; description?: string },
  ): Promise<TodoModel> {
    const { title, description } = TodoData;

    return this.TodoService.updateTodo({
      where: { id: Number(id) },
      data: { title, description },
    });
  }

  @Delete('todo/:id')
  async deleteTodo(@Param('id') id: string): Promise<TodoModel> {
    return this.TodoService.deleteTodo({ id: Number(id) });
  }
}
