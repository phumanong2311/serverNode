import { MikroORM } from '@mikro-orm/postgresql'; // or any other SQL driver package

const orm = await MikroORM.init({
  entities: [], // path to your JS entities (dist), relative to `baseDir`
  dbName: 'product-management',
});
