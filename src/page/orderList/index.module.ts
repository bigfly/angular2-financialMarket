import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicApp, IonicModule } from 'ionic-angular';

import { DirectiveModule } from '../../app/directive/index.module';

import { FixOrderListComponent } from './fix/fixOrderList.component';
import { InsuranceOrderListComponent } from './insurance/insuranceOrderList.component';
import { FundOrderListComponent } from './fund/fundOrderList.component';
import { IndexOrderListComponent } from './index.component';

@NgModule({
  imports: [
    CommonModule,
    DirectiveModule,
    IonicModule.forRoot(FixOrderListComponent)
  ],
  declarations: [
    IndexOrderListComponent,
    FixOrderListComponent,
    InsuranceOrderListComponent,
    FundOrderListComponent,
  ]
})
export class OrderListModule {}
