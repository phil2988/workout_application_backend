import { Router } from 'express';
import { getWorkout } from './get-workouts';
import { postWorkout } from './post-workout';

export const workoutRouter = Router();

workoutRouter.get('', getWorkout);
workoutRouter.post('', postWorkout);