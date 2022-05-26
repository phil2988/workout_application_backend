import { PrismaClient } from "@prisma/client"
import e, { Request, Response } from 'express';
import { getPrisma } from "../utils/prisma";
import { Exercise } from "../interfaces";

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
