import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { ComumMmodule } from '../../comum/comum.module';

@NgModule({
  imports: [
    CommonModule,
    ComumMmodule
  ],
  declarations: [CardComponent],
  exports: [CardComponent]
})
export class ComumPortalModule { }
