import { Column, Entity, OneToOne } from 'typeorm';
import { BaseEntity } from './base.entity';
import { BrandEntity } from './brand.entity';
import { ClusterEntity } from './cluster.entity';

@Entity('product')
export class ProductEntity extends BaseEntity {
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

  @OneToOne(() => BrandEntity)
  brand: BrandEntity;

  @OneToOne(() => ClusterEntity)
  cluster: ClusterEntity;
}
