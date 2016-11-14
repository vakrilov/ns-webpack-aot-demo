// this import should be first in order to load some required settings (like globals and reflect-metadata)
// import { platformNativeScriptDynamic } from "nativescript-angular/platform";
// import { AppComponentModule } from "./app.module";
// platformNativeScriptDynamic().bootstrapModule(AppComponentModule);


import { platformNativeScript } from "nativescript-angular/platform-static";
import { AppComponentModuleNgFactory } from "./aot/app/app.module.ngfactory";
platformNativeScript().bootstrapModuleFactory(AppComponentModuleNgFactory);


