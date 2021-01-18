import { Request, Response } from 'express';
import SessionService from '../services/SessionService';

class SessionController {
  public async store(req: Request, res: Response) {
    try {
      const { email, password } = req.body;
      const sessionService = new SessionService();
      const session = await sessionService.execute(email, password);
      return res.status(201).json(session);
    } catch (err) {
      return res.status(400).json({
        erroMessage: err.message,
      });
    }
  }
}

export default new SessionController();
