import { MongoClient } from "mongodb";
import { Collection } from "mongoose";

const client = new MongoClient("mongodb+srv://loluvulol:VanNuys1@users.5z2tcau.mongodb.net/?retryWrites=true&w=majority");

export type ProductInstance = {
    _id: number;
    name: string;
    price: number;
    images: string[];
    categories: string[];
};

client.connect(err => {
    if(err) {
        console.log(err)
    }
    console.log("DB Connection is open")
    client.db("ShoppingApp").collection("products").find({});
  });

