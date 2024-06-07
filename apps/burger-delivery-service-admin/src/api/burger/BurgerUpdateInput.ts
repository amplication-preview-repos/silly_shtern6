import { OrderUpdateManyWithoutBurgersInput } from "./OrderUpdateManyWithoutBurgersInput";

export type BurgerUpdateInput = {
  ingredients?: string | null;
  name?: string | null;
  orders?: OrderUpdateManyWithoutBurgersInput;
  price?: number | null;
};
