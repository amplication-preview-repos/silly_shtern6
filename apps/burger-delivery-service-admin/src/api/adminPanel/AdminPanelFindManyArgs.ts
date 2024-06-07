import { AdminPanelWhereInput } from "./AdminPanelWhereInput";
import { AdminPanelOrderByInput } from "./AdminPanelOrderByInput";

export type AdminPanelFindManyArgs = {
  where?: AdminPanelWhereInput;
  orderBy?: Array<AdminPanelOrderByInput>;
  skip?: number;
  take?: number;
};
