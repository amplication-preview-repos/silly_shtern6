import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { BurgerService } from "./burger.service";
import { BurgerControllerBase } from "./base/burger.controller.base";

@swagger.ApiTags("burgers")
@common.Controller("burgers")
export class BurgerController extends BurgerControllerBase {
  constructor(protected readonly service: BurgerService) {
    super(service);
  }
}
