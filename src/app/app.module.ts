import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { MortgageInputPageComponent } from './pages/mortgage-input-page/mortgage-input-page.component';
import { MortgageCalculationPageComponent } from './pages/mortgage-calculation-page/mortgage-calculation-page.component';
import { AppRouterModule } from './router/router.module';
import { AppStoreModule } from './store/store.module';

@NgModule({
  declarations: [
    AppComponent,
    NxWelcomeComponent,
    MortgageInputPageComponent,
    MortgageCalculationPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRouterModule,
    AppStoreModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
