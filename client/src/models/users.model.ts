import mongoose from "mongoose";
import { getModelForClass, index, prop, modelOptions } from "@typegoose/typegoose";

export type UserType = {
  _id: string,
  email: string,
  username: string,
  role: string,
}

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