import { Column, Entity, JoinColumn, OneToMany } from 'typeorm';
import { BaseEntity } from './base.entity';
import { ClusterEntity } from './cluster.entity';

@Entity('genres')
export class GenresEntity extends BaseEntity {
  @Column()
  name: string;

  @OneToMany(() => ClusterEntity, (cluster) => cluster.genre)
  @JoinColumn()
  clusters: ClusterEntity[];
}
