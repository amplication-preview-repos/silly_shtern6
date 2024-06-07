import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";
import { OrderUpdateManyWithoutDeliveriesInput } from "./OrderUpdateManyWithoutDeliveriesInput";

export type DeliveryUpdateInput = {
  deliveryDate?: Date | null;
  deliveryPerson?: string | null;
  deliveryStatus?: "Option1" | null;
  order?: OrderWhereUniqueInput | null;
  orders?: OrderUpdateManyWithoutDeliveriesInput;
};
