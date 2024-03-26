import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';

import { TodoService } from './todo.service';
import { Todo as TodoModel } from '@prisma/client';

@Controller()
export class TodoController {
  constructor(private readonly TodoService: TodoService) {}

  @Get('todo/:id')
  async getTodoById(@Param('id', ParseIntPipe) id: number): Promise<TodoModel> {
    return this.TodoService.getOneTodo({ id });
  }

  @Get('todos')
  async getTodos(): Promise<TodoModel[]> {
    return this.TodoService.getTodos();
  }

  @Post('todo')
  async createTodo(@Body() TodoData: CreateTodoDto): Promise<TodoModel> {
    const { title, description } = TodoData;
    return this.TodoService.createTodo({
      title,
      description,
    });
  }

  @Put('todo/:id')
  async updateTodo(
    @Param('id', ParseIntPipe) id: number,
    @Body() TodoData: CreateTodoDto,
  ): Promise<TodoModel> {
    const { title, description } = TodoData;

    return this.TodoService.updateTodo({
      where: { id },
      data: { title, description },
    });
  }

  @Delete('todo/:id')
  async deleteTodo(@Param('id', ParseIntPipe) id: number): Promise<TodoModel> {
    return this.TodoService.deleteTodo({ id });
  }
}
