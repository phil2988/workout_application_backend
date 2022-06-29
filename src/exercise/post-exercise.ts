import { Request, Response } from 'express';
import { getPrisma } from "../utils/prisma";

export async function postExercises(request: Request, response: Response){
    const prisma = await getPrisma();

    const done = await prisma.exercise.create({data: request.body});

    if(done)
      return response.status(200);
    
    return response.status(400);
}
