import { PrismaClient } from "@prisma/client"
import { Request, Response } from 'express';
import { getPrisma } from "../utils/prisma";

export async function getWorkout(request: Request, response: Response){
    const prisma = await getPrisma();

    const workouts = await prisma.workout.findMany({include: {exercises: true}});

    return response.status(200).send(workouts);
}
