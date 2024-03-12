import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfilePageRoutingModule } from './profile-routing.module';

import { ProfilePage } from './profile.page';

import { HttpClientModule } from '@angular/common/http';
import { SaldoService } from '.././services/homepage/saldo.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfilePageRoutingModule,
    HttpClientModule
  ],
  declarations: [ProfilePage],
  providers: [SaldoService],

})
export class ProfilePageModule {}
