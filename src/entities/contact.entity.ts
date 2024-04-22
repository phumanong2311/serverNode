import { Column, Entity } from 'typeorm';
import { BaseEntity } from './base.entity';

@Entity('contact')
export class ContactEntity extends BaseEntity {
  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  phoneNumber: string;

  @Column()
  email: string;
}
