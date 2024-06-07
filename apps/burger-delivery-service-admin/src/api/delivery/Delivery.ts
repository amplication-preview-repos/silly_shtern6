import { Order } from "../order/Order";

export type Delivery = {
  createdAt: Date;
  deliveryDate: Date | null;
  deliveryPerson: string | null;
  deliveryStatus?: "Option1" | null;
  id: string;
  order?: Order | null;
  orders?: Array<Order>;
  updatedAt: Date;
};
