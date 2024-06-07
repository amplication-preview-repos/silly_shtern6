import * as graphql from "@nestjs/graphql";
import { AdminPanelResolverBase } from "./base/adminPanel.resolver.base";
import { AdminPanel } from "./base/AdminPanel";
import { AdminPanelService } from "./adminPanel.service";

@graphql.Resolver(() => AdminPanel)
export class AdminPanelResolver extends AdminPanelResolverBase {
  constructor(protected readonly service: AdminPanelService) {
    super(service);
  }
}
