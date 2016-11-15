import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { AppComponent } from "./app.component";
import { appRoutes, components } from "./app.routes";
import { AboutModule } from "./about/about.module";

@NgModule({
  declarations: [
    AppComponent,
    ...components
  ],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA],
  imports: [
    NativeScriptModule,
    NativeScriptRouterModule,
    NativeScriptRouterModule.forRoot(appRoutes),
    AboutModule
  ],
})
export class AppModule { }