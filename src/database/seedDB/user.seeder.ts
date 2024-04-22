import { Factory, Seeder } from 'typeorm-seeding';
import { User } from '../../entities';

export default class CreateUsers implements Seeder {
  public async run(factory: Factory): Promise<any> {
    await factory(User)().create;
  }
}
