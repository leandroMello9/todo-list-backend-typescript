import { UserSchema, UserDocument } from '../../models/User';
import { IUserRepository } from '../IUserRepository';
import ICreateUserDTO from '../../services/ICreateUserDTO';

class UserRepository implements IUserRepository {
  async create({
    email,
    name,
    password,
  }: ICreateUserDTO): Promise<UserDocument | Error> {
    const userArealdyExist = await UserSchema.findOne({
      email,
    });
    if (!userArealdyExist) {
      const user = await UserSchema.create({
        email,
        password,
        name,
      });
      return user;
    }
    throw new Error('User arealdy exist');
  }
}

export default UserRepository;
