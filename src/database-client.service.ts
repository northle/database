import { Service } from '@northle/core';
import { PrismaClient } from '@prisma/client';

@Service()
export class DatabaseClient extends PrismaClient {}
