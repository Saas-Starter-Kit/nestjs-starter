import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';
import { Todo, Prisma } from '@prisma/client';

@Injectable()
export class TodoService {
  constructor(private prisma: PrismaService) {}

  async getOneTodo(
    TodoWhereUniqueInput: Prisma.TodoWhereUniqueInput,
  ): Promise<Todo | null> {
    const res = await this.prisma.todo.findUnique({
      where: TodoWhereUniqueInput,
    });

    return res;
  }

  async getTodos(): Promise<Todo[]> {
    const res = await this.prisma.todo.findMany();

    return res;
  }

  async createTodo(data: Prisma.TodoCreateInput): Promise<Todo> {
    return this.prisma.todo.create({
      data,
    });
  }

  async updateTodo(params: {
    where: Prisma.TodoWhereUniqueInput;
    data: Prisma.TodoUpdateInput;
  }): Promise<Todo> {
    const { data, where } = params;
    return this.prisma.todo.update({
      data,
      where,
    });
  }

  async deleteTodo(where: Prisma.TodoWhereUniqueInput): Promise<Todo> {
    return this.prisma.todo.delete({
      where,
    });
  }
}
