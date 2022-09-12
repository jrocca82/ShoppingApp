import OrderModel from '../models/order.models';
import { Express } from "express";

export default (app: Express) => {
  app.post('/orders', async (req, res) => {
    if (req.body === undefined) {
      res.sendStatus(400).end();
    } else if (req.user === undefined) {
      res.sendStatus(401).end();
    } else {
      const orderData = {
        ...req.body,
        timestamp: Date.now(),
        customer: req.user,
      };
      const order = await OrderModel.create(orderData);
      if (order) {
        res.send(order).end();
      } else {
        res.status(500).end();
      }
    }
  });

  app.get('/orders', async (req, res) => {
    if (!req.user) {
      res.status(401).end();
      return;
    }
    const orders = await OrderModel.find({ customer: req.user }) || [];
    res.send(orders);
  });
};