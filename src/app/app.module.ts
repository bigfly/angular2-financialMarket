import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { IonicApp, IonicModule } from 'ionic-angular';
import { RouterModule }   from '@angular/router';
import { AppRoutingModule } from './app.router';

import { AppComponent } from './app.component';

import { IndexModule } from '../page/index/index.module';
import { IndexDetailModule } from '../page/detail/index/index.module';

import { ProductListService } from './service/productList.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    IndexModule,
    IndexDetailModule,
    IonicModule.forRoot(AppComponent)
  ],
  providers: [
    ProductListService
  ],
  bootstrap: [
    IonicApp
  ]
})
export class AppModule {}
