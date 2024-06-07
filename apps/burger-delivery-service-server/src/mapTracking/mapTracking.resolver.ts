import * as graphql from "@nestjs/graphql";
import { MapTrackingResolverBase } from "./base/mapTracking.resolver.base";
import { MapTracking } from "./base/MapTracking";
import { MapTrackingService } from "./mapTracking.service";

@graphql.Resolver(() => MapTracking)
export class MapTrackingResolver extends MapTrackingResolverBase {
  constructor(protected readonly service: MapTrackingService) {
    super(service);
  }
}
