import { Request, Response } from 'express';
import { getPrisma } from "../utils/prisma";

export async function postWorkout(request: Request, response: Response){
    const prisma = await getPrisma();

    const created = await prisma.workout.create({
        data: {
            title: "Test",
            description: "Test",
            exercises: {},
        }
    }); 

    return response.status(200).send(created);
}
