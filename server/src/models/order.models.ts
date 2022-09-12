import { getModelForClass, prop, modelOptions, Severity } from "@typegoose/typegoose";
import { ObjectId } from "mongoose";

type StringArray = string[]

@modelOptions({
  schemaOptions: {
    collection: "orders",
  },
  options: {
    allowMixed: Severity.ALLOW
  }
})

export class Orders {
  @prop()
  public customer!: ObjectId;

  @prop()
  public timestamp!: number;

  @prop()
  public products!: [{
    _id: ObjectId,
    name: String,
    price: Number,
    images: StringArray,
  }];

  @prop()
  public shippingAddress!: {
    addressLine1: string;
    addressLine2: string;
    city: string;
    county: string;
    postcode: number;
  }

  @prop()
  public contactDetails!: {
    fullName: string;
    phoneNumber: string;
  }
}

const OrdersModel = getModelForClass(Orders);

export default OrdersModel;