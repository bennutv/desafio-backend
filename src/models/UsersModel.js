import mongoose from "mongoose"
const { Schema } = mongoose;

export const UsersSchema = new Schema({
	_id: { type: Schema.Types.ObjectId },
	email: { type: String, required: true },
  password: { type: String, required: true },
	session: { type: Boolean, required: false },
	token: { type: String, required: false },
});

const Users = mongoose.model("users", UsersSchema);

export default Users