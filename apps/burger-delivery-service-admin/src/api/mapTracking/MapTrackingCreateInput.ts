import { InputJsonValue } from "../../types";
import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";

export type MapTrackingCreateInput = {
  location?: InputJsonValue;
  order?: OrderWhereUniqueInput | null;
  timestamp?: Date | null;
};
