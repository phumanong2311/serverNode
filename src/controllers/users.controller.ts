import { Controller, Get } from '@nestjs/common';
import { UserEntity } from 'src/entities';
import { UsersService } from 'src/services';

@Controller()
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async getAlls(): Promise<UserEntity[]> {
    return this.usersService.findAll();
  }
}
