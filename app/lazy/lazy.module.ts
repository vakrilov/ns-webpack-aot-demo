import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { Route } from "@angular/router";
import { LazyComponent } from "./lazy.component";

const appRoutes: Route[] = [
  { path: "", component: LazyComponent }
];

@NgModule({
  declarations: [
    LazyComponent
  ],
  schemas: [NO_ERRORS_SCHEMA],
  imports: [
    NativeScriptModule,
    NativeScriptRouterModule,
    NativeScriptRouterModule.forChild(appRoutes)
  ],
})
export class LazyModule { }