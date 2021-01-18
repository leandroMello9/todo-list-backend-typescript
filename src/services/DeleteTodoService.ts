import { TodoDocument } from '../models/Todo';
import TodoRepository from '../repositories/implementions/TodoRepository';

class DeleteTodoService {
  public async execute(todo_id: string): Promise<TodoDocument | null> {
    try {
      const todoRepository = new TodoRepository();

      const todo = await todoRepository.delete(todo_id);

      return todo;
    } catch (err) {
      throw new Error(err.message);
    }
  }
}

export default DeleteTodoService;
