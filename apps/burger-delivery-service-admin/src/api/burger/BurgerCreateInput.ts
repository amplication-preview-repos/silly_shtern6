import { OrderCreateNestedManyWithoutBurgersInput } from "./OrderCreateNestedManyWithoutBurgersInput";

export type BurgerCreateInput = {
  ingredients?: string | null;
  name?: string | null;
  orders?: OrderCreateNestedManyWithoutBurgersInput;
  price?: number | null;
};
