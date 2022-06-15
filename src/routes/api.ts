import { Router } from 'express';

import * as TodoController from '../controllers/todo.controller';

const router = Router();

//home
router.get('/todo', TodoController.all);
//add
router.post('/todo', TodoController.add);
//update
router.put('/todo/:id', TodoController.update);
//delete
router.delete('/todo/:id', TodoController.remove);



export default router;