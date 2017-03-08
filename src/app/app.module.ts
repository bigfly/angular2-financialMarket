import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { IonicApp, IonicModule } from 'ionic-angular';

import { RouterModule }   from '@angular/router';
import { AppComponent } from './app.component';
import { bodyComponent } from './body/body.component';
import { AppRoutingModule } from './app.router';
import { IndexModule } from '../page/index//index.module';
import { ProductListService } from './service/productList.service';

@NgModule({
  declarations: [
    AppComponent,
    bodyComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    IndexModule,
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
