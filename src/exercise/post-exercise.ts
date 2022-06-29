import { Request, Response } from 'express';
import { getPrisma } from "../utils/prisma";

export async function postExercises(request: Request, response: Response){
    const prisma = await getPrisma();

    const done = await prisma.exercise.create({data: {
        title: request.body.title,
        description: request.body.description,
        category: request.body.category,
        parentExercise: request.body.parentExercise,
        images: request.body.images
    }});

    if(done)
      return response.status(200).send(done);
    
    return response.status(400).send(done);
}
