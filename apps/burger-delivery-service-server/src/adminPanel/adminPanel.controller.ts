import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AdminPanelService } from "./adminPanel.service";
import { AdminPanelControllerBase } from "./base/adminPanel.controller.base";

@swagger.ApiTags("adminPanels")
@common.Controller("adminPanels")
export class AdminPanelController extends AdminPanelControllerBase {
  constructor(protected readonly service: AdminPanelService) {
    super(service);
  }
}
