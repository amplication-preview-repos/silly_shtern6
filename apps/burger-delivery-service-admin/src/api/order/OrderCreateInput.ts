import { BurgerWhereUniqueInput } from "../burger/BurgerWhereUniqueInput";
import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { DeliveryCreateNestedManyWithoutOrdersInput } from "./DeliveryCreateNestedManyWithoutOrdersInput";
import { DeliveryWhereUniqueInput } from "../delivery/DeliveryWhereUniqueInput";
import { MapTrackingCreateNestedManyWithoutOrdersInput } from "./MapTrackingCreateNestedManyWithoutOrdersInput";

export type OrderCreateInput = {
  burger?: BurgerWhereUniqueInput | null;
  customer?: CustomerWhereUniqueInput | null;
  deliveries?: DeliveryCreateNestedManyWithoutOrdersInput;
  delivery?: DeliveryWhereUniqueInput | null;
  mapTrackings?: MapTrackingCreateNestedManyWithoutOrdersInput;
  orderDate?: Date | null;
  status?: "Option1" | null;
};
