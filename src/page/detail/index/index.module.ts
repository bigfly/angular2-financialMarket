import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicApp, IonicModule } from 'ionic-angular';
// import { EchartsNg2Module } from 'echarts-ng2';

import { IndexDetailComponent } from '../index/index.component';

import { DirectiveModule } from '../../../app/directive/index.module';

import { FixDetailComponent } from '../fix/fix.component';
import { InsuranceDetailComponent } from '../insurance/insurance.component';
import { FundDetailComponent } from '../fund/fund.component';

import { Fix1Component } from '../fix/fix1/fix1.component';
import { Insurance1Component } from '../insurance/insurance1/insurance1.component';
import { Fund1Component } from '../fund/fund1/fund1.component';




@NgModule({
  imports: [
    CommonModule,
    // EchartsNg2Module,
    DirectiveModule,
    IonicModule.forRoot(IndexDetailComponent)
  ],
  declarations: [
    FixDetailComponent,
    InsuranceDetailComponent,
    FundDetailComponent,
    IndexDetailComponent,
    Fix1Component,
    Insurance1Component,
    Fund1Component
  ]
})
export class IndexDetailModule {}



