import { getModelForClass, index, prop, modelOptions } from "@typegoose/typegoose";

@modelOptions({
  schemaOptions: {
    collection: "products",
  },
})

export class Products {
  @prop()
  public name!: string;

  @prop()
  public price: string;

  @prop()
  public images: [string];

  @prop()
  public categories: [string];
}

const ProductModel = getModelForClass(Products);

export default ProductModel;
  