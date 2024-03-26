import { Body, Controller, Post, Get, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiTags } from '@nestjs/swagger';
import { LoginDto } from './dto/login.dto';
import { JwtAuthGuard } from './jwt.auth-guard';

@Controller('auth')
@ApiTags('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  login(@Body() { email, password }: LoginDto) {
    return this.authService.login(email, password);
  }

  @Post('signup')
  sigup(@Body() { email, password }: LoginDto) {
    return this.authService.signup(email, password);
  }

  @Get('protected')
  @UseGuards(JwtAuthGuard)
  protected() {
    return 'Accessed Protected Route';
  }
}
