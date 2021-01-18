import { TodoDocument } from '../models/Todo';
import TodoRepository from '../repositories/implementions/TodoRepository';

class ListenTodoService {
  public async execute(user_id: string): Promise<TodoDocument[] | null> {
    try {
      const todoRepository = new TodoRepository();

      const todos = await todoRepository.listen(user_id);

      return todos;
    } catch (err) {
      throw new Error(err.message);
    }
  }
}

export default ListenTodoService;
