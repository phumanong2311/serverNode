import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { BaseEntity } from './base.entity';
import { GenresEntity } from './genres.entity';

@Entity('cluster')
export class ClusterEntity extends BaseEntity {
  @Column()
  name: string;

  @ManyToOne(() => GenresEntity, (genre) => genre.clusters)
  @JoinColumn()
  genre: GenresEntity;
}
