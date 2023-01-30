import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DataService} from "../../services/data.service";
import {filter, interval, map, of, scan, take} from 'rxjs';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {
  @Input() items: any[] | undefined;
  @Output() dataSideBarChanged: EventEmitter<any> = new EventEmitter<any>()
  public sidebarStatus: boolean = true;
  unreadTransactions: number | any = [];
  unreadTransactionsCount: number = 0;


  constructor(private dataService: DataService) {
    this.unreadTransactions = this.dataService.unreadTransactions
  }

  ngOnInit() {
    this.getUnreadTransactions(this.unreadTransactions, 'no paid')
  }

  changeStatusSideBar() {
    this.sidebarStatus = !this.sidebarStatus
    this.dataSideBarChanged.emit(!this.sidebarStatus)
  }


  getUnreadTransactions(data: any, filter_key: any) {
    interval(200)
      .pipe(
        take(data.length),
        filter(res => data[res].type === filter_key),
        map(res => data[res].type),
        scan((acc, res) => acc.concat(res), [])
      )
      .subscribe((res) => {
        this.unreadTransactionsCount = res.length
      }, null)
  }
}
