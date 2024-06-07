import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";
import { OrderListRelationFilter } from "../order/OrderListRelationFilter";

export type DeliveryWhereInput = {
  deliveryDate?: DateTimeNullableFilter;
  deliveryPerson?: StringNullableFilter;
  deliveryStatus?: "Option1";
  id?: StringFilter;
  order?: OrderWhereUniqueInput;
  orders?: OrderListRelationFilter;
};
