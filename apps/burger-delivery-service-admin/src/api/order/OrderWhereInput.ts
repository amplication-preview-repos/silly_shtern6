import { BurgerWhereUniqueInput } from "../burger/BurgerWhereUniqueInput";
import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { DeliveryListRelationFilter } from "../delivery/DeliveryListRelationFilter";
import { DeliveryWhereUniqueInput } from "../delivery/DeliveryWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { MapTrackingListRelationFilter } from "../mapTracking/MapTrackingListRelationFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type OrderWhereInput = {
  burger?: BurgerWhereUniqueInput;
  customer?: CustomerWhereUniqueInput;
  deliveries?: DeliveryListRelationFilter;
  delivery?: DeliveryWhereUniqueInput;
  id?: StringFilter;
  mapTrackings?: MapTrackingListRelationFilter;
  orderDate?: DateTimeNullableFilter;
  status?: "Option1";
};
