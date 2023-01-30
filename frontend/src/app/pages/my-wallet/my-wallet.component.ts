import {Component, OnInit} from '@angular/core';
import {DataService} from "../../services/data.service";
import {filter, interval, map, scan, take} from "rxjs";
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {CreateWalletModalComponent} from "../../components/create-wallet-modal/create-wallet-modal.component";
import {response} from "express";

export interface DialogData {
  name: string,
  goal: string
}

@Component({
  selector: 'app-my-wallet',
  templateUrl: './my-wallet.component.html',
  styleUrls: ['./my-wallet.component.scss']
})
export class MyWalletComponent implements OnInit{
  walletCards: any;
  walletsCardsItems: any;
  user: any;
  data: DialogData | any;
  nameWallet: string | undefined
  goalWallet: string | undefined;
  dataSourceUser = [];//Подставить список из children
  usedId: string | any;


  constructor(private dataService: DataService, public createWalletModal: MatDialog) {
    this.usedId = this.dataService.userId
    // this.user = this.dataService.user
    // this.walletCards = this.dataService.walletCards
  }

  ngOnInit() {
    this.dataService.getUser().subscribe((response: any) => {
      console.log(response)
      return this.user = response["user"];
    })
    this.dataService.getUserWallets().subscribe((response: any) => {
      console.log(response['wallets'])
      return this.walletCards = response['wallets'];
    })
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
        this.walletsCardsItems = res.length
      }, null)
  }

  openCreateNewWalletDialog() {
    const dialog = this.createWalletModal.open(CreateWalletModalComponent, {
      data: {name: this.nameWallet, goal: this.goalWallet}
    });

    dialog.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(this.nameWallet, this.goalWallet)
      console.log(result)
      this.data = result;
      if (this.data) {
        this.data.user_id = 1;
        this.data.name = result['name'];
        this.data.collected = 0;
        this.data.img = 'assets/images/repair-vehicle.png';
      }
      this.dataService.addUserWallet(this.data).subscribe((response: any) => {
        console.log(response)
        this.walletCards.push(response['wallet'])
      })
      console.log(result)
      console.log(this.walletCards)
    });
  }

}
