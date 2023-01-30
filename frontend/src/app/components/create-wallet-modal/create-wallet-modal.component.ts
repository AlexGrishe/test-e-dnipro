import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {DialogData} from "../../pages/my-wallet/my-wallet.component";
import {DataService} from "../../services/data.service";

@Component({
  selector: 'app-create-wallet-modal',
  templateUrl: './create-wallet-modal.component.html',
  styleUrls: ['./create-wallet-modal.component.scss']
})
export class CreateWalletModalComponent implements OnInit {
  user: any;

  constructor(
      private dataService: DataService,
      public dialog: MatDialogRef<CreateWalletModalComponent>,
      @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {}

  ngOnInit() {
    this.dataService.getUser().subscribe((response: any) => {
      console.log(response)
      return this.user = response["user"];
    })
  }

  onNoClick(): void {
    this.dialog.close();
  }
}
