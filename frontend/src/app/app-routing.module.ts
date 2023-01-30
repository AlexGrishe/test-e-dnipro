import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from "./app.component";
import {MyWalletComponent} from "./pages/my-wallet/my-wallet.component";
import {MyCardComponent} from "./pages/my-card/my-card.component";
import {FinanceChartComponent} from "./pages/finance-chart/finance-chart.component";
import {RecentTransactionsComponent} from "./pages/recent-transactions/recent-transactions.component";

const routes: Routes = [
  {path: '',  redirectTo: '/my_wallet', pathMatch: 'full'},
  { path: 'my_wallet', component: MyWalletComponent },
  { path: 'my_card', component: MyCardComponent },
  { path: 'finance_chart', component: FinanceChartComponent },
  { path: 'recent_transactions', component: RecentTransactionsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
