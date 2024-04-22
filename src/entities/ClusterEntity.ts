import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { BaseEntity } from './BaseEntity';
import { Genres } from './GenresEntity';

@Entity()
export class Cluster extends BaseEntity {
  @Column()
  name: string;

  @ManyToOne(() => Genres, (genre) => genre.clusters)
  @JoinColumn()
  genre: Genres;
}
