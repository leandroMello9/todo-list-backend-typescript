import { Document, Schema, model } from 'mongoose';

interface TodoDocument extends Document {
  description: string;
  title: string;
  user_id: string;
  status: string;
}
const Todo = new Schema(
  {
    description: {
      type: String,
      required: true,
      validate: /\S+/,
    },
    title: {
      type: String,
      required: true,
      validate: /\S+/,
    },
    user_id: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      validate: /\S+/,
    },
    status: {
      type: String,
      required: true,
      validate: /\S+/,
    },
  },
  { timestamps: true },
);

const TodoSchema = model<TodoDocument>('Todo', Todo);

export { TodoSchema, TodoDocument };
