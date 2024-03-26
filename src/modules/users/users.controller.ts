// src/users/users.controller.ts
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
  UseGuards,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/modules/auth/jwt.auth-guard';

@Controller('users')
@ApiTags('users')
export class UsersController {
  constructor(public usersService: UsersService) {}

  //@Post()
  //async create(@Body() createUserDto) {
  //  return await this.usersService.create(createUserDto);
  //}

  //@Get(':id')
  //@UseGuards(JwtAuthGuard)
  //async findOne(@Param('id', ParseIntPipe) id: number) {
  //  return await this.usersService.findOne(id);
  //}
}
