import { getPrisma } from "../utils/prisma";
import e, { Request, Response } from 'express';

export async function getExerciseData(request: Request, response: Response){
    const prisma = await getPrisma();

    const workoutData = await prisma.exerciseData.findMany(); 

    return response.status(200).send(workoutData);
}
