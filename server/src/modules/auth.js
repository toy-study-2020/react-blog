import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const {Scheme} = mongoose;

//id, password, name, email
const UserSchema = new Scheme({
  id            : String,
  hashedPassword: String,
  name          : String,
  email         : String
});

UserSchema.method.setPassword = async (password) => {
  const hash = await bcrypt.hash(password, 10);
  this.hashedPassword = hash;
};