import { Module } from "@nestjs/common";
import { BurgerModuleBase } from "./base/burger.module.base";
import { BurgerService } from "./burger.service";
import { BurgerController } from "./burger.controller";
import { BurgerResolver } from "./burger.resolver";

@Module({
  imports: [BurgerModuleBase],
  controllers: [BurgerController],
  providers: [BurgerService, BurgerResolver],
  exports: [BurgerService],
})
export class BurgerModule {}
