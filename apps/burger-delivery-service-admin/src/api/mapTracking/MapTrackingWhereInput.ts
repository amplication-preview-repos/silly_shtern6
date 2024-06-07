import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type MapTrackingWhereInput = {
  id?: StringFilter;
  location?: JsonFilter;
  order?: OrderWhereUniqueInput;
  timestamp?: DateTimeNullableFilter;
};
