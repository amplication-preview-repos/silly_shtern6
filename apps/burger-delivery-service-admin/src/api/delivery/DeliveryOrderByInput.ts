import { SortOrder } from "../../util/SortOrder";

export type DeliveryOrderByInput = {
  createdAt?: SortOrder;
  deliveryDate?: SortOrder;
  deliveryPerson?: SortOrder;
  deliveryStatus?: SortOrder;
  id?: SortOrder;
  orderId?: SortOrder;
  updatedAt?: SortOrder;
};
