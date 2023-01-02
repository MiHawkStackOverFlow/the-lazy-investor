import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MutualFundsRoutingModule } from './mutual-funds-routing.module';
import { MutualFundsMainComponent } from './components/mutual-funds-main/mutual-funds-main.component';
import { MutualFundsComponent } from './components/mutual-funds/mutual-funds.component';

@NgModule({
  declarations: [
    MutualFundsMainComponent,
    MutualFundsComponent
  ],
  imports: [
    CommonModule,
    MutualFundsRoutingModule
  ]
})
export class MutualFundsModule { }
