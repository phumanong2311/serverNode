import { Entity, Column } from 'typeorm';
import { BaseEntity } from './BaseEntity';

@Entity()
export class Brand extends BaseEntity {
  @Column()
  name: string;

  @Column()
  logo: string;
}
