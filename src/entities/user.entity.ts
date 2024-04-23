import { Column, Entity } from 'typeorm';
import { BaseEntity } from './base.entity';

@Entity('user')
export class UserEntity extends BaseEntity {
  @Column()
  userName: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  phoneNumber: number;

  @Column()
  isVerifiedEmail: boolean;

  @Column({ nullable: true })
  refreshToken: string;

  @Column({ default: false })
  isActive: boolean;
}
