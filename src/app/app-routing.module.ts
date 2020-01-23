import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OpenPosComponent } from './components/open-pos/open-pos.component';
import { ClosePosComponent } from './components/close-pos/close-pos.component';
import { CreateSaleComponent } from './components/create-sale/create-sale.component';


const routes: Routes = [
    {
        path: 'open',
        component: OpenPosComponent
      },
      {
        path: 'close',
        component: ClosePosComponent
      },
      {
        path: 'sale',
        component: CreateSaleComponent
      }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
