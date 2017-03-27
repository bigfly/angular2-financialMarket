import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { EchartsNg2Module } from 'echarts-ng2';
import { DetailHeaderComponent }  from './detailHeader/detailHeader.component';
import { DetailListComponent }  from './detailList/detailList.component';
import { FooterButtonComponent }  from './footerButton/footerButton.component';
import { EchartComponent }  from './echart/echart.component';



@NgModule({
  imports: [
    EchartsNg2Module,
    CommonModule,
    BrowserModule
  ],
  declarations: [
    DetailHeaderComponent,
    DetailListComponent,
    FooterButtonComponent,
    EchartComponent
  ],
  exports: [
    DetailHeaderComponent,
    DetailListComponent,
    FooterButtonComponent,
    EchartComponent
  ]
})
export class DirectiveModule {}



