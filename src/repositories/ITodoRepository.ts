import { Document } from 'mongoose';
import { TodoDocument } from '../models/Todo';
import ICreateTodoDTO from '../services/ICreateTodoDTO';

export interface ITodoRepository {
  create({
    description,
    title,
    user_id,
  }: ICreateTodoDTO): Promise<Document | Error>;
  listen(user_id: string): Promise<TodoDocument[] | null>;
  delete(todo_id: string): Promise<TodoDocument | null>;
}
