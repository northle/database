import { Service } from '../injector/decorators/service.decorator.js';
import { inject } from '../injector/functions/inject.function.js';
import { Constructor } from './interfaces/constructor.interface.js';
import { DatabaseClient } from './database-client.service.js';
import { Seeder } from './interfaces/seeder.interface.js';

@Service()
export class SeedManager {
  private readonly db = inject(DatabaseClient);

  public async seed(seeders: Constructor<Seeder>[]): Promise<void> {
    try {
      await Promise.all(seeders.map((seeder) => new seeder().run()));

      await this.db.$disconnect();
    } catch (error) {
      console.error(error);

      await this.db.$disconnect();

      process.exit(1);
    }
  }
}
