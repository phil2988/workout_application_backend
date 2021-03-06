import { getPrisma } from "../utils/prisma";
import { Request, Response } from 'express';

export async function postExerciseData(request: Request, response: Response){
    const prisma = await getPrisma();

    const created = await prisma.exerciseData.create({
        data: {
            exerciseId: request.body.exercise.id,
            reps: request.body.reps,
            weight: request.body.weight,
            sets: request.body.sets
        }
    }); 

    return response.status(200).send(created);
}
