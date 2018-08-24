import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import uniqueValidator from 'mongoose-unique-validator';

const schema = new mongoose.Schema(
  {
    email: {
      type: String
      , required: true
      , lowercase: true
      , index: true
      , unique: true
    }
    , username: {
      type: String
      , required: true
      , unique: true
    }
    , firstName: { type: String }
    , lastName: { type: String }
    , passwordHash: {
      type: String
      , required: true
    },
  }
  , { timestamps: true }
);

schema.methods.isValidPassword = function isValidPassword(password) {
  return bcrypt.compareSync(password, this.passwordHash);
}

schema.methods.setPassword = function setPassword(password) {
  this.passwordHash = bcrypt.hashSync(password, 10);
}

schema.methods.generateJWT = function generateJWT() {
  return jwt.sign({
    id: this._id,
    email: this.email,
    username: this.username,
    firstName: this.firstName,
    lastName: this.lastName,
  }, process.env.JWT_SECRET_KEY);
}

schema.methods.toJSON = function toJSON() {
  return {
    id: this._id,
    email: this.email,
    username: this.username,
    firstName: this.firstName,
    lastName: this.lastName,
    token: this.generateJWT()
  }
}

schema.plugin(uniqueValidator, { message: 'This {PATH} is already taken.' });

export default mongoose.model('User', schema);
