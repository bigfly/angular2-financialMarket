import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { CommonModule } from '@angular/common';
import { DirectiveModule } from '../../../app/directive/index.module';

import { DetailHeaderComponent }  from '../../../app/directive/detailHeader/detailHeader.component';
import { DetailListComponent }  from '../../../app/directive/detailList/detailList.component';
import { FooterButtonComponent }  from '../../../app/directive/footerButton/footerButton.component';
import { EchartComponent }  from '../../../app/directive/echart/echart.component';

import { FixBuyComponent } from '../fix/fix.component';
import { InsuranceBuyComponent } from '../insurance/insurance.component';
import { FundBuyComponent } from '../fund/fund.component';
import { BuyProductComponent } from './index.component';

import { Fix1Component } from '../fix/fix1/fix1.component';

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
    Fix1Component
  ]
})
export class IndexBuyProductModule {}



