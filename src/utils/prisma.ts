import { PrismaClient } from '@prisma/client';

let prisma: PrismaClient;

export function createPrisma(): void {
  if (prisma === undefined) {
    console.log('Im running');
    prisma = new PrismaClient();
  }
}

export async function getPrisma(): Promise<PrismaClient> {
  if (prisma === undefined) {
    createPrisma();
    return getPrisma();
  } else {
    return prisma;
  }
}