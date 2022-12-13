import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { MortgageInputPageComponent } from './pages/mortgage-input-page/mortgage-input-page.component';
import { MortgageCalculationPageComponent } from './pages/mortgage-calculation-page/mortgage-calculation-page.component';
import { AppRouterModule } from './router/router.module';
import { AppStoreModule } from './store/store.module';
import { MortgageInputFormComponent } from './components/mortgage-input-form/mortgage-input-form.component';
import { MortgageCalculationComponent } from './components/mortgage-calculation/mortgage-calculation.component';
import { GeneratedMortgageComponent } from './components/generated-mortgage/generated-mortgage.component';
import { MortgageInputContainerComponent } from './components/mortgage-input-container/mortgage-input-container.component';

@NgModule({
  declarations: [
    AppComponent,
    NxWelcomeComponent,
    MortgageInputPageComponent,
    MortgageCalculationPageComponent,
    MortgageInputFormComponent,
    MortgageCalculationComponent,
    GeneratedMortgageComponent,
    MortgageInputContainerComponent,
  ],
  imports: [
    BrowserModule,
    AppRouterModule,
    AppStoreModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
