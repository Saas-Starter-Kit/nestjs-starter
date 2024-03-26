//src/auth/auth.service.ts
import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';
import { JwtService } from '@nestjs/jwt';
import { AuthEntity } from './dto/auth.entity';
import * as bcrypt from 'bcrypt';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
    private userService: UsersService,
  ) {}

  async login(email: string, password: string): Promise<AuthEntity> {
    //const user = await this.prisma.user.findUnique({ where: { email: email } });
    const user = await this.userService.findByEmail(email);

    if (!user) {
      throw new NotFoundException(`No user found for email: ${email}`);
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid password');
    }

    return {
      accessToken: this.jwtService.sign({ userId: user.id }),
    };
  }

  async signup(email: string, password: string): Promise<AuthEntity> {
    const isUserExists = await this.userService.findByEmail(email);

    if (isUserExists) {
      throw new NotFoundException(`User Already Exists: ${email}`);
    }

    const user = await this.userService.create({ email, password });

    return {
      accessToken: this.jwtService.sign({ userId: user.id }),
    };
  }
}
