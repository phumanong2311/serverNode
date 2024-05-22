import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';
import { CreateUserDto, UpdateUserDto } from 'src/dto/users.dto';
import { UserEntity } from 'src/entities';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private usersRepository: Repository<UserEntity>,
  ) {}

  findAll() {
    return this.usersRepository.find();
  }

  findOne(id: number) {
    return this.usersRepository.findOneBy({ id });
  }

  async create(createUserDto: CreateUserDto) {
    const user = new UserEntity();
    user.userName = createUserDto.userName;
    user.email = createUserDto.email;
    user.password = await bcrypt.hash(createUserDto.password, 10);
    user.firstName = createUserDto.firstName;
    user.lastName = createUserDto.lastName;
    user.phoneNumber = createUserDto.phoneNumber;
    user.isVerifiedEmail = false;
    user.isActive = false;
    user.created_time = new Date();
    return this.usersRepository.save(user);
  }

  async update(id: number, updateUserDto: Partial<UpdateUserDto>) {
    const user = await this.usersRepository.findOne({ where: { id } });
    if (!user) {
      return null;
    } else {
      user.updated_time = new Date();
      const userUpdate = this.usersRepository.merge(user, updateUserDto);
      return this.usersRepository.save(userUpdate);
    }
  }

  async delete(id: number): Promise<void> {
    await this.usersRepository.delete(id);
  }
}
