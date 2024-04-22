import { Entity, Column } from 'typeorm';
import { BaseEntity } from './base.entity';

@Entity('brand')
export class BrandEntity extends BaseEntity {
  @Column()
  name: string;

  @Column()
  logo: string;
}
