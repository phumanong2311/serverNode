import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';
import { BaseEntity } from './base.entity';
import { ContactEntity } from './contact.entity';

@Entity('customer')
export class CustomerEntity extends BaseEntity {
  @OneToOne(() => ContactEntity)
  @JoinColumn()
  contact: ContactEntity;

  @Column()
  debt: number;
}
