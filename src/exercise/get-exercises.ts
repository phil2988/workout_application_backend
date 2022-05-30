import { PrismaClient } from "@prisma/client"
import { Request, Response } from 'express';
import { getPrisma } from "../utils/prisma";

export async function getExercises(request: Request, response: Response){
    const prisma = await getPrisma();

    const exercises = await prisma.exercise.findMany();

    return response.status(200).send(exercises);
}
