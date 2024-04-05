import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';
import { BaseEntity } from './BaseEntity';
import { ContactEntity } from './ContactEntity';

@Entity()
export class CustomerEntity extends BaseEntity {
  @OneToOne(() => ContactEntity)
  @JoinColumn()
  contact: ContactEntity;

  @Column()
  debt: number;
}
