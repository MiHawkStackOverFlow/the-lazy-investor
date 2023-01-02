import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { LandingPageComponent } from './core/components/landing-page/landing-page.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: LandingPageComponent },
  {
    path: 'asset-mutual-funds',
    loadChildren: () => import('./modules/mutual-funds/mutual-funds.module').then(m => m.MutualFundsModule)
  },
  {
    path: 'asset-fd',
    loadChildren: () => import('./modules/fixed-deposits/fixed-deposits.module').then(m => m.FixedDepositsModule)
  },
  {
    path: 'asset-stocks',
    loadChildren: () => import('./modules/stocks/stocks.module').then(m => m.StocksModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
