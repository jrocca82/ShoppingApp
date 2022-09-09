import { getModelForClass, index, prop, modelOptions } from "@typegoose/typegoose";

export type ProductType = {
  _id: string,
  name: string;
  price: string;
  images: string[],
  categories: string[]
}
  