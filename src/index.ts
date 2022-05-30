import { PrismaClient } from '@prisma/client'
import express, { application, Router } from 'express'
import { exerciseRouter } from './exercise/exercise-router';
import { createPrisma } from './utils/prisma';
import { getWorkout } from './workout/get-workouts'
import { workoutRouter } from './workout/workout-router';

createPrisma();

const router = Router();
router.use('/workout', workoutRouter);
router.use('/exercise', exerciseRouter);

const app = express()
app.use(express.json())
app.use('/api', router)

const port = process.env.PORT || 1337;
app.listen(port, () => console.log('Serving on port ' + port));