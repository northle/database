import { PrismaClient } from '@prisma/client';
import { Service } from '@northle/core';

@Service()
export class DatabaseClient extends PrismaClient {}
