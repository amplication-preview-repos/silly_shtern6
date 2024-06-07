import { Order } from "../order/Order";

export type Burger = {
  createdAt: Date;
  id: string;
  ingredients: string | null;
  name: string | null;
  orders?: Array<Order>;
  price: number | null;
  updatedAt: Date;
};
