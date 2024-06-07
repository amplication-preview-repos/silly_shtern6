import { SortOrder } from "../../util/SortOrder";

export type BurgerOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  ingredients?: SortOrder;
  name?: SortOrder;
  price?: SortOrder;
  updatedAt?: SortOrder;
};
