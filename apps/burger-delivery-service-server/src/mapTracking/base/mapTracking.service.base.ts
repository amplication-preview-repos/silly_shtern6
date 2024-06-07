/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  MapTracking as PrismaMapTracking,
  Order as PrismaOrder,
} from "@prisma/client";

export class MapTrackingServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.MapTrackingCountArgs, "select">
  ): Promise<number> {
    return this.prisma.mapTracking.count(args);
  }

  async mapTrackings<T extends Prisma.MapTrackingFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.MapTrackingFindManyArgs>
  ): Promise<PrismaMapTracking[]> {
    return this.prisma.mapTracking.findMany<Prisma.MapTrackingFindManyArgs>(
      args
    );
  }
  async mapTracking<T extends Prisma.MapTrackingFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.MapTrackingFindUniqueArgs>
  ): Promise<PrismaMapTracking | null> {
    return this.prisma.mapTracking.findUnique(args);
  }
  async createMapTracking<T extends Prisma.MapTrackingCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.MapTrackingCreateArgs>
  ): Promise<PrismaMapTracking> {
    return this.prisma.mapTracking.create<T>(args);
  }
  async updateMapTracking<T extends Prisma.MapTrackingUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.MapTrackingUpdateArgs>
  ): Promise<PrismaMapTracking> {
    return this.prisma.mapTracking.update<T>(args);
  }
  async deleteMapTracking<T extends Prisma.MapTrackingDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.MapTrackingDeleteArgs>
  ): Promise<PrismaMapTracking> {
    return this.prisma.mapTracking.delete(args);
  }

  async getOrder(parentId: string): Promise<PrismaOrder | null> {
    return this.prisma.mapTracking
      .findUnique({
        where: { id: parentId },
      })
      .order();
  }
}