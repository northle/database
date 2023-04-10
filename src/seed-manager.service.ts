import { Constructor, inject, Service } from '@northle/core';
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
