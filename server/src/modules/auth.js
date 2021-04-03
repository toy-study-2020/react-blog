import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const {Scheme} = mongoose;

//id, password, name, email
const UserScheme = new Scheme({
  id            : String,
  hashedPassword: String,
  name          : String,
  email         : String
});

UserScheme.method.setPassword = async (password) => {
  const hash = await bcrypt.hash(password, 10);
  this.hashedPassword = hash;
};