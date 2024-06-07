import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { BurgerServiceBase } from "./base/burger.service.base";

@Injectable()
export class BurgerService extends BurgerServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
