import { PrismaClient } from '../../app-template/node_modules/@prisma/client/index.js';
import { Service } from '../injector/decorators/service.decorator.js';

@Service()
export class DatabaseClient extends PrismaClient {}
