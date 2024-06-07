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
  Burger as PrismaBurger,
  Order as PrismaOrder,
} from "@prisma/client";

export class BurgerServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.BurgerCountArgs, "select">): Promise<number> {
    return this.prisma.burger.count(args);
  }

  async burgers<T extends Prisma.BurgerFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.BurgerFindManyArgs>
  ): Promise<PrismaBurger[]> {
    return this.prisma.burger.findMany<Prisma.BurgerFindManyArgs>(args);
  }
  async burger<T extends Prisma.BurgerFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.BurgerFindUniqueArgs>
  ): Promise<PrismaBurger | null> {
    return this.prisma.burger.findUnique(args);
  }
  async createBurger<T extends Prisma.BurgerCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.BurgerCreateArgs>
  ): Promise<PrismaBurger> {
    return this.prisma.burger.create<T>(args);
  }
  async updateBurger<T extends Prisma.BurgerUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.BurgerUpdateArgs>
  ): Promise<PrismaBurger> {
    return this.prisma.burger.update<T>(args);
  }
  async deleteBurger<T extends Prisma.BurgerDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.BurgerDeleteArgs>
  ): Promise<PrismaBurger> {
    return this.prisma.burger.delete(args);
  }

  async findOrders(
    parentId: string,
    args: Prisma.OrderFindManyArgs
  ): Promise<PrismaOrder[]> {
    return this.prisma.burger
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .orders(args);
  }
}