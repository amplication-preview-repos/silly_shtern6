import { InputJsonValue } from "../../types";
import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";

export type MapTrackingUpdateInput = {
  location?: InputJsonValue;
  order?: OrderWhereUniqueInput | null;
  timestamp?: Date | null;
};
