import { MapTracking as TMapTracking } from "../api/mapTracking/MapTracking";

export const MAPTRACKING_TITLE_FIELD = "id";

export const MapTrackingTitle = (record: TMapTracking): string => {
  return record.id?.toString() || String(record.id);
};
