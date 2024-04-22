import { Column, Entity, OneToOne } from 'typeorm';
import { BaseEntity } from './BaseEntity';
import { Brand } from './BrandEntity';
import { Cluster } from './ClusterEntity';

@Entity()
export class Product extends BaseEntity {
  @Column()
  name: string;

  @Column()
  quantity: number;

  @Column()
  images: string;

  @Column()
  price: number;

  @Column()
  detail: string;

  @OneToOne(() => Brand)
  brand: Brand;

  @OneToOne(() => Cluster)
  cluster: Cluster;
}
