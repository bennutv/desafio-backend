import mongoose from "mongoose"
const { Schema } = mongoose;

export const UsersSchema = new Schema({
	email: { type: String, required: true },
  password: { type: String, required: true },
	token: { type: String, required: false },
});

const Users = mongoose.model("users", UsersSchema);

export default Users