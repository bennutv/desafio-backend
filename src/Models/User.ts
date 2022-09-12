import mongoose = require('mongoose');
import express = require('express');
import bcrypt = require('bcryptjs');
import { UserInterface } from '../interfaces';
import { ObjectId } from 'mongodb';

const userSchema = new mongoose.Schema<UserInterface>(
  {

    name: { type: String, require: true },
    lastname: { type: String, require: true },
    username: { type: String, unique: true, require: true, lowercase: true },
    password: { type: String, require: true, select: false },
    email: { type: String, unique: true, require: true },
    passwordResetToken: { type: String, select: false },
    passwordResetExpire: { type: Date, select: false },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { collection: 'UserLogin' }
);

userSchema.pre<UserInterface>(
  'save',
  async function (next: express.NextFunction) {
    const user = this;
    const hash = await bcrypt.hash(user.password, 10);
    user.password = hash;
    next();
  }
);
export const UserModel = mongoose.model('UserLogin', userSchema, 'UserLogin');
