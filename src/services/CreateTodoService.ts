import { Document } from 'mongoose';
import ICreateTodoDTO from './ICreateTodoDTO';
import TodoRepository from '../repositories/implementions/TodoRepository';

class CreateUserService {
  public async execute({
    description,
    title,
    user_id,
    status,
  }: ICreateTodoDTO): Promise<Document | Error> {
    try {
      const userRepository = new TodoRepository();

      const todo = await userRepository.create({
        description,
        title,
        user_id,
        status,
      });
      return todo;
    } catch (err) {
      throw new Error(err.message);
    }
  }
}

export default CreateUserService;
