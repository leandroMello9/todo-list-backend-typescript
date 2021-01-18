import { Request, Response } from 'express';
import CreateUserService from '../services/CreateUserService';

class UserController {
  public async store(req: Request, res: Response) {
    try {
      const { name, email, password } = req.body;
      const createUserService = new CreateUserService();
      const user = await createUserService.execute({
        email,
        name,
        password,
      });
      return res.status(201).json(user);
    } catch (err) {
      return res.status(404).json({
        messageError: err.message,
      });
    }
  }
}
export default new UserController();
