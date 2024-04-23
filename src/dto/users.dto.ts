export class UsersDto {
  id: number;
  userName: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  phoneNumber: number;
  isVerifiedEmail: boolean;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export class CreateUserDto {
  userName: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  phoneNumber: number;
}

export class UpdateUserDto {
  email?: string;
  password?: string;
  firstName?: string;
  lastName?: string;
  phoneNumber?: number;
  updateTime?: Date;
}
