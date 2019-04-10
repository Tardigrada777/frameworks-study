import { bootstrap } from "./framework";
import { appModule } from "./framework/app/app.module";
import { _ } from './framework/index'

_.delay(1000).then(() => {
    bootstrap(appModule);
});
