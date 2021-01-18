import { Document } from 'mongoose';
import ICreateUserDTO from '../services/ICreateUserDTO';

export interface IUserRepository {
  create({ email, password, name }: ICreateUserDTO): Promise<Document | Error>;
}
