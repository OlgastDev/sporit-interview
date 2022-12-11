import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { MortgageInputPageComponent } from './mortgage-input-page/mortgage-input-page.component';
import { MortgageCalculationPageComponent } from './mortgage-calculation-page/mortgage-calculation-page.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    NxWelcomeComponent,
    MortgageInputPageComponent,
    MortgageCalculationPageComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
