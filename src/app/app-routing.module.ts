import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// components
import { CoinsComponent } from './coins/coins.component';
import { CoinDetailComponent } from './coin-detail/coin-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: CoinsComponent },
  { path: 'coin/:id', component: CoinDetailComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
