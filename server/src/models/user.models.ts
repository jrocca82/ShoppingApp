import mongoose from "mongoose";
import { getModelForClass, index, prop, modelOptions } from "@typegoose/typegoose";

@modelOptions({
  schemaOptions: {
    collection: "users",
  },
})

export class Users {
  @prop()
  public email!: string;

  @prop()
  public username!: string;

  @prop()
  public role!: string;
}

const UserModel = getModelForClass(Users);

export default UserModel;