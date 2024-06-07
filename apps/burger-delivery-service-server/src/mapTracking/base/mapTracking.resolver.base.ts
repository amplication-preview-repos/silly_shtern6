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
import { MapTracking } from "./MapTracking";
import { MapTrackingCountArgs } from "./MapTrackingCountArgs";
import { MapTrackingFindManyArgs } from "./MapTrackingFindManyArgs";
import { MapTrackingFindUniqueArgs } from "./MapTrackingFindUniqueArgs";
import { CreateMapTrackingArgs } from "./CreateMapTrackingArgs";
import { UpdateMapTrackingArgs } from "./UpdateMapTrackingArgs";
import { DeleteMapTrackingArgs } from "./DeleteMapTrackingArgs";
import { Order } from "../../order/base/Order";
import { MapTrackingService } from "../mapTracking.service";
@graphql.Resolver(() => MapTracking)
export class MapTrackingResolverBase {
  constructor(protected readonly service: MapTrackingService) {}

  async _mapTrackingsMeta(
    @graphql.Args() args: MapTrackingCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [MapTracking])
  async mapTrackings(
    @graphql.Args() args: MapTrackingFindManyArgs
  ): Promise<MapTracking[]> {
    return this.service.mapTrackings(args);
  }

  @graphql.Query(() => MapTracking, { nullable: true })
  async mapTracking(
    @graphql.Args() args: MapTrackingFindUniqueArgs
  ): Promise<MapTracking | null> {
    const result = await this.service.mapTracking(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => MapTracking)
  async createMapTracking(
    @graphql.Args() args: CreateMapTrackingArgs
  ): Promise<MapTracking> {
    return await this.service.createMapTracking({
      ...args,
      data: {
        ...args.data,

        order: args.data.order
          ? {
              connect: args.data.order,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => MapTracking)
  async updateMapTracking(
    @graphql.Args() args: UpdateMapTrackingArgs
  ): Promise<MapTracking | null> {
    try {
      return await this.service.updateMapTracking({
        ...args,
        data: {
          ...args.data,

          order: args.data.order
            ? {
                connect: args.data.order,
              }
            : undefined,
        },
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

  @graphql.Mutation(() => MapTracking)
  async deleteMapTracking(
    @graphql.Args() args: DeleteMapTrackingArgs
  ): Promise<MapTracking | null> {
    try {
      return await this.service.deleteMapTracking(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => Order, {
    nullable: true,
    name: "order",
  })
  async getOrder(@graphql.Parent() parent: MapTracking): Promise<Order | null> {
    const result = await this.service.getOrder(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
