import mongoose from 'mongoose';

const {Scheme} = mongoose;

//id, password, name, email
const UserScheme = new Scheme({
  id            : String,
  hashedPassword: String,
  name          : String,
  email         : String
});