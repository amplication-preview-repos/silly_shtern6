import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { MapTrackingService } from "./mapTracking.service";
import { MapTrackingControllerBase } from "./base/mapTracking.controller.base";

@swagger.ApiTags("mapTrackings")
@common.Controller("mapTrackings")
export class MapTrackingController extends MapTrackingControllerBase {
  constructor(protected readonly service: MapTrackingService) {
    super(service);
  }
}
