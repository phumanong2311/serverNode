import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  created_time: Date;

  @Column()
  updated_time: Date;
}
