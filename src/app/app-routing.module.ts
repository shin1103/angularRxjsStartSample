import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppModule } from './app.module';
import { EventComponent } from './event/event.component';
import { FrpComponent } from './frp/frp.component';

const routes: Routes = [
  // {
  //   path: '',
  //   component: AppModule,
  // },
  {
    path: 'event',
    component: EventComponent,
  },
  {
    path: 'frp',
    component: FrpComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
