import { BurgerWhereInput } from "./BurgerWhereInput";
import { BurgerOrderByInput } from "./BurgerOrderByInput";

export type BurgerFindManyArgs = {
  where?: BurgerWhereInput;
  orderBy?: Array<BurgerOrderByInput>;
  skip?: number;
  take?: number;
};
