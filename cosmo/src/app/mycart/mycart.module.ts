import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MycartPageRoutingModule } from './mycart-routing.module';

import { MycartPage } from './mycart.page';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MycartPageRoutingModule,
    SharedModule // Include SharedModule here
  ],
  declarations: [MycartPage
    
  
  ]
})
export class MycartPageModule {}
