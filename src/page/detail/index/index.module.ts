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

import { EchartsNg2Module } from 'echarts-ng2';
import { EchartComponent }  from '../../../app/directive/echart/echart.component';

import { TestDirectiveComponent }  from '../../../app/directive/testDirective/testDirective.component';

@NgModule({
  imports: [
    CommonModule,
    EchartsNg2Module,
    IonicModule.forRoot(IndexDetailComponent)
  ],
  declarations: [
    FixDetailComponent,
    InsuranceDetailComponent,
    FundDetailComponent,
    IndexDetailComponent,
    DetailHeaderComponent,
    DetailListComponent,
    FooterButtonComponent,
    EchartComponent,
    TestDirectiveComponent
  ]
})
export class IndexDetailModule {}



