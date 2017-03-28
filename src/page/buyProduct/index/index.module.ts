import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { CommonModule } from '@angular/common';
import { DirectiveModule } from '../../../app/directive/index.module';

import { FixBuyComponent } from '../fix/fix.component';
import { InsuranceBuyComponent } from '../insurance/insurance.component';
import { FundBuyComponent } from '../fund/fund.component';
import { BuyProductComponent } from './index.component';

import { Fix1Component } from '../fix/fix1/fix1.component';
import { Insurance1Component } from '../insurance/insurance1/insurance1.component';

@NgModule({
  imports: [
    CommonModule,
    DirectiveModule,
    IonicModule.forRoot(BuyProductComponent)
    ],
  declarations: [
    BuyProductComponent,
    FixBuyComponent,
    InsuranceBuyComponent,
    FundBuyComponent,
    Fix1Component,
    Insurance1Component
  ]
})
export class IndexBuyProductModule {}



