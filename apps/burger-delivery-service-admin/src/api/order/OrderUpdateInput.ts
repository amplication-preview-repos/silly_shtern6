import { BurgerWhereUniqueInput } from "../burger/BurgerWhereUniqueInput";
import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { DeliveryUpdateManyWithoutOrdersInput } from "./DeliveryUpdateManyWithoutOrdersInput";
import { DeliveryWhereUniqueInput } from "../delivery/DeliveryWhereUniqueInput";
import { MapTrackingUpdateManyWithoutOrdersInput } from "./MapTrackingUpdateManyWithoutOrdersInput";

export type OrderUpdateInput = {
  burger?: BurgerWhereUniqueInput | null;
  customer?: CustomerWhereUniqueInput | null;
  deliveries?: DeliveryUpdateManyWithoutOrdersInput;
  delivery?: DeliveryWhereUniqueInput | null;
  mapTrackings?: MapTrackingUpdateManyWithoutOrdersInput;
  orderDate?: Date | null;
  status?: "Option1" | null;
};
