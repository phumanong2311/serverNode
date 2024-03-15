import { MikroORM } from '@mikro-orm/postgresql'; // or any other SQL driver package

const orm = await MikroORM.init({
  entities: ['./dist/entities'], // path to your JS entities (dist), relative to `baseDir`
  dbName: 'my-db-name',
});
console.log(orm.em); // access EntityManager via `em` property