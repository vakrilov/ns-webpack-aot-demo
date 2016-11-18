import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { NgModule, NO_ERRORS_SCHEMA, NgModuleFactoryLoader } from "@angular/core";
import { AppComponent } from "./app.component";
import { AboutModule } from "./about/about.module";
import { HomeComponent } from "./home/home.component";
import { NsModuleLoader } from "./ns-module-loader";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  providers: [
    { provide: NgModuleFactoryLoader, useClass: NsModuleLoader }
  ],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA],
  imports: [
    NativeScriptModule,
    NativeScriptRouterModule,
    NativeScriptRouterModule.forRoot([
      { path: "", component: HomeComponent },
      { path: "lazy", loadChildren: "./lazy/lazy.module#LazyModule" }
    ]),
    AboutModule,
  ],
})
export class AppModule { }