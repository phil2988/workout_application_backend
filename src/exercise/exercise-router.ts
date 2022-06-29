import { Router } from 'express';
import { getExercises } from './get-exercises';
import { postExercises } from './post-exercise';


export const exerciseRouter = Router();

exerciseRouter.get('', getExercises);
exerciseRouter.post('', postExercises);
