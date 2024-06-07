import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MapTrackingServiceBase } from "./base/mapTracking.service.base";

@Injectable()
export class MapTrackingService extends MapTrackingServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
