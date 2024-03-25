import { Module } from '@nestjs/common';
import { HealthModule } from './modules/health/health.module';
import { TodoModule } from './modules/todo/todo.module';

@Module({
  imports: [HealthModule, TodoModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
