import { Injectable } from '@nestjs/common';
import { Factory, Seeder } from 'typeorm-seeding';

@Injectable()
export class SeederService {
  constructor(private connection: any) {}
  async seed() {
    await this.connection.createQueryBuilder().delete().from('user').execute();
    const seeder = new Seeder(); // Use the Seeder class as a value
    return await new seeder.run(Factory, this.connection);
  }
}
