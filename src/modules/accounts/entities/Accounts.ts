import { Schema } from "mongoose";

import { connectionGeneral } from "../../../shared/infra/DB";
import { IAccountDTO } from "../dto/IAccountDTO";

const AccountSchema: Schema = new Schema(
  {
    name: { type: String, require: true },
    email: { type: String, require: true, unique: true },
    password: { type: String, require: true },
    refreshId: { type: String },
  },
  { timestamps: true }
);

const AccountsModel = connectionGeneral.model<IAccountDTO & Document>(
  "Account",
  AccountSchema
);

export { AccountsModel };
