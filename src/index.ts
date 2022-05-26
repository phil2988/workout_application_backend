import { PrismaClient } from '@prisma/client'
import express, { application, Router } from 'express'
import { createPrisma } from './utils/prisma';
import { getWorkout } from './workout/get-workout'
import { workoutRouter } from './workout/workoutRouter';

createPrisma();

const router = Router();
router.use('/workout', workoutRouter);

const app = express()
app.use(express.json())
app.use('/api', router)


const port = process.env.PORT || 1337;
app.listen(port, () => console.log('Serving on port ' + port));