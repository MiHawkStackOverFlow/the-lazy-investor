import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MutualFundsComponent } from './components/mutual-funds/mutual-funds.component';
import { MutualFundsMainComponent } from './components/mutual-funds-main/mutual-funds-main.component';

const routes: Routes = [
  {
    path: '', component: MutualFundsMainComponent,
    children: [
      { path: '', redirectTo: 'mutual-funds', pathMatch: 'full' },
      { path: 'mutual-funds', component: MutualFundsComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MutualFundsRoutingModule { }
