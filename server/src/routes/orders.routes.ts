import OrderModel from '../models/order.models';
import { Express, Request, Response } from "express";

export default (app: Express) => {
  app.post('/orders/new', async (req: Request, res: Response) => {
    if (req.body === undefined) {
      res.sendStatus(400).end();
    } else {
      const order = await OrderModel.create(req.body);
      if (order) {
        res.send(order).end();
      } else {
        res.status(500).end();
      }
    }
  });

  app.get('/orders', async (req, res) => {
    const orders = await OrderModel.find({ customer: req.user }) || [];
    res.send(orders);
  });
};