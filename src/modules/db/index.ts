import { PrismaClient } from '@prisma/client';
import { nanoid } from 'nanoid';

export { User, SignUpRequest } from '@prisma/client';

const db = new PrismaClient({ log: ['error', 'info', 'query', 'warn'] });
export default db;

export const genId = () => nanoid(16);
