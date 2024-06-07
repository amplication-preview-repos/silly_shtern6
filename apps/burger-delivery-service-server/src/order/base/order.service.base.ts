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
  Order as PrismaOrder,
  Delivery as PrismaDelivery,
  MapTracking as PrismaMapTracking,
  Burger as PrismaBurger,
  Customer as PrismaCustomer,
} from "@prisma/client";

export class OrderServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.OrderCountArgs, "select">): Promise<number> {
    return this.prisma.order.count(args);
  }

  async orders<T extends Prisma.OrderFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.OrderFindManyArgs>
  ): Promise<PrismaOrder[]> {
    return this.prisma.order.findMany<Prisma.OrderFindManyArgs>(args);
  }
  async order<T extends Prisma.OrderFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.OrderFindUniqueArgs>
  ): Promise<PrismaOrder | null> {
    return this.prisma.order.findUnique(args);
  }
  async createOrder<T extends Prisma.OrderCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.OrderCreateArgs>
  ): Promise<PrismaOrder> {
    return this.prisma.order.create<T>(args);
  }
  async updateOrder<T extends Prisma.OrderUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.OrderUpdateArgs>
  ): Promise<PrismaOrder> {
    return this.prisma.order.update<T>(args);
  }
  async deleteOrder<T extends Prisma.OrderDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.OrderDeleteArgs>
  ): Promise<PrismaOrder> {
    return this.prisma.order.delete(args);
  }

  async findDeliveries(
    parentId: string,
    args: Prisma.DeliveryFindManyArgs
  ): Promise<PrismaDelivery[]> {
    return this.prisma.order
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .deliveries(args);
  }

  async findMapTrackings(
    parentId: string,
    args: Prisma.MapTrackingFindManyArgs
  ): Promise<PrismaMapTracking[]> {
    return this.prisma.order
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .mapTrackings(args);
  }

  async getBurger(parentId: string): Promise<PrismaBurger | null> {
    return this.prisma.order
      .findUnique({
        where: { id: parentId },
      })
      .burger();
  }

  async getCustomer(parentId: string): Promise<PrismaCustomer | null> {
    return this.prisma.order
      .findUnique({
        where: { id: parentId },
      })
      .customer();
  }

  async getDelivery(parentId: string): Promise<PrismaDelivery | null> {
    return this.prisma.order
      .findUnique({
        where: { id: parentId },
      })
      .delivery();
  }
}