import { Module } from "@nestjs/common";
import { AdminPanelModuleBase } from "./base/adminPanel.module.base";
import { AdminPanelService } from "./adminPanel.service";
import { AdminPanelController } from "./adminPanel.controller";
import { AdminPanelResolver } from "./adminPanel.resolver";

@Module({
  imports: [AdminPanelModuleBase],
  controllers: [AdminPanelController],
  providers: [AdminPanelService, AdminPanelResolver],
  exports: [AdminPanelService],
})
export class AdminPanelModule {}
