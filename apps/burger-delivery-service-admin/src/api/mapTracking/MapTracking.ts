import { JsonValue } from "type-fest";
import { Order } from "../order/Order";

export type MapTracking = {
  createdAt: Date;
  id: string;
  location: JsonValue;
  order?: Order | null;
  timestamp: Date | null;
  updatedAt: Date;
};
