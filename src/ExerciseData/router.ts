import { Router } from 'express';
import { getExerciseData } from './get-exerciseData';
import { postExerciseData } from './post-exerciseData';

export const exerciseDataRouter = Router();

exerciseDataRouter.get('', getExerciseData);
exerciseDataRouter.post('', postExerciseData);