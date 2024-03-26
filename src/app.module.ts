import { Module, HttpStatus } from '@nestjs/common';
import { HealthModule } from './modules/health/health.module';
import { TodoModule } from './modules/todo/todo.module';
import { PrismaModule } from 'nestjs-prisma';
import { providePrismaClientExceptionFilter } from 'nestjs-prisma';
import { AuthModule } from './modules/auth/auth.module';
import { UsersModule } from './modules/users/users.module';
import { JwtStrategy } from './modules/auth/jwt.strategy';

@Module({
  imports: [
    HealthModule,
    TodoModule,
    PrismaModule.forRoot({
      isGlobal: true,
    }),
    AuthModule,
    UsersModule,
  ],
  controllers: [],
  providers: [providePrismaClientExceptionFilter(), JwtStrategy],
})
export class AppModule {}
