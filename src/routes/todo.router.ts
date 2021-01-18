import { Router } from 'express';
import TodoController from '../controllers/TodoController';

const router = Router();

router.get('/', TodoController.index);

router.post('/', TodoController.store);
router.delete('/:todo_id', TodoController.delete);
export default router;
