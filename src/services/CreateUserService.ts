import { Document } from 'mongoose';
import ICreateUserDTO from './ICreateUserDTO';
import UserRepository from '../repositories/implementions/UserRepository';

class CreateUserService {
  public async execute({
    name,
    email,
    password,
  }: ICreateUserDTO): Promise<Document | Error> {
    try {
      const userRepository = new UserRepository();

      const user = await userRepository.create({
        name,
        email,
        password,
      });
      return user;
    } catch (err) {
      throw new Error(err.message);
    }
  }
}

export default CreateUserService;
