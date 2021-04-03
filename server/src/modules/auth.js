import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const {Schema} = mongoose;

//userId, password, name, email
const UserSchema = new Schema({
  userId        : String,
  hashedPassword: String,
  name          : String,
  email         : String
});

UserSchema.methods.setPassword = async function (password) {
  const hash = await bcrypt.hash(password, 10);
  this.hashedPassword = hash;
};

UserSchema.methods.checkPassword = async function (password) {
  const result = await bcrypt.compare(password, this.hashedPassword);
  return result;
};

UserSchema.methods.setOtherField = function (data) {
  const {name, email} = data;
  this.name = name;
  this.email = email;
};

UserSchema.methods.serialize = function () {
  const data = this.toJSON();
  delete data.hashedPassword;
  return data;
};

UserSchema.methods.generateToken = function () {
  const token = jwt.sign(
    {
      _id   : this.id,
      userId: this.userId
    },
    process.env.JWT_SECRET,
    {
      expiresIn: '7d',
    }
  );
  return token;
};

UserSchema.statics.findByUserId = function (userId) {
  return this.findOne({userId});
};

const User = mongoose.model('User', UserSchema);

export default User;