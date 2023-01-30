import {Injectable} from '@angular/core';
import {BackendService} from "./backend.service";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public userId: string | number = 1;

  public unreadTransactions: Array<object> = [
    {type: 'paid', description: 'test 01'},
    {type: 'paid', description: 'test 01'},
    {type: 'paid', description: 'test 01'},
    {type: 'no paid', description: 'test 01'},
    {type: 'paid', description: 'test 01'},
    {type: 'no paid', description: 'test 01'},
    {type: 'no paid', description: 'test 01'},
  ];

  public unreadMessage: Array<object> = [
    {type: 'paid', description: 'test 01'},
    {type: 'paid', description: 'test 01'},
    {type: 'paid', description: 'test 01'},
    {type: 'no paid', description: 'test 01'},
    {type: 'paid', description: 'test 01'},
    {type: 'no paid', description: 'test 01'},
    {type: 'no paid', description: 'test 01'},
  ];

  walletCards = [
    {name: 'Emergency fund', img: 'assets/images/emergency-icon.png', date: 'August 28, 2022', goal: '1000', collected: '300'},
    {name: 'Travel Plan', img: 'assets/images/travel-icon.png', date: 'August 22, 2022', goal: '20000', collected: '10000'},
    {name: 'Education', img: 'assets/images/education-icon.png', date: 'August 03, 2022', goal: '10000', collected: '7000'},
    {name: 'Foods and Groceries', img: 'assets/images/foods-and-groceries.png', date: 'August 01, 2022', goal: '1000', collected: '300'},
    {name: 'Repair Vehicle', img: 'assets/images/repair-vehicle.png', date: 'August 02, 2022', goal: '1000', collected: '900'},
    {name: 'Donation', img: 'assets/images/donation.png', date: 'August 02, 2022', goal: '1000', collected: '200'},
  ]
  private dataWallet: Object | any;

  constructor(private backandService: BackendService) {
  }

  getUser(): Observable<any> {
    return this.backandService.get(`api/user/${this.userId}`);
  }

  getUserWallets(): Observable<any> {
    return this.backandService.get(`api/user/wallets/${this.userId}`);
  }

  addUserWallet(data: any): Observable<any> {
    return this.backandService.post(`api/user/wallet`, data)
  }

}
