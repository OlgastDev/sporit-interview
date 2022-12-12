import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

@NgModule({
  imports: [StoreModule.forRoot({})],
  exports: [StoreModule],
})
export class AppStoreModule {}
