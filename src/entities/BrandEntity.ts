import { Entity, Column } from 'typeorm';
import { BaseEntity } from './BaseEntity';

@Entity()
export class BrandEntity extends BaseEntity {
  @Column()
  name: string;

  @Column()
  logo: string;
}
