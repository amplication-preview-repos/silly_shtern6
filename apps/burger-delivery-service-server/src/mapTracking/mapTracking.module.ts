import { Module } from "@nestjs/common";
import { MapTrackingModuleBase } from "./base/mapTracking.module.base";
import { MapTrackingService } from "./mapTracking.service";
import { MapTrackingController } from "./mapTracking.controller";
import { MapTrackingResolver } from "./mapTracking.resolver";

@Module({
  imports: [MapTrackingModuleBase],
  controllers: [MapTrackingController],
  providers: [MapTrackingService, MapTrackingResolver],
  exports: [MapTrackingService],
})
export class MapTrackingModule {}
