import { Module } from '@nestjs/common';
import { TodoService } from './todo.service';
import { TodoController } from './todo.controller';

@Module({
  imports: [],
  controllers: [TodoController],
  providers: [TodoService],
})
export class TodoModule {}
