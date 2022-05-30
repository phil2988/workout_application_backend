import { Router } from 'express';
import { getWorkout } from './get-workout';
import { postWorkout } from './post-workout';

export const workoutRouter = Router();

workoutRouter.get('', getWorkout);
workoutRouter.post('', postWorkout);