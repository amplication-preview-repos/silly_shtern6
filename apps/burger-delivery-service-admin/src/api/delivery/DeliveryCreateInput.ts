import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";
import { OrderCreateNestedManyWithoutDeliveriesInput } from "./OrderCreateNestedManyWithoutDeliveriesInput";

export type DeliveryCreateInput = {
  deliveryDate?: Date | null;
  deliveryPerson?: string | null;
  deliveryStatus?: "Option1" | null;
  order?: OrderWhereUniqueInput | null;
  orders?: OrderCreateNestedManyWithoutDeliveriesInput;
};
