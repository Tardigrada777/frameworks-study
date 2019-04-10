import { HLModule } from "framework";
import { appComponent } from "./app.component";
import { appHeader } from "./common/app.header";
import { appRoutes } from "./app.routes";
import { modalComponent } from "./components/add-modal.component";
import { commentComponent } from "./components/comment-modal.component";
import { windowComponent } from "./components/window.component";

class AppModule extends HLModule{
    constructor(config){
        super(config);
    }
}

export const appModule = new AppModule({
    components: [
        modalComponent, commentComponent, windowComponent
    ],
    bootstrap: appComponent,
    routes: appRoutes
});