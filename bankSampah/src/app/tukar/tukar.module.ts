import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TukarPageRoutingModule } from './tukar-routing.module';

import { TukarPage } from './tukar.page';

import { HttpClientModule } from '@angular/common/http';
import { SaldoService } from '.././services/homepage/saldo.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TukarPageRoutingModule,
    HttpClientModule
  ],
  declarations: [TukarPage],
  providers: [SaldoService],

})
export class TukarPageModule { }
