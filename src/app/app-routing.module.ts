import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MortgageInputPageComponent } from './mortgage-input-page/mortgage-input-page.component';
import { MortgageCalculationPageComponent } from './mortgage-calculation-page/mortgage-calculation-page.component';

const routes: Routes = [
  {
    path: '',
    component: MortgageInputPageComponent,
  },
  { path: 'calculation', component: MortgageCalculationPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
