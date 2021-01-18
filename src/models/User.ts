import { Document, Schema, model } from 'mongoose';
import bcrypt from 'bcryptjs';

interface UserDocument extends Document {
  password: string;
  email: string;
  name: string;
}

function bycriptPassword(password: string) {
  return bcrypt.hashSync(password, 8);
}
const User = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: /\S+/,
  },
  password: { type: String, set: bycriptPassword },
});

const UserSchema = model<UserDocument>('User', User);

export { UserSchema, UserDocument };
