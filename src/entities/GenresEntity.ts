import { Column, Entity, JoinColumn, OneToMany } from 'typeorm';
import { BaseEntity } from './BaseEntity';
import { Cluster } from './ClusterEntity';

@Entity()
export class Genres extends BaseEntity {
  @Column()
  name: string;

  @OneToMany(() => Cluster, (cluster) => cluster.genre)
  @JoinColumn()
  clusters: Cluster[];
}
