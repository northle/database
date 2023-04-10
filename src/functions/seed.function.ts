import { Constructor, inject } from '@northle/core';
import { Seeder } from '../interfaces/seeder.interface.js';
import { SeedManager } from '../seed-manager.service.js';

export async function seed(seeders: Constructor<Seeder>[]): Promise<void> {
  await inject(SeedManager).seed(seeders);
}
