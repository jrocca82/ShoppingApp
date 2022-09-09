import { getModelForClass, index, prop, modelOptions } from "@typegoose/typegoose";

type StringArray = string[]

@modelOptions({
  schemaOptions: {
    collection: "products",
  },
})

export class Products {
  @prop()
  public name!: string;

  @prop()
  public price!: string;

  @prop()
  public images!: StringArray;

  @prop()
  public categories!: StringArray;
}

const ProductModel = getModelForClass(Products);

export default ProductModel;
  