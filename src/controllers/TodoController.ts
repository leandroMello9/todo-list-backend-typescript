import { Request, Response } from 'express';
import * as Yup from 'yup';
import CreateTodoService from '../services/CreateTodoService';
import ListenTodoService from '../services/ListenTodoService';
import DeleteTodoService from '../services/DeleteTodoService';

class TodoController {
  public async store(req: Request, res: Response) {
    try {
      const schema = Yup.object().shape({
        description: Yup.string().required(),
        title: Yup.string().required(),
        user_id: Yup.string().required(),
        status: Yup.string().required(),
      });
      await schema.validate(req.body, {
        abortEarly: true,
      });
      const { description, title, user_id, status } = req.body;

      const createUserService = new CreateTodoService();

      const todo = await createUserService.execute({
        description,
        title,
        user_id,
        status,
      });
      return res.status(201).json(todo);
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        return res.status(422).json({
          messageError: 'Schema validate error, verify datas',
        });
      }
      return res.status(404).json({
        messageError: err.message,
      });
    }
  }

  public async index(req: Request, res: Response) {
    const user_id = req.userId;
    const listenService = new ListenTodoService();

    const todos = await listenService.execute(user_id);

    return res.status(200).json(todos);
  }

  public async delete(req: Request, res: Response) {
    try {
      const { todo_id } = req.params;
      const deleteService = new DeleteTodoService();
      const todo = await deleteService.execute(todo_id);
      return res.status(200).json(todo);
    } catch (err) {
      return res.status(404).json({
        error:
          'Erro ao deletar todo verifique se o todo com o id informado existe..',
      });
    }
  }
}
export default new TodoController();
