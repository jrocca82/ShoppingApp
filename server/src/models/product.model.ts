import { getModelForClass, prop, modelOptions, Severity } from "@typegoose/typegoose";

type StringArray = string[]

@modelOptions({
  schemaOptions: {
    collection: "products",
  },
  options: {
    allowMixed: Severity.ALLOW
  }
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
  