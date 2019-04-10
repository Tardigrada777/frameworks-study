import { RoutingModule } from "./routing.module";
import { _ } from "../..";

// Render роутов
export function initRoutes(routes){
    if (_.isUndefined(routes)) return;

    let routing = new RoutingModule(routes);
    routing.init();
}
