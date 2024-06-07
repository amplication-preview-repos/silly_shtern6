import * as graphql from "@nestjs/graphql";
import { BurgerResolverBase } from "./base/burger.resolver.base";
import { Burger } from "./base/Burger";
import { BurgerService } from "./burger.service";

@graphql.Resolver(() => Burger)
export class BurgerResolver extends BurgerResolverBase {
  constructor(protected readonly service: BurgerService) {
    super(service);
  }
}
