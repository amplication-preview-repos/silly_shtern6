import { SortOrder } from "../../util/SortOrder";

export type AdminPanelOrderByInput = {
  adminEmail?: SortOrder;
  adminName?: SortOrder;
  adminPassword?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
