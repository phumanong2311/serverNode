import { Entity, Column } from 'typeorm';
import { BaseEntity } from './BaseEntity';

@Entity()
export class GenresEntity extends BaseEntity {
  @Column()
  name: string;
}
