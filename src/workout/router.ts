import { Router } from 'express';
import { getDefaultWorkout } from './get-default-workout';
import { getWorkout } from './get-workouts';
import { postWorkout } from './post-workout';

export const workoutRouter = Router();

workoutRouter.get('/default', getDefaultWorkout);
workoutRouter.get('', getWorkout);
workoutRouter.post('', postWorkout);