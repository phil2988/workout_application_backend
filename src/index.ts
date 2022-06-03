import express, { Router } from 'express'
import { exerciseDataRouter } from './ExerciseData/router';
import { createPrisma } from './utils/prisma';
import { workoutRouter } from './workout/router';

createPrisma();

const router = Router();
router.use('/workout', workoutRouter);
router.use('/exerciseData', exerciseDataRouter);

const app = express()
app.use(express.json())
app.use('/api', router)

const port = process.env.PORT || 1337;
app.listen(port, () => console.log('Serving on port ' + port));