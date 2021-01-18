import { connect } from 'mongoose';
import { config } from 'dotenv';
import { app } from './src/app';

const port = 3333;
// Env - confg
config();

const mongoUri = String(process.env.MONGO_DB);
connect(
  mongoUri,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  err => {
    if (err) {
      throw err;
    }
  },
);
app.listen(process.env.PORT || port, () => {
  console.log(`Server running port ${port}`);
});
