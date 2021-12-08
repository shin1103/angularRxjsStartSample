import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventComponent } from './event/event.component';
import { FrpComponent } from './frp/frp.component';
import { FrpNoSyntheticComponent } from './frp-no-synthetic/frp-no-synthetic.component';

@NgModule({
  declarations: [AppComponent, EventComponent, FrpComponent, FrpNoSyntheticComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
