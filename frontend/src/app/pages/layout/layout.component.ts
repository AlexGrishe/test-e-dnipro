import {Component, ViewChild} from '@angular/core';
import {SideBarComponent} from "../../components/side-bar/side-bar.component";

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {
  @ViewChild(SideBarComponent)
  viewChild: SideBarComponent | undefined;
  public sidebarStatus: boolean = false;

  dataSideBarHandler(data: boolean) {
    this.sidebarStatus = data;
  }

  sidebarItems = [
    {name: 'My Wallet', route: '/my_wallet'},
    {name: 'My Card', route: '/my_card'},
    {name: 'Finance Chart', route: '/finance_chart'},
    {name: 'Recent Transactions', route: '/recent_transactions', unread: true}
  ];


}
