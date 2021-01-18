import { Router, Request, Response } from 'express';
import createUserController from '../controllers/UserController';

const router = Router();

router.get('/', (req: Request, res: Response) => {
  return res.status(200).json({
    message: 'Routes users',
  });
});

router.post('/', createUserController.store);

export default router;
