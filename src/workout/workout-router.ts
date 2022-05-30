import { Router } from 'express';
import { getDefaultWorkout } from './get-default-workout';
import { getWorkout } from './get-workouts';
import { postWorkout } from './post-workout';

export const workoutRouter = Router();

workoutRouter.get('', getWorkout);
workoutRouter.get('/default', getDefaultWorkout);
workoutRouter.post('', postWorkout);
