import { TodoSchema, TodoDocument } from '../../models/Todo';
import { ITodoRepository } from '../ITodoRepository';
import ICreateTodoDTO from '../../services/ICreateTodoDTO';

class TodoRepository implements ITodoRepository {
  async create({
    description,
    title,
    user_id,
    status,
  }: ICreateTodoDTO): Promise<TodoDocument | Error> {
    const todo = await TodoSchema.create({
      description,
      title,
      user_id,
      status,
    });
    return todo;
  }

  async listen(user_id: string): Promise<TodoDocument[] | null> {
    const todos = await TodoSchema.find({
      user_id,
    });
    if (!todos) {
      return null;
    }
    return todos;
  }

  async delete(todo_id: string): Promise<TodoDocument | null> {
    const todo = await TodoSchema.findOneAndDelete({
      _id: todo_id,
    });

    return todo;
  }
}

export default TodoRepository;
