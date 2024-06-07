import { Burger as TBurger } from "../api/burger/Burger";

export const BURGER_TITLE_FIELD = "name";

export const BurgerTitle = (record: TBurger): string => {
  return record.name?.toString() || String(record.id);
};
