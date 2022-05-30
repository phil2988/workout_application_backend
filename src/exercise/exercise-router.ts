import { Router } from 'express';
import { getExercises } from './get-exercises';


export const exerciseRouter = Router();

exerciseRouter.get('', getExercises);
