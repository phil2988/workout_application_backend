import { Prisma, PrismaClient } from '@prisma/client';

let prisma: PrismaClient<Prisma.PrismaClientOptions, never, Prisma.RejectOnNotFound | Prisma.RejectPerOperation> | PromiseLike<PrismaClient<Prisma.PrismaClientOptions, never, Prisma.RejectOnNotFound | Prisma.RejectPerOperation>>;

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