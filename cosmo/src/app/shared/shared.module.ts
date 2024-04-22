// shared.module.ts
import { NgModule } from '@angular/core';

import { CustomTabBarComponent } from './custom-tab-bar/custom-tab-bar.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [
    CustomTabBarComponent
  ],
  imports: [IonicModule], // Import IonicModule here
  
  exports: [
    CustomTabBarComponent
  ]
})
export class SharedModule { }
