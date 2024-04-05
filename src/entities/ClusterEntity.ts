import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { BaseEntity } from './BaseEntity';
import { GenresEntity } from './GenresEntity';

@Entity()
export class ClusterEntity extends BaseEntity {
  @Column()
  name: string;

  @ManyToOne(() => GenresEntity, (genre) => genre.clusters)
  @JoinColumn()
  genre: GenresEntity;
}
