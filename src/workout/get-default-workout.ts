import { Request, Response } from 'express';
import { getPrisma } from "../utils/prisma";

export async function getDefaultWorkout(request: Request, response: Response){
    const prisma = await getPrisma();

    const result = await prisma.workout.findFirst({where: {default: true}, include: {exercises: true}});

    return response.status(200).send(result);
}
