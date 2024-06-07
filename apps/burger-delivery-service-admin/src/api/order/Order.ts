import { Burger } from "../burger/Burger";
import { Customer } from "../customer/Customer";
import { Delivery } from "../delivery/Delivery";
import { MapTracking } from "../mapTracking/MapTracking";

export type Order = {
  burger?: Burger | null;
  createdAt: Date;
  customer?: Customer | null;
  deliveries?: Array<Delivery>;
  delivery?: Delivery | null;
  id: string;
  mapTrackings?: Array<MapTracking>;
  orderDate: Date | null;
  status?: "Option1" | null;
  updatedAt: Date;
};
