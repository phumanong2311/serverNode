import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Res,
} from '@nestjs/common';
import { Response } from 'express';
import { CreateUserDto, UpdateUserDto } from 'src/dto/users.dto';
import { UserEntity } from 'src/entities';
import { UsersService } from 'src/services';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async getAlls(): Promise<UserEntity[]> {
    return this.usersService.findAll();
  }

  @Post()
  async create(
    @Body() createUserDto: CreateUserDto,
    @Res() res: Response,
  ): Promise<Response> {
    const user = await this.usersService.findAll();
    const isExit = user.find(
      (user) =>
        user.email === createUserDto.email ||
        user.userName === createUserDto.userName,
    );
    if (!isExit) {
      const newUser = await this.usersService.create(createUserDto);
      return res.json({
        status: 201,
        message: 'User created suceessfully',
        data: newUser,
      });
    } else {
      return res.status(400).json({
        status: 400,
        message: 'User already exists',
      });
    }
  }

  @Patch(':userId')
  async update(
    @Param('userId') userId: number,
    @Body() updateUserDto: UpdateUserDto,
    @Res() res: Response,
  ): Promise<Response> {
    const user = await this.usersService.findOne(userId);
    if (user) {
      const updateUser = await this.usersService.update(userId, updateUserDto);
      return res.json({
        status: 200,
        message: 'User updated successfully',
        data: updateUser,
      });
    } else {
      return res.status(400).json({
        status: 400,
        message: 'User not found',
      });
    }
  }

  @Delete(':userId')
  async delete(
    @Param('userId') userId: number,
    @Res() res: Response,
  ): Promise<Response> {
    const user = await this.usersService.findOne(userId);
    if (user) {
      await this.usersService.delete(userId);
      return res.json({
        status: 200,
        message: 'User deleted successfully',
      });
    } else {
      return res.status(400).json({
        status: 400,
        message: 'User not found',
      });
    }
  }
}
