import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';
import { BaseEntity } from './BaseEntity';
import { Contact } from './ContactEntity';

@Entity()
export class Customer extends BaseEntity {
  @OneToOne(() => Contact)
  @JoinColumn()
  contact: Contact;

  @Column()
  debt: number;
}
