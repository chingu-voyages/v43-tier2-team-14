import mongoose, { Schema, model } from "mongoose";

const UserSchema = Schema({
  googleId: String,
  name: String,
  email: String,
  picture: String,
  provider: String
}, { timestamps: true })

const User = mongoose.model('user', UserSchema)
export default User