import {NgModule, Optional, SkipSelf} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './components/home/home.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule, FormsModule
  ],
  exports: [
    HomeComponent
  ],
  declarations: [HomeComponent]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only');
    }
  }
}


