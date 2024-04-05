import { Column, Entity, JoinColumn, OneToMany } from 'typeorm';
import { BaseEntity } from './BaseEntity';
import { ClusterEntity } from './ClusterEntity';

@Entity()
export class GenresEntity extends BaseEntity {
  @Column()
  name: string;

  @OneToMany(() => ClusterEntity, (cluster) => cluster.genre)
  @JoinColumn()
  clusters: ClusterEntity[];
}
