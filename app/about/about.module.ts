import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { Route } from "@angular/router";
import { AboutComponent } from "./about.component";

const appRoutes: Route[] = [
  { path: "about", component: AboutComponent }
];

@NgModule({
  declarations: [
    AboutComponent
  ],
  schemas: [NO_ERRORS_SCHEMA],
  imports: [
    NativeScriptModule,
    NativeScriptRouterModule,
    NativeScriptRouterModule.forChild(appRoutes)
  ],
})
export class AboutModule { }