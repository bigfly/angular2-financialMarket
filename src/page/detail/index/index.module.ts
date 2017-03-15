import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicApp, IonicModule } from 'ionic-angular';

import { IndexDetailComponent } from '../index/index.component';
import { FixDetailComponent } from '../fix/fix.component';
import { InsuranceDetailComponent } from '../insurance/insurance.component';
import { FundDetailComponent } from '../fund/fund.component';
import { DetailHeaderComponent }  from '../../../app/directive/detailHeader/detailHeader.component';
import { DetailListComponent }  from '../../../app/directive/detailList/detailList.component';
import { FooterButtonComponent }  from '../../../app/directive/footerButton/footerButton.component';

@NgModule({
  imports: [
    CommonModule,
    IonicModule.forRoot(IndexDetailComponent)
  ],
  declarations: [
    FixDetailComponent,
    InsuranceDetailComponent,
    FundDetailComponent,
    IndexDetailComponent,
    DetailHeaderComponent,
    DetailListComponent,
    FooterButtonComponent
  ]
})
export class IndexDetailModule {}



