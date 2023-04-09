import { inject } from '../../injector/functions/inject.function.js';
import { Constructor } from '../../utils/interfaces/constructor.interface.js';
import { Seeder } from '../interfaces/seeder.interface.js';
import { SeedManager } from '../seed-manager.service.js';

export async function seed(seeders: Constructor<Seeder>[]): Promise<void> {
  await inject(SeedManager).seed(seeders);
}
