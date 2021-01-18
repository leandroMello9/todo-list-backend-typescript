import bcrypt from 'bcryptjs';
import jtw from 'jsonwebtoken';
import { UserSchema, UserDocument } from '../models/User';

interface User {
  name: string;
  email: string;
}
interface SessionResponseInterface {
  token: string;
  user: User | null;
}
class SessionService {
  public async execute(
    email: string,
    password: string,
  ): Promise<SessionResponseInterface> {
    const userExist = await UserSchema.findOne({
      email,
    });
    if (!userExist) {
      throw new Error('User informed is not exist');
    }

    const passwordCompare = await bcrypt.compare(password, userExist.password);
    if (!passwordCompare) {
      throw new Error('Password is not match');
    }
    const token = jtw.sign({ id: userExist.id }, 'secret', { expiresIn: '1d' });
    const user: User = {
      name: userExist.name,
      email: userExist.email,
    };
    return {
      user,
      token,
    };
  }
}

export default SessionService;
