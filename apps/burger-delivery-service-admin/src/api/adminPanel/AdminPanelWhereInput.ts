import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type AdminPanelWhereInput = {
  adminEmail?: StringNullableFilter;
  adminName?: StringNullableFilter;
  adminPassword?: StringNullableFilter;
  id?: StringFilter;
};
