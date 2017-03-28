import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { EchartsNg2Module } from 'echarts-ng2';
import { HeaderComponent }  from './Header/Header.component';
import { ListComponent }  from './List/List.component';
import { FooterButtonComponent }  from './footerButton/footerButton.component';
import { ProtocolComponent }  from './Protocol/Protocol.component';
import { EchartComponent }  from './echart/echart.component';



@NgModule({
  imports: [
    EchartsNg2Module,
    CommonModule,
    BrowserModule
  ],
  declarations: [
    HeaderComponent,
    ListComponent,
    FooterButtonComponent,
    EchartComponent,
    ProtocolComponent
  ],
  exports: [
    HeaderComponent,
    ListComponent,
    FooterButtonComponent,
    EchartComponent,
    ProtocolComponent
  ]
})
export class DirectiveModule {}



