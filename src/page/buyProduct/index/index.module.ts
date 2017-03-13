import { NgModule } from '@angular/core';
import { FixBuyComponent } from '../fix/fix.component';
import { InsuranceBuyComponent } from '../insurance/insurance.component';
import { FundBuyComponent } from '../fund/fund.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule],
  declarations: [
    FixBuyComponent,
    InsuranceBuyComponent,
    FundBuyComponent,
  ]
})
export class IndexModule {}



