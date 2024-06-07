import { AdminPanel as TAdminPanel } from "../api/adminPanel/AdminPanel";

export const ADMINPANEL_TITLE_FIELD = "adminName";

export const AdminPanelTitle = (record: TAdminPanel): string => {
  return record.adminName?.toString() || String(record.id);
};
