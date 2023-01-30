import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { MyWalletComponent } from './pages/my-wallet/my-wallet.component';
import { MyCardComponent } from './pages/my-card/my-card.component';
import { FinanceChartComponent } from './pages/finance-chart/finance-chart.component';
import { RecentTransactionsComponent } from './pages/recent-transactions/recent-transactions.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatProgressBarModule} from "@angular/material/progress-bar";
import { CreateWalletModalComponent } from './components/create-wallet-modal/create-wallet-modal.component';
import {MatDialog, MatDialogModule} from "@angular/material/dialog";
import {MatFormFieldModule} from "@angular/material/form-field";
import {FormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {HttpClientModule} from "@angular/common/http";
import { ServiceWorkerModule } from '@angular/service-worker';

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    NavBarComponent,
    MyWalletComponent,
    MyCardComponent,
    FinanceChartComponent,
    RecentTransactionsComponent,
    LayoutComponent,
    CreateWalletModalComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatProgressBarModule,
        MatDialogModule,
        MatFormFieldModule,
        FormsModule,
        MatInputModule,
        MatButtonModule,
        HttpClientModule,
        ServiceWorkerModule.register('ngsw-worker.js', {
          enabled: !isDevMode(),
          // Register the ServiceWorker as soon as the application is stable
          // or after 30 seconds (whichever comes first).
          registrationStrategy: 'registerWhenStable:30000'
        })
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
