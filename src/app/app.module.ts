import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";


import {AppComponent} from "./app.component";
import {AppRoutingModule} from "./app.routing.module";
import {NavModule} from "./nav/nav.module";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
