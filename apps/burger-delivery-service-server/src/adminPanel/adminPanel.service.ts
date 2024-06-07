import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AdminPanelServiceBase } from "./base/adminPanel.service.base";

@Injectable()
export class AdminPanelService extends AdminPanelServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
