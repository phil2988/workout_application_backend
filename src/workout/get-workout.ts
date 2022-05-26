import { PrismaClient } from "@prisma/client"
import { Request, Response } from 'express';
import { getPrisma } from "../utils/prisma";

export async function getWorkout(request: Request, response: Response){
    const prisma = await getPrisma();

    const workout = await prisma.workout.findMany();

    return response.status(200).send(workout);
}
