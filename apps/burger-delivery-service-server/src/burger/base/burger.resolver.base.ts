/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Burger } from "./Burger";
import { BurgerCountArgs } from "./BurgerCountArgs";
import { BurgerFindManyArgs } from "./BurgerFindManyArgs";
import { BurgerFindUniqueArgs } from "./BurgerFindUniqueArgs";
import { CreateBurgerArgs } from "./CreateBurgerArgs";
import { UpdateBurgerArgs } from "./UpdateBurgerArgs";
import { DeleteBurgerArgs } from "./DeleteBurgerArgs";
import { OrderFindManyArgs } from "../../order/base/OrderFindManyArgs";
import { Order } from "../../order/base/Order";
import { BurgerService } from "../burger.service";
@graphql.Resolver(() => Burger)
export class BurgerResolverBase {
  constructor(protected readonly service: BurgerService) {}

  async _burgersMeta(
    @graphql.Args() args: BurgerCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Burger])
  async burgers(@graphql.Args() args: BurgerFindManyArgs): Promise<Burger[]> {
    return this.service.burgers(args);
  }

  @graphql.Query(() => Burger, { nullable: true })
  async burger(
    @graphql.Args() args: BurgerFindUniqueArgs
  ): Promise<Burger | null> {
    const result = await this.service.burger(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Burger)
  async createBurger(@graphql.Args() args: CreateBurgerArgs): Promise<Burger> {
    return await this.service.createBurger({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => Burger)
  async updateBurger(
    @graphql.Args() args: UpdateBurgerArgs
  ): Promise<Burger | null> {
    try {
      return await this.service.updateBurger({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Burger)
  async deleteBurger(
    @graphql.Args() args: DeleteBurgerArgs
  ): Promise<Burger | null> {
    try {
      return await this.service.deleteBurger(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => [Order], { name: "orders" })
  async findOrders(
    @graphql.Parent() parent: Burger,
    @graphql.Args() args: OrderFindManyArgs
  ): Promise<Order[]> {
    const results = await this.service.findOrders(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}
