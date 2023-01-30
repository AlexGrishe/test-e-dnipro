import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'frontend';
  sidebarItems = [
    { name: 'My Wallet', route: '/my_wallet' },
    { name: 'My Card', route: '/my_card' },
    { name: 'Finance Chart', route: '/finance_chart' },
    { name: 'Recent Transactions', route: '/recent_transactions' }
  ];
}
