import { Delivery as TDelivery } from "../api/delivery/Delivery";

export const DELIVERY_TITLE_FIELD = "deliveryPerson";

export const DeliveryTitle = (record: TDelivery): string => {
  return record.deliveryPerson?.toString() || String(record.id);
};
